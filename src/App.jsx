import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Page0 from './Frontend/Page0.jsx';
import Page1 from './Frontend/Page1.jsx';
import Page2 from './Frontend/Page2.jsx';
import Page3 from './Frontend/Page3.jsx';
import Page4 from './Frontend/Page4.jsx';
import Page5 from './Frontend/Page5.jsx';
import Page6 from './Frontend/Page6.jsx';
import ResultPage from "./Frontend/ResultPage.jsx";
import './Frontend/Decorator.css';
import {useState} from "react";


function App() {
    const [formData, setFormData] = useState({
        Age:'',
        Gender:'',
        Departments:'',
        Mark1:'',
        Mark2:'',
        Mark3:'',
        Field_of_Interest:'',
        Habit:'',
        Communication_Skills:'',
        Teamwork_Skills:'',
        Management_Skills:'',
        Critical_Thinking:'',
        Computer_Skills:'',
        Language_Skills:'',
        MachineOP_Skills:'',
        Data_Analysis_Skills:'',
        Sales_Marketing_Skills:'',
        Writing_Skills:'',
        Financial_Skills:'',
        Project_Management_Skills:'',
        Medical_Skills:'',
        Budget:'',
        Location:'',
        KeyFactor:''
    });

    const updateFormData = (newData) => {
        setFormData((prevData) => ({ ...prevData, ...newData }));
    };
    return (
        <Router>
            <div className="navigation">
                <Routes>
                    <Route path="/" element={<Page0 />} />
                    <Route path="/page1" element={<Page1 formData={formData} updateFormData={updateFormData} />} />
                    <Route path="/page2" element={<Page2 formData={formData} updateFormData={updateFormData} />} />
                    <Route path="/page3" element={<Page3 formData={formData} updateFormData={updateFormData} />} />
                    <Route path="/page4" element={<Page4 formData={formData} updateFormData={updateFormData} />} />
                    <Route path="/page5" element={<Page5 formData={formData} updateFormData={updateFormData} />} />
                    <Route path="/page6" element={<Page6 formData={formData} updateFormData={updateFormData} />} />
                    <Route path="/result" element={<ResultPage />} />
                </Routes>
            </div>
        </Router>
    );
}
export default App;
