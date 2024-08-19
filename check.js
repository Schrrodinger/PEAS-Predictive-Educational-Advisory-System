document.getElementById('majorPredictionForm').addEventListener('submit', function(e) {
    e.preventDefault();

    var formData = new FormData(this);
    var jsonData = {};
    formData.forEach((value, key) => {jsonData[key] = value});

    // Show loading message
    document.getElementById('result').innerText = 'Predicting...';

    fetch('/predict', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(jsonData)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        if (data.error) {
            throw new Error(data.error);
        }
        document.getElementById('result').innerText = 'Predicted Major: ' + data.predicted_major;
    })
    .catch((error) => {
        console.error('Error:', error);
        document.getElementById('result').innerText = 'An error occurred: ' + error.message;
    });
});