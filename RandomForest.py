import pandas as pd
import numpy as np
from sklearn.preprocessing import LabelEncoder, StandardScaler
from sklearn.model_selection import train_test_split

from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import classification_report, accuracy_score, confusion_matrix
import seaborn as sns
import matplotlib.pyplot as plt

# Đọc dữ liệu
data = pd.read_csv('data/Final Major.csv')

# Xác định các cột cần thiết
departments = ['Departments']
soft_skills = ['Communication Skills', 'Teamwork Skills', 'Management Skills', 'Critical Thinking']
hard_skills = ['Computer Skills', 'Language Skills', 'Machine Operation Skills', 'Data Analysis Skills',
               'Sales and Marketing Skills', 'Writing Skills', 'Financial Skills', 'Project Management Skills',
               'Medical Skills']

# Kết hợp tất cả các cột features
features = departments + soft_skills + hard_skills

# Tách features và target
X = data[features]
y = data['Major']

# Chuyển đổi các biến categorical sang numerical
le = LabelEncoder()
for column in X.columns:
    if X[column].dtype == 'object':
        X[column] = le.fit_transform(X[column])

# Chuẩn hóa dữ liệu
scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)

# Chuyển X_scaled trở lại DataFrame để giữ tên cột
X_scaled_df = pd.DataFrame(X_scaled, columns=X.columns)

# Chia dữ liệu thành tập train và test
X_train, X_test, y_train, y_test = train_test_split(X_scaled_df, y, test_size=0.2, random_state=42)

print("Shape of training data:", X_train.shape)
print("Shape of testing data:", X_test.shape)
print("Number of unique majors:", y.nunique())
print("List of majors:", y.unique())

# Lưu tên cột để sử dụng sau này
feature_names = X.columns


# Khởi tạo mô hình
rf_model = RandomForestClassifier(n_estimators=100, random_state=42)

# Huấn luyện mô hình
rf_model.fit(X_train, y_train)

# Dự đoán trên tập test
y_pred = rf_model.predict(X_test)

# Đánh giá mô hình
print("Accuracy:", accuracy_score(y_test, y_pred))
print("\nClassification Report:")
print(classification_report(y_test, y_pred))

# In ra tầm quan trọng của các features
feature_importance = pd.DataFrame({'feature': feature_names, 'importance': rf_model.feature_importances_})
print("\nFeature Importance:")
print(feature_importance.sort_values('importance', ascending=False))

# Vẽ confusion matrix
plt.figure(figsize=(10, 8))
sns.heatmap(confusion_matrix(y_test, y_pred), annot=True, fmt='d', cmap='Blues')
plt.title('Confusion Matrix')
plt.ylabel('True Label')
plt.xlabel('Predicted Label')
plt.show()


def predict_major(student_info, model, scaler, le, feature_names):
    # Chuyển đổi thông tin học sinh thành DataFrame
    input_df = pd.DataFrame([student_info])

    # Đảm bảo tất cả các cột cần thiết đều có mặt
    for column in feature_names:
        if column not in input_df.columns:
            input_df[column] = 0  # hoặc giá trị mặc định phù hợp

    # Sắp xếp lại các cột để khớp với thứ tự trong dữ liệu huấn luyện
    input_df = input_df[feature_names]

    # Áp dụng LabelEncoder cho các cột categorical
    for column in input_df.columns:
        if input_df[column].dtype == 'object':
            input_df[column] = le.transform(input_df[column])

    # Chuẩn hóa dữ liệu đầu vào
    input_scaled = scaler.transform(input_df)

    # Dự đoán
    prediction = model.predict(input_scaled)
    probabilities = model.predict_proba(input_scaled)

    # Lấy top 3 ngành học có xác suất cao nhất
    top_3_indices = probabilities[0].argsort()[-3:][::-1]
    top_3_majors = [(model.classes_[i], probabilities[0][i]) for i in top_3_indices]

    return prediction[0], top_3_majors


# Sử dụng hàm
student_info = {
    'Departments': 1,  # Giả sử 1 tương ứng với một khoa cụ thể
    'Communication Skills': 4,
    'Teamwork Skills': 3,
    'Management Skills': 3,
    'Critical Thinking': 4,
    'Computer Skills': 2,  # Giả sử 2 tương ứng với 'Average'
    'Language Skills': 1,  # Giả sử 1 tương ứng với 'Fair'
    'Machine Operation Skills': 2,
    'Data Analysis Skills': 3,
    'Sales and Marketing Skills': 2,
    'Writing Skills': 2,
    'Financial Skills': 1,
    'Project Management Skills': 2,
    'Medical Skills': 1
}

predicted_major, top_3_majors = predict_major(student_info, rf_model, scaler, le, feature_names)
print(f"Predicted major: {predicted_major}")
print("Top 3 recommended majors:")
for major, probability in top_3_majors:
    print(f"{major}: {probability:.2f}")