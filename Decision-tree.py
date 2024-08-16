import pandas as pd
import numpy as np
from sklearn.preprocessing import LabelEncoder
from sklearn.model_selection import train_test_split
from sklearn.tree import DecisionTreeClassifier

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


from sklearn.tree import DecisionTreeClassifier, plot_tree
from sklearn.metrics import classification_report, accuracy_score, confusion_matrix
from sklearn.model_selection import GridSearchCV
import matplotlib.pyplot as plt
import seaborn as sns

# Define parameter grid for GridSearchCV
param_grid = {
    'max_depth': [3, 5, 7, 9],
    'min_samples_split': [2, 5, 10],
    'min_samples_leaf': [1, 2, 4]
}

# Initialize Decision Tree classifier
dt_model = DecisionTreeClassifier(random_state=42)

# Perform GridSearchCV
grid_search = GridSearchCV(estimator=dt_model, param_grid=param_grid, cv=5, n_jobs=-1, verbose=2)
grid_search.fit(X_train, y_train)

# Get the best model
best_dt_model = grid_search.best_estimator_

# Make predictions on test set
y_pred = best_dt_model.predict(X_test)

# Evaluate the model
print("Best parameters found: ", grid_search.best_params_)
print("Accuracy:", accuracy_score(y_test, y_pred))
print("\nClassification Report:")
print(classification_report(y_test, y_pred, target_names=le.classes_))

# Print feature importance
feature_importance = pd.DataFrame({'feature': feature_names, 'importance': best_dt_model.feature_importances_})
print("\nFeature Importance:")
print(feature_importance.sort_values('importance', ascending=False))

# Plot confusion matrix
plt.figure(figsize=(10, 8))
sns.heatmap(confusion_matrix(y_test, y_pred), annot=True, fmt='d', cmap='Blues')
plt.title('Confusion Matrix')
plt.ylabel('True Label')
plt.xlabel('Predicted Label')
plt.show()

# Visualize the decision tree
plt.figure(figsize=(20,10))
plot_tree(best_dt_model, feature_names=feature_names, class_names=le.classes_, filled=True, rounded=True)
plt.show()