import json
import logging
from flask import Flask, request, jsonify, render_template
import joblib
import pandas as pd
import numpy as np

logging.basicConfig(level=logging.DEBUG)
logger = logging.getLogger(__name__)

app = Flask(__name__)

# Load model and encoders
model = joblib.load('major_prediction_model.joblib')
with open('data/encoding_schema.json', 'r', encoding='utf-8') as f:
    label_encoders = json.load(f)
major_encoder = joblib.load('major_label_encoder.pkl')


def encode_input(data):
    encoded_data = {}
    features = [
        'Departments', 'Communication Skills', 'Teamwork Skills', 'Management Skills',
        'Critical Thinking', 'Computer Skills', 'Language Skills', 'Machine Operation Skills',
        'Data Analysis Skills', 'Sales and Marketing Skills', 'Writing Skills',
        'Financial Skills', 'Project Management Skills', 'Medical Skills'
    ]

    for feature in features:
        if feature == 'Departments':
            encoded_data[feature] = label_encoders[feature].get(data.get(feature, 'Other'), 0)
        else:
            encoded_data[feature] = label_encoders[feature].get(data.get(feature, 'Trung bình'), 1)

    logger.debug(f"Encoded data: {encoded_data}")
    return encoded_data


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/predict', methods=['POST'])
def predict():
    try:
        data = request.get_json(force=True)
        logger.info(f"Received data: {json.dumps(data, ensure_ascii=False)}")

        encoded_data = encode_input(data)
        input_df = pd.DataFrame([encoded_data])

        logger.debug(f"Input DataFrame shape: {input_df.shape}")
        logger.debug(f"Input DataFrame columns: {input_df.columns}")
        logger.debug(f"Input DataFrame values: {input_df.values}")

        prediction = model.predict(input_df)[0]
        logger.info(f"Raw prediction: {prediction}")

        predicted_major = major_encoder.inverse_transform([prediction])[0]
        logger.info(f"Decoded prediction: {predicted_major}")

        # Convert numpy.int64 to Python int
        if isinstance(predicted_major, np.integer):
            predicted_major = int(predicted_major)

        return jsonify({'predicted_major': predicted_major})
    except Exception as e:
        logger.error(f"Error in predict: {str(e)}", exc_info=True)
        return jsonify({'error': str(e)}), 400


if __name__ == '__main__':
    app.run(debug=True)