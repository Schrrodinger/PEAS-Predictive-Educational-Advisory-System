import json
import logging
from flask import Flask, request, jsonify, send_from_directory
import joblib
import pandas as pd
import numpy as np
from flask_cors import CORS

# Set up logging
logging.basicConfig(level=logging.DEBUG)
logger = logging.getLogger(__name__)

# Initialize Flask app
app = Flask(__name__, static_folder='.', static_url_path='')
CORS(app)

# Load model and encoders
model = joblib.load('major_prediction_model.joblib')
with open('data/encoding_schema.json', 'r', encoding='utf-8') as f:
    label_encoders = json.load(f)

# Mapping of encoded values to major names
major_mapping = {
    1: "Ngôn ngữ",
    2: "Nghệ thuật",
    3: "Nghệ thuật ứng dụng",
    4: "Kinh tế học",
    5: "Báo chí và Thông tin",
    6: "Kinh doanh và Quản lý",
    7: "Luật",
    8: "Khoa học tự nhiên",
    9: "Toán và thống kê",
    10: "Máy tính và Công nghệ thông tin",
    11: "Kỹ thuật",
    12: "Sản xuất và Chế biến",
    13: "Kiến trúc và Xây dựng",
    14: "Nông, Lâm nghiệp và Thủy sản",
    15: "Thú y",
    16: "Sức khỏe",
    17: "Du lịch, Khách sạn, Thể thao và Dịch vụ cá nhân",
    18: "Dịch vụ vận tải",
    19: "Khoa học môi trường",
    20: "An ninh - Quốc phòng",
    21: "Khoa học giáo dục và đào tạo giáo viên"
}

def encode_input(data):
    encoded_data = {}
    features = [
        'Departments', 'Communication Skills', 'Teamwork Skills', 'Management Skills',
        'Critical Thinking', 'Computer Skills', 'Language Skills', 'Machine Operation Skills',
        'Data Analysis Skills', 'Sales and Marketing Skills', 'Writing Skills',
        'Financial Skills', 'Project Management Skills', 'Medical Skills', 'Habit', 'Field of Interest'
    ]
    for feature in features:
        if feature in ['Departments', 'Field of Interest', 'Habit']:
            # Handle categorical features
            encoded_data[feature] = label_encoders[feature].get(data.get(feature, 'Other'), 0)
        else:
            # Handle ordinal features
            encoded_data[feature] = label_encoders[feature].get(data.get(feature, 'Trung bình'), 1)
    logger.debug(f"Encoded data: {encoded_data}")
    return encoded_data

@app.route('/<path:path>')
def static_proxy(path):
    return send_from_directory(app.static_folder, path)

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

        # Ensure the prediction is within the range of valid majors
        predicted_major_index = int(prediction) % len(major_mapping)
        predicted_major_name = major_mapping[predicted_major_index]
        logger.info(f"Decoded prediction index: {predicted_major_index}")
        logger.info(f"Decoded prediction name: {predicted_major_name}")

        return jsonify({
            'predicted_major': predicted_major_index,
            'predicted_major_name': predicted_major_name
        })
    except Exception as e:
        logger.error(f"Error in predict: {str(e)}", exc_info=True)
        return jsonify({'error': str(e)}), 400

if __name__ == '__main__':
    app.run(debug=True)