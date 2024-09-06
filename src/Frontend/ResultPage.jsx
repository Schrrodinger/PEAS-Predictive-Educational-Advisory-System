
import { useLocation } from "react-router-dom";

const ResultPage = () => {
    const location = useLocation();
    const { result } = location.state; // Get the result from state

    return (
        <div>
            <h3 style = {{color:"white"}}>Prediction Result:</h3>
            <p style = {{color:"white"}}>{result}</p>
        </div>
    );
};

export default ResultPage;
