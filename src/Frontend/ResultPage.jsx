
import { useLocation } from "react-router-dom";

const ResultPage = () => {
    const location = useLocation();
    const { result } = location.state; // Get the result from state

    return (
        <div>
            <h3>Prediction Result:</h3>
            <p>{result}</p>
        </div>
    );
};

export default ResultPage;
