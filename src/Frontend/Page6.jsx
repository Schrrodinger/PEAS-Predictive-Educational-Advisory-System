
import './Decorator.css';
// import Subject from "./Subject.js";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
const Page6 = ({formData,updateFormData}) =>{
    const navigate = useNavigate();
    const [fade,setFade] = useState(true);
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
        updateFormData({...formData, [e.target.name]: e.target.value});
    };

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

        try {
            // Send form data to Flask backend
            const response = await fetch('http://localhost:5000/predict', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            const result = await response.json();
            if (response.ok) {
                console.log('Prediction result:', result);
                // Navigate to a new page or display the result as needed
            } else {
                console.error('Error:', result.error);
            }
        } catch (error) {
            console.error('Error during submission:', error);
        }
    };


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
                      onChange={handleDataChange}>
                    <label className="Budget" style={{position: 'relative'}}>
                        <div className="custom-select">
                            <select className="Bar" id="budget" name="Budget" required>
                                <option value="" disabled selected>Chọn mức học phí phù hợp với bạn</option>
                                <option>Dưới 50.000.000 VND/năm</option>
                                <option>Trên 50.000.000 VND/năm</option>
                                <option>Trên 100.000.000 VND/năm</option>
                            </select>
                        </div>
                    </label>
                    <label className="Location" style={{position: 'relative'}}>
                        <div className="custom-select">
                            <select className="Bar" id="location" name="Location" required style={{overflowY:"scroll"}} >
                            <option value="" disabled selected>Chọn nơi bạn muốn học</option>
                                <option>Khu vực miền Bắc</option>
                                <option>Khu vực miền Trung</option>
                                <option>Khu vực miền Nam</option>
                            </select>
                        </div>
                    </label>
                    <label className="KeyFactor" style={{position: 'relative'}}>
                        <div className="custom-select">
                            <select className="Bar" id="keyfactor" name="KeyFactor" required
                                    onChange={handleSelectChange}>
                                <option value="" disabled selected>Chọn yếu tố ưu tiên khi chọn ngành</option>
                                <option>Khả năng học hỏi</option>
                                <option>Cơ hội phát triển</option>
                                <option>Thu nhập cao</option>
                                <option>Công việc ổn định</option>
                                <option>Thách thức và kích thích</option>
                                <option>Sáng tạo</option>
                                <option>Linh hoạt thời gian</option>
                                <option>Có thể đóng góp cho xã hội</option>
                                <option>Khác</option>
                            </select>
                        </div>
                    </label>
                </form>
                <div className="formDataDisplay">
                    <h3>Stored Data:</h3>
                    <p>Skill3: {formData.Budget}</p>
                    <p>Skill3: {formData.Location}</p>
                    <p>Skill3: {formData.KeyFactor}</p>
                </div>
            </div>
        </div>
    );
};
export default Page6;

// import './Decorator.css';
// import {useEffect, useState} from "react";
// import {useNavigate} from "react-router-dom";
//
// const Page6 = ({formData, updateFormData}) => {
//     const navigate = useNavigate();
//     const [fade, setFade] = useState(true);
//
//     // HANDLE BACKWARD PAGE TRANSITION
//     const handleBackButtonClick = () => {
//         setFade(true);
//         setTimeout(() => {
//             setFade(true);
//             navigate('/page5');
//         }, 150);
//     };
//
//     // HANDLE FORM SUBMISSION
//     const handleSubmit = async (e) => {
//         e.preventDefault();
//
//         try {
//             // Send form data to Flask backend
//             const response = await fetch('http://localhost:5000/predict', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify(formData)
//             });
//
//             const result = await response.json();
//             if (response.ok) {
//                 console.log('Prediction result:', result);
//                 // Navigate to a new page or display the result as needed
//             } else {
//                 console.error('Error:', result.error);
//             }
//         } catch (error) {
//             console.error('Error during submission:', error);
//         }
//     };
//
//     return (
//         <div className={`LastPage large-12 small-12 medium-12 columns ${fade ? 'fade-out' : ''}`} style={{
//             boxSizing: 'border-box',
//             marginLeft: 0,
//             marginTop: 0,
//             width: '100%',
//             height: '80vh',
//             position: 'relative',
//             overflowY: 'scroll'
//         }}>
//             <div className="Panigation large-12 medium-12 small-12 columns" style={{
//                 boxSizing: 'border-box',
//                 position: 'relative',
//                 width: '100%',
//                 height: 'fit-content',
//                 margin: 'auto',
//                 display: 'flex',
//                 justifyContent: 'space-between',
//                 alignSelf: 'center',
//                 alignItems: 'center'
//             }}>
//                 <a href="#" className="Previous large-6 medium-6 small-6 columns"
//                    style={{position: 'relative', height: 'inherit', width: 'fit-content'}}>
//                     <span className="LeftPani large-12 medium-12 small-12 columns"
//                           style={{position: 'relative', color: 'lightgoldenrodyellow', textAlign: 'left'}}
//                           onClick={handleBackButtonClick}>&#8249;</span>
//                 </a>
//                 <div className="SubmitButton large-6 medium-6 small-6 columns" style={{
//                     position: 'relative',
//                     height: 'inherit',
//                     width: 'fit-content',
//                     alignSelf: 'center',
//                     alignItems: 'center'
//                 }}>
//                     <button type="submit" className="button Submit large-12 medium-12 small-12 columns" style={{
//                         position: 'relative',
//                         background: 'lightgoldenrodyellow',
//                         textAlign: 'center',
//                         borderRadius: '50px',
//                         color: 'black',
//                         fontFamily: 'Montserrat, sans-serif',
//                         fontKerning: 'auto',
//                         fontStyle: 'italic',
//                         fontWeight: 'bold',
//                         display: 'flex',
//                         alignItems: 'center',
//                         justifyContent: 'center'
//                     }} onClick={handleSubmit}>Submit</button>
//                 </div>
//             </div>
//             <div className="Text large-12 medium-12 small-12 columns" style={{
//                 boxSizing: 'border-box',
//                 position: 'relative',
//                 width: '100%',
//                 height: 'fit-content',
//                 margin: 'auto'
//             }}>
//                 <div className="Title large-12 medium-12- small-12 columns" style={{
//                     position: 'relative',
//                     fontKerning: 'auto',
//                     fontFamily: 'Montserrat, sans-serif',
//                     color: '#E7E7C8',
//                     fontStyle: 'italic'
//                 }}>
//                     NHẬP THÔNG TIN
//                 </div>
//                 <div className="Sub large-12 medium-12- small-12 columns" style={{
//                     position: 'relative',
//                     fontKerning: 'auto',
//                     fontFamily: 'Montserrat, sans-serif',
//                     color: 'floralwhite', fontStyle: 'italic'
//                 }}>
//                     Nhập thông tin của bạn dưới đây để tiến hành phân tích
//                 </div>
//             </div>
//             <div className="LastContainer large-12 medium-12 small-12 columns"
//                  style={{boxSizing: 'border-box', position: 'relative', width: '100%', height: 'fit-content'}}>
//                 <form className="General1 large-12 medium-12 small-12 columns" style={{height: "fit-content"}}
//                       onChange={handleDataChange}>
//                     <label className="Budget" style={{position: 'relative'}}>
//                         <div className="custom-select">
//                             <select className="Bar" id="budget" name="Budget" required>
//                                 <option value="" disabled selected>Chọn mức học phí phù hợp với bạn</option>
//                                 <option>Dưới 50.000.000 VND/năm</option>
//                                 <option>Trên 50.000.000 VND/năm</option>
//                                 <option>Trên 100.000.000 VND/năm</option>
//                             </select>
//                         </div>
//                     </label>
//                     <label className="Location" style={{position: 'relative'}}>
//                         <div className="custom-select">
//                             <select className="Bar" id="location" name="Location" required>
//                                 <option value="" disabled selected>Chọn nơi bạn muốn học</option>
//                                 <option>Khu vực miền Bắc</option>
//                                 <option>Khu vực miền Trung</option>
//                                 <option>Khu vực miền Nam</option>
//                             </select>
//                         </div>
//                     </label>
//                     <label className="KeyFactor" style={{position: 'relative'}}>
//                         <div className="custom-select">
//                             <select className="Bar" id="keyfactor" name="KeyFactor" required
//                                     onChange={handleSelectChange} style={{overflowY: 'scroll'}}>
//                                 <option value="" disabled selected>Chọn yếu tố ưu tiên khi chọn ngành
//                                 </option>
//                                 <option>Khả năng học hỏi</option>
//                                 <option>Cơ hội phát triển</option>
//                                 <option>Thu nhập cao</option>
//                                 <option>Công việc ổn định</option>
//                                 <option>Thách thức và kích thích</option>
//                                 <option>Sáng tạo</option>
//                                 <option>Linh hoạt thời gian</option>
//                                 <option>Có thể đóng góp cho xã hội</option>
//                                 <option>Khác</option>
//                             </select>
//                         </div>
//                     </label>
//                 </form>
//                 <div className="formDataDisplay">
//                     <h3>Stored Data:</h3>
//                     <p>Budget: {formData.Budget}</p>
//                     <p>Location: {formData.Location}</p>
//                     <p>Keyfactor: {formData.KeyFactor}</p>
//                 </div>
//             </div>
//         </div>
//     );
// };
//
// export default Page6;
