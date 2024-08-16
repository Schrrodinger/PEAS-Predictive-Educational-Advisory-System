from flask import Flask, request, jsonify
import joblib
import pandas as pd
from sklearn.preprocessing import LabelEncoder
import json

app = Flask(__name__)
model = joblib.load('major_prediction_model.joblib')

# Load the LabelEncoder used during training
with open('label_encoder.json', 'r') as f:
    le_dict = json.load(f)
    le = LabelEncoder()
    le.classes_ = le_dict['classes']


@app.route('/predict', methods=['POST'])
def predict():
    data = request.json

    # Convert input data to DataFrame
    input_df = pd.DataFrame([data])

    # Preprocess the input data
    for column in input_df.columns:
        if input_df[column].dtype == 'object':
            input_df[column] = le.transform(input_df[column])

    # Make prediction
    prediction = model.predict(input_df)
    predicted_major = le.inverse_transform(prediction)[0]

    # Optionally, save the input data and prediction to a database
    save_to_database(data, predicted_major)

    return jsonify({'predicted_major': predicted_major})


def save_to_database(input_data, prediction):
    # Implement your database saving logic here
    # For example, using SQLAlchemy with a User model:
    # new_prediction = User(input_data=json.dumps(input_data), prediction=prediction)
    # db.session.add(new_prediction)
    # db.session.commit()
    pass


if __name__ == '__main__':
    app.run(debug=True)