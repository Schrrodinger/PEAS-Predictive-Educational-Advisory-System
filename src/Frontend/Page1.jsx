
import './Decorator.css';
// import Subject from "./Subject.js";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {objectValues} from "react-foundation/lib/utils.js";
const Page1 = ({formData,updateFormData}) =>{
    const navigate = useNavigate();
    const [fade,setFade] = useState(true);
    const [filled,setFill] = useState(false);
    const [valid, setValid] = useState(true);
    // HANDLE FORWARD PAGE TRANSITON
    const handleButtonClick = () => {
        setFade(true);
        if(filled === true){
            setTimeout(() => {
                setFade(true);
                navigate('/page2');
            }, 150);
        }
        else{
            if(valid === false){
                alert('Vui lòng nhập tuổi hợp lệ ! ');
            }
            else if(filled === false){
                alert('Vui lòng điền vào tất cả thông tin bên dưới');
            }
            navigate('/page1');
        }
    };
    // HANDLE BACKWARD PAGE TRANSITON
    const handleBackButtonClick = () => {
        setFade(true);
        setTimeout(() => {
            setFade(true);
            navigate('/');
        }, 150);
    };

    // HANDLE CHANGING VALUE
    const handleDataChange = (e) =>{
        const ageValue = parseInt(e.target.value);  // Parse the input value as an integer
        const gender = document.getElementById('gender').value ;
        const block = document.getElementById('block').value;
        if(ageValue === '' || gender === '' || block === ''){
            setFill(false)
        }
        else{
            setFill(true);
        }
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

    //  HANDLE INVALID AGE
    const handleAgeValidation = (e) => {
        const ageValue = parseInt(e.target.value);  // Parse the input value as an integer
        const gender = document.getElementById('gender').value ;
        const block = document.getElementById('block').value;
        if ( ageValue < 18 || ageValue > 40) {
            setValid(false);
            alert('Tuổi hợp lệ : 18 - 40 !');
        } else {
            setValid(true);  // Valid age, reset the valid state
        }
    };


    return (
        <div className="SelfGeneralPage large-12 small-12 medium-12 columns ${fade ? 'fade-out' : ''}" style={{ boxSizing: 'border-box', marginLeft: 0, marginTop: 0, width: '100%', height: '80vh', position: 'relative', overflowY: 'scroll' }}>
            <div className="Panigation large-12 medium-12 small-12 columns" style={{  boxSizing: 'border-box', position: 'relative', width: '100%', height: 'fit-content', display: 'inline-block', margin: 'auto' }}>
                <a href="#" className="Previous large-6 medium-6 small-6 columns" style={{ position: 'relative', height: 'inherit', width: 'fit-content' }}>
                    <span className="LeftPani large-12 medium-12 small-12 columns" style={{ position: 'relative', color: 'lightgoldenrodyellow', textAlign: 'left' }} onClick={handleBackButtonClick}>&#8249;</span>
                </a>
                <a href="#" className="Next large-6 medium-6 small-6 columns" style={{ position: 'relative', height: 'inherit', width: 'fit-content' }}>
                    <span className="RightPani large-12 medium-12 small-12 columns" style={{ position: 'relative', color: 'lightgoldenrodyellow', textAlign: 'right' }} onClick={handleButtonClick}>&#8250;</span>
                </a>
            </div>
            <div className="Text large-12 medium-12 small-12 columns" style={{ boxSizing: 'border-box', position: 'relative', width: '100%', height: 'fit-content', margin: 'auto' }}>
                <div className="Title large-12 medium-12- small-12 columns" style={{ position: 'relative', fontKerning: 'auto', fontFamily: 'Montserrat, sans-serif', color: '#E7E7C8', fontStyle: 'italic' }}>
                    NHẬP THÔNG TIN
                </div>
                <div className="Sub large-12 medium-12- small-12 columns" style={{ position: 'relative', fontKerning: 'auto', fontFamily: 'Montserrat, sans-serif', color: 'floralwhite', fontStyle: 'italic' }}>
                    Nhập thông tin của bạn dưới đây để tiến hành phân tích
                </div>
            </div>
            <div className="SelfGeneralContainer large-12 medium-12 small-12 columns"
                 style={{boxSizing: 'border-box', position: 'relative', width: '100%', height: 'fit-content'}}>
                <form className="General large-12 medium-12 small-12 columns" style={{height: "fit-content"}}
                      onChange={handleDataChange} onBlur={handleAgeValidation}>
                    <div className="Age" style={{position: 'relative', width: "inherit"}}>
                        <input className="Bar AgeBar" type="text" id="age" name="Age" autoFocus={true}
                               placeholder="Nhập tuổi của bạn tại đây" required style={{boxSizing: "border-box"}}/>
                    </div>
                    <label className="Gender" style={{position: 'relative'}}>
                        <div className="custom-select">
                            <select className="Bar" id="gender" name="Gender" required>
                                <option value="" disabled selected>Chọn giới tính</option>
                                <option value="Nam">Nam</option>
                                <option value="Nữ">Nữ</option>
                            </select>
                        </div>
                    </label>
                    <label className="Major" style={{position: 'relative'}}>
                        <div className="custom-select">
                            <select className="Bar" id="block" name="Departments" required
                                    onChange={handleSelectChange}>
                                <option value="" disabled selected>Khối bạn muốn thi</option>
                                <option value="A">A</option>
                                <option value="B">B</option>
                                <option value="C">C</option>
                                <option value="D">D</option>
                                <option value="H">H</option>
                                <option value="V">V</option>
                                <option value="Other">Khác</option>
                            </select>
                        </div>
                    </label>
                </form>
                {/*<div className="formDataDisplay">*/}
                {/*    <h3>Stored Data:</h3>*/}
                {/*    <p>Skill3: {formData.Age}</p>*/}
                {/*    <p>Skill3: {formData.Gender}</p>*/}
                {/*    <p>Skill3: {formData.Block}</p>*/}
                {/*</div>*/}
            </div>
        </div>
    );
};
export default Page1;
