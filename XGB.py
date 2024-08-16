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

# Read the data
data = pd.read_csv('data/Final Major.csv')

# Define necessary columns
departments = ['Departments']
soft_skills = ['Communication Skills', 'Teamwork Skills', 'Management Skills', 'Critical Thinking']
hard_skills = ['Computer Skills', 'Language Skills', 'Machine Operation Skills', 'Data Analysis Skills',
               'Sales and Marketing Skills', 'Writing Skills', 'Financial Skills', 'Project Management Skills',
               'Medical Skills']

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

# Evaluate the model
print("Best parameters found: ", grid_search.best_params_)
print("Accuracy:", accuracy_score(y_test, y_pred))
print("\nClassification Report:")
print(classification_report(y_test, y_pred, target_names=le.classes_))

# Print feature importance
feature_importance = pd.DataFrame({'feature': feature_names, 'importance': best_xgb_model.feature_importances_})
print("\nFeature Importance:")
print(feature_importance.sort_values('importance', ascending=False))

# Plot confusion matrix
plt.figure(figsize=(10, 8))
sns.heatmap(confusion_matrix(y_test, y_pred), annot=True, fmt='d', cmap='Blues')
plt.title('Confusion Matrix')
plt.ylabel('True Label')
plt.xlabel('Predicted Label')
plt.show()