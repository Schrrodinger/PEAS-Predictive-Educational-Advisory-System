from flask import Flask, request, jsonify, render_template
import joblib
import pandas as pd
import json
import os

app = Flask(__name__,template_folder='template')
model = joblib.load('major_prediction_model.joblib')

with open('data/encoding_schema.json', 'r', encoding='utf-8') as f:
    label_encoders = json.load(f)

import pickle
with open('major_prediction_model.pkl', 'rb') as f:
    model = pickle.load(f)

def encode_input(data):
    encoded_data = {}
    for key, value in data.items():
        if key in label_encoders:
            encoded_data[key] = label_encoders[key].get(value, label_encoders[key].get('Other', 0))
        else:
            encoded_data[key] = value
    return encoded_data

def decode_prediction(prediction):
    for major, code in label_encoders['Major'].items():
        if code == prediction:
            return major
    return "Unknown Major"

print("Current working directory:", os.getcwd())
print("Model file exists:", os.path.exists('major_prediction_model.joblib'))
model = joblib.load('major_prediction_model.joblib')
@app.route('/')
def index():
    return render_template('index.html')

@app.route('/predict', methods=['POST'])
def predict():
    try:
        data = request.json
        print("Received data:", data)  # Debug print
        encoded_data = encode_input(data)

        input_df = pd.DataFrame([encoded_data])

        required_columns = [
            'Gender', 'Departments', 'Habit', 'Field of interest', 'Computer Skills',
            'Language Skills', 'Machine Operation Skills', 'Data Analysis Skills',
            'Sales and Marketing Skills', 'Writing Skills', 'Financial Skills',
            'Project Management Skills', 'Medical Skills', 'Annual Tuition Budget',
            'Preferred Location', 'Key Factors for Future Job'
        ]
        for col in required_columns:
            if col not in input_df.columns:
                input_df[col] = 0

        prediction = model.predict(input_df)[0]
        predicted_major = decode_prediction(prediction)

        return jsonify({'predicted_major': predicted_major})
    except Exception as e:
        print("Error:", str(e))  # Debug print
        return jsonify({'error': str(e)}), 400

if __name__ == '__main__':
    app.run(debug=True)