import json

import pandas as pd
import numpy as np
from sklearn.preprocessing import LabelEncoder
from sklearn.model_selection import train_test_split
import xgboost as xgb
from xgboost import XGBClassifier
from sklearn.metrics import classification_report, accuracy_score, confusion_matrix
from sklearn.model_selection import GridSearchCV
import seaborn as sns
import matplotlib.pyplot as plt
import xgboost as xgb
print(xgb.__version__)

# Read the data
data = pd.read_csv('data/Balance Predict Major Decoded.csv')

# Define necessary columns
departments = ['Departments']
soft_skills = ['Communication Skills', 'Teamwork Skills', 'Management Skills', 'Critical Thinking']
hard_skills = ['Computer Skills', 'Language Skills', 'Machine Operation Skills', 'Data Analysis Skills',
               'Sales and Marketing Skills', 'Writing Skills', 'Financial Skills', 'Project Management Skills',
               'Medical Skills','Habit','Field of Interest']

# Combine all feature columns
features = departments + soft_skills + hard_skills

# Split features and target
X = data[features]
y = data['Major']

# Convert categorical variables to numerical
le = LabelEncoder()
for column in X.columns:
    if X[column].dtype == 'object':
        X[column] = le.fit_transform(X[column])

# Encode the target variable
y = le.fit_transform(y)

# Split data into train and test sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

print("Shape of training data:", X_train.shape)
print("Shape of testing data:", X_test.shape)
print("Number of unique majors:", len(np.unique(y)))

# Save feature names for later use
feature_names = X.columns



# Define parameter grid for GridSearchCV
param_grid = {
    'max_depth': [3, 4, 5],
    'learning_rate': [0.01, 0.1, 0.3],
    'n_estimators': [100, 200],
    'subsample': [0.8, 1.0]
}

# Initialize XGBoost classifier
xgb_model = XGBClassifier(use_label_encoder=False, eval_metric='mlogloss', random_state=42)

# Perform GridSearchCV
grid_search = GridSearchCV(estimator=xgb_model, param_grid=param_grid, cv=3, n_jobs=-1, verbose=2)
grid_search.fit(X_train, y_train)

# Get the best model
best_xgb_model = grid_search.best_estimator_

# Make predictions on test set
y_pred = best_xgb_model.predict(X_test)

import joblib
joblib.dump(best_xgb_model, 'major_prediction_model.joblib')

# Evaluate the model
print("Best parameters found: ", grid_search.best_params_)
print("Accuracy:", accuracy_score(y_test, y_pred))

# Print feature importance
feature_importance = pd.DataFrame({'feature': feature_names, 'importance': best_xgb_model.feature_importances_})
print("\nFeature Importance:")
print(feature_importance.sort_values('importance', ascending=False))

# At the end of your XGB.py file
import joblib
#joblib.dump(best_xgb_model, 'major_prediction_model.joblib')
joblib.dump(le, 'major_label_encoder.pkl')

import pickle
with open('major_prediction_model.pkl', 'wb') as f:
    pickle.dump(best_xgb_model, f)


# Add this at the end of your XGB.py file

# Load the trained model
loaded_model = joblib.load('major_prediction_model.joblib')

# Load the encoding schema
with open('data/encoding_schema.json', 'r', encoding='utf-8') as f:
    encoding_schema = json.load(f)

# Create a reverse mapping for majors
major_mapping = {v: k for k, v in encoding_schema['Major'].items()}

# Create a sample input
sample_input = pd.DataFrame({
    'Departments': [5],
    'Communication Skills': [2],
    'Teamwork Skills': [3],
    'Management Skills': [2],
    'Critical Thinking': [3],
    'Computer Skills': [1],
    'Language Skills': [5],
    'Machine Operation Skills': [1],
    'Data Analysis Skills': [1],
    'Sales and Marketing Skills': [1],
    'Writing Skills': [2],
    'Financial Skills': [1],
    'Project Management Skills': [1],
    'Medical Skills': [1],
    'Habit': [1],
    'Field of Interest': [4]
})

# Ensure the order of columns matches the order used during training
feature_names = ['Departments', 'Communication Skills', 'Teamwork Skills', 'Management Skills', 'Critical Thinking',
                 'Computer Skills', 'Language Skills', 'Machine Operation Skills', 'Data Analysis Skills',
                 'Sales and Marketing Skills', 'Writing Skills', 'Financial Skills', 'Project Management Skills',
                 'Medical Skills', 'Habit', 'Field of Interest']
sample_input = sample_input[feature_names]

# Make a prediction
prediction = loaded_model.predict(sample_input)

# Decode the prediction using the mapping
try:
    decoded_prediction = major_mapping[prediction[0]]
except KeyError:
    print(f"Error: Prediction {prediction[0]} not found in mapping.")
    decoded_prediction = "Unknown"

print("\nSample Input:")
print(sample_input)
print("\nPredicted Major (numeric):", prediction[0])
print("Predicted Major (text):", decoded_prediction)

# Print additional debugging information
print("\nModel classes:", loaded_model.classes_)
print("Number of classes in model:", len(loaded_model.classes_))
print("Number of unique majors in data:", len(encoding_schema['Major']))
