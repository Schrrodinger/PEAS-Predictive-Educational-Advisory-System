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

#Load school data
school_data=pd.read_csv('data/Score.csv')

# Mapping of encoded values to major names
major_mapping = {
    0: "Ngôn ngữ",
    1: "Nghệ thuật",
    2: "Nghệ thuật ứng dụng",
    3: "Kinh tế học",
    4: "Báo chí và Thông tin",
    5: "Kinh doanh và Quản lý",
    6: "Luật",
    7: "Khoa học tự nhiên",
    8: "Toán và thống kê",
    9: "Máy tính và Công nghệ thông tin",
    10: "Kỹ thuật",
    11: "Sản xuất và Chế biến",
    12: "Kiến trúc và Xây dựng",
    13: "Nông, Lâm nghiệp và Thủy sản",
    14: "Thú y",
    15: "Sức khỏe",
    16: "Du lịch, Khách sạn, Thể thao và Dịch vụ cá nhân",
    17: "Dịch vụ vận tải",
    18: "Khoa học môi trường",
    19: "An ninh - Quốc phòng",
    20: "Khoa học giáo dục và đào tạo giáo viên"
}


def encode_input(data):
    encoded_data = {}
    features = [
        'Departments', 'Communication Skills', 'Teamwork Skills', 'Management Skills',
        'Critical Thinking', 'Computer Skills', 'Language Skills', 'Machine Operation Skills',
        'Data Analysis Skills', 'Sales and Marketing Skills', 'Writing Skills',
        'Financial Skills', 'Project Management Skills', 'Medical Skills'
    ]
    for feature in features:
        if feature in data:
            if feature == 'Departments':
                encoded_data[feature] = label_encoders[feature].get(data[feature], 0)
            else:
                encoded_data[feature] = label_encoders[feature].get(data[feature], 1)
        else:
            logger.warning(f"Missing feature: {feature}")
    logger.debug(f"Encoded data: {encoded_data}")
    return encoded_data


def find_matching_schools(major_code, region):
    region_map = {"Miền Bắc": "3", "Miền Trung": "2", "Miền Nam": "1"}
    region_code = region_map.get(region)

    logger.info(f"Searching for schools with major_code: {major_code} in region: {region}")

    if region_code is None:
        logger.warning(f"Unrecognized region: {region}. Showing schools from all regions.")
        matching_schools = school_data[school_data['Major'] == major_code]
    else:
        matching_schools = school_data[(school_data['Region'] == int(region_code)) &
                                       (school_data['Major'] == major_code)]

    schools_list = matching_schools['University'].unique().tolist()
    logger.info(f"Found {len(schools_list)} matching schools")

    return schools_list
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

        #find maching school
        # matching_schools=find_matching_schools(predicted_major_index,data.get('Preferred Locations'))
        # logger.info(f"Matching schools: {matching_schools}")

        # Find matching schools
        preferred_region = data.get('Preferred Location')
        matching_schools = find_matching_schools(predicted_major_index, preferred_region)

        return jsonify({
            'predicted_major': predicted_major_index,
            'predicted_major_name': predicted_major_name,
            'matching_schools': matching_schools,
            'preferred_region': preferred_region
        })
    except Exception as e:
        logger.error(f"Error in predict: {str(e)}", exc_info=True)
        return jsonify({'error': str(e)}), 400
    
if __name__ == '__main__':
    app.run(debug=True)