import { useLocation } from "react-router-dom";
import { useState, useEffect } from 'react';

const ResultPage = () => {
    const location = useLocation();
    const { formData } = location.state;
    const [predictionResult, setPredictionResult] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPrediction = async () => {
            try {
                const response = await fetch('http://127.0.0.1:5000/predict', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(formData)
                });

                if (!response.ok) {
                    throw new Error('Failed to fetch prediction');
                }

                const data = await response.json();
                setPredictionResult(data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching prediction:', error);
                setError('Failed to load prediction data. Please try again later.');
                setLoading(false);
            }
        };

        if (formData) {
            fetchPrediction();
        } else {
            setError('No form data available. Please try again.');
            console.log(formData);
            setLoading(false);
        }
    }, [formData]);

    if (loading) {
        return <div style={{ color: "white" }}>Loading...</div>;
    }

    if (error) {
        return <div style={{ color: "white" }}>{error}</div>;
    }

    return (
        <div style={{ color: "white", padding: "20px" }}>
            <h2>Kết quả dự đoán ngành học phù hợp:</h2>
            <p style={{ fontSize: "24px", fontWeight: "bold" }}>{predictionResult.predicted_major_name}</p>

            <h3>Các trường đại học phù hợp trong khu vực {predictionResult.preferred_region}:</h3>
            {predictionResult.matching_schools.length > 0 ? (
                <ul>
                    {predictionResult.matching_schools.map((school, index) => (
                        <li key={index}>{school}</li>
                    ))}
                </ul>
            ) : (
                <p>Không tìm thấy trường đại học phù hợp trong khu vực này cho ngành {predictionResult.predicted_major_name}.</p>
            )}

            <h3>Thông tin bổ sung:</h3>
            <p>Mức học phí: {formData["Annual Tuition Budget"]}</p>
            <p>Yếu tố ưu tiên: {formData["Key Factors for Future Job"]}</p>
        </div>
    );
};

export default ResultPage;