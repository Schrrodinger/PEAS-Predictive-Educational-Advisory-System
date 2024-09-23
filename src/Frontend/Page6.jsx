
import './Decorator.css';
// import Subject from "./Subject.js";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
const Page6 = ({formData,updateFormData}) =>{
    const navigate = useNavigate();
    const [fade,setFade] = useState(true);
    const [filled,setFill] = useState(false);
    // HANDLE BACKWARD PAGE TRANSITON
    const handleBackButtonClick = () => {
        setFade(true);
        setTimeout(() => {
            setFade(true);
            navigate('/page5');
        }, 150);
    };

    // HANDLE CHANGING VALUE
    const handleDataChange = (e) =>{
        const{budget ,location,keyfactor} = formData;
        if (budget !== '' && location !== '' && keyfactor !== '') {
            setFill(true);  // All fields are filled
        } else {
            setFill(false);  // One or more fields are empty
        }
        console.log(filled);
        updateFormData({...formData, [e.target.name]: e.target.value});
        console.log(filled);
    };

    //  HANDLE NOT CHOOSING
    // const handleNotChoosing =(e) =>{
    //     const budget = document.getElementById('budget').value;
    //     const location = document.getElementById('location').value;
    //     const keyfactor = document.getElementById('keyfactor').value;
    //     if(budget==='' || location==='' || keyfactor===''){
    //         setFill(false);
    //     }
    //     else{
    //         setFill(false);
    //     }
    //     console.log(filled)
    // }

    // HANDLE BLOCK CHOOSING
    const [selectedBlock, setSelectedBlock] = useState('');

    const handleSelectChange = (event) => {
        const value = event.target.value;
        setSelectedBlock(value);
        localStorage.setItem('selectedBlock', value); // Store the selected block in localStorage
        console.log(value);
    };
    // HANDLE FORM SUBMISSION
    const handleSubmit = async (e) => {
        e.preventDefault();
        if(filled === false){
            alert('Vui lòng điền đầy đủ các mục bên dưới !');
            return;
        }

        // Convert formData to JSON and store it (this can be sent to a server or downloaded as a file)
        const formDataJson = JSON.stringify(formData, null, 2);
        console.log("Form Data JSON:", formDataJson);

        // You can save this JSON to localStorage or send it to the server as per your requirement
        localStorage.setItem('formData', formDataJson);

        try {
            // Send form data to Flask backend
            const response = await fetch('http://127.0.0.1:5000/predict', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            const resultData = await response.json();
            if (response.ok) {
                console.log('Prediction result:', resultData);
                navigate('/result', {state: {result: resultData.predicted_major_name}}); // Navigate to the result page
            } else {
                console.error('Error:', resultData.error);
            }
        } catch (error) {
            console.error('Error during submission:', error);
        }
    };

    const [result, setResult] = useState(null);


    return (
        <div className="LastPage large-12 small-12 medium-12 columns ${fade ? 'fade-out' : ''}" style={{ boxSizing: 'border-box', marginLeft: 0, marginTop: 0, width: '100%', height: '80vh', position: 'relative', overflowY: 'scroll' }}>
            <div className="Panigation large-12 medium-12 small-12 columns" style={{
                boxSizing: 'border-box',
                position: 'relative',
                width: '100%',
                height: 'fit-content',
                display: 'inline-block',
                margin: 'auto'
            }}>
                <a href="#" className="Previous large-6 medium-6 small-6 columns"
                   style={{position: 'relative', height: 'inherit', width: 'fit-content'}}>
                    <span className="LeftPani large-12 medium-12 small-12 columns"
                          style={{position: 'relative', color: 'lightgoldenrodyellow', textAlign: 'left'}}
                          onClick={handleBackButtonClick}>&#8249;</span>
                </a>
                <div className="SubmitButton large-6 medium-6 small-6 columns" style={{
                    position: 'relative',
                    height: 'inherit',
                    width: 'fit-content',
                    alignSelf: 'center',
                    alignItems: 'center'
                }}>
                    <button type="submit" className="button Submit large-12 medium-12 small-12 columns" style={{
                        position: 'relative',
                        background: 'lightgoldenrodyellow',
                        textAlign: 'center',
                        borderRadius: '50px',
                        color: 'black',
                        fontFamily: 'Montserrat, sans-serif',
                        fontKerning: 'auto',
                        fontStyle: 'italic',
                        fontWeight: 'normal',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }} onClick={handleSubmit}>Submit
                    </button>
                </div>
            </div>
            <div className="Text large-12 medium-12 small-12 columns" style={{
                boxSizing: 'border-box',
                position: 'relative',
                width: '100%',
                height: 'fit-content',
                margin: 'auto'
            }}>
                <div className="Title large-12 medium-12- small-12 columns" style={{
                    position: 'relative',
                    fontKerning: 'auto',
                    fontFamily: 'Montserrat, sans-serif',
                    color: '#E7E7C8',
                    fontStyle: 'italic'
                }}>
                    NHẬP THÔNG TIN
                </div>
                <div className="Sub large-12 medium-12- small-12 columns" style={{
                    position: 'relative',
                    fontKerning: 'auto',
                    fontFamily: 'Montserrat, sans-serif',
                    color: 'floralwhite',
                    fontStyle: 'italic'
                }}>
                    Nhập thông tin của bạn dưới đây để tiến hành phân tích
                </div>
            </div>
            <div className="LastContainer large-12 medium-12 small-12 columns"
                 style={{boxSizing: 'border-box', position: 'relative', width: '100%', height: 'fit-content'}}>
                <form className="General1 large-12 medium-12 small-12 columns" style={{height: "fit-content"}}
                      onChange={handleDataChange} >
                    <label className="Budget" style={{position: 'relative'}}>
                        <div className="custom-select">
                            <select className="Bar" id="budget" name="Annual Tuition Budget" required>
                                <option value="" disabled selected>Chọn mức học phí phù hợp với bạn</option>
                                <option value={"Dưới 50.000.000 VND"}>Dưới 50.000.000 VND/năm</option>
                                <option value={"Trên 50.000.000 VND"}>Trên 50.000.000 VND/năm</option>
                                <option value={"Trên 100.000.000 VND"}>Trên 100.000.000 VND/m/năm</option>
                            </select>
                        </div>
                    </label>
                    <label className="Location" style={{position: 'relative'}}>
                        <div className="custom-select">
                            <select className="Bar" id="location" name="Preferred Location" required style={{overflowY:"scroll"}} >
                                <option value="" disabled selected>Chọn nơi bạn muốn học</option>
                                <option value={"Miền Bắc"}>Khu vực miền Bắc</option>
                                <option value={"Miền Trung"}>Khu vực miền Trung</option>
                                <option value={"Miền Nam"}>Khu vực miền Nam</option>
                            </select>
                        </div>
                    </label>
                    <label className="KeyFactor" style={{position: 'relative'}}>
                        <div className="custom-select">
                            <select className="Bar" id="keyfactor" name="Key Factors for Future Job" required
                                    onChange={handleSelectChange}>
                                <option value="" disabled selected>Chọn yếu tố ưu tiên khi chọn ngành</option>
                                <option value={"Khả năng học hỏi"}>Khả năng học hỏi</option>
                                <option value={"Cơ hội phát triển"}>Cơ hội phát triển</option>
                                <option value={"Thu nhập cao"}>Thu nhập cao</option>
                                <option value={"Công việc ổn định"}>Công việc ổn định</option>
                                <option value={"Thách thức và kích thích"}>Thách thức và kích thích</option>
                                <option value={"Sáng tạo"}>Sáng tạo</option>
                                <option value={"Linh hoạt về thời gian"}>Linh hoạt thời gian</option>
                                <option value={"Đóng góp cho xã hội"}>Có thể đóng góp cho xã hội</option>
                                <option value={"Other"}>Khác</option>
                            </select>
                        </div>
                    </label>
                </form>
                {/*/!* Display the result *!/*/}
                {/*{result && (*/}
                {/*    <div>*/}
                {/*        <h3>Prediction Result:</h3>*/}
                {/*        <p>{result}</p>*/}
                {/*    </div>*/}
                {/*)}*/}
            </div>
        </div>
    );
};
export default Page6;

