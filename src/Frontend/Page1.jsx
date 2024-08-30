
import './Decorator.css';
// import Subject from "./Subject.js";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
const Page1 = ({formData,updateFormData}) =>{
    const navigate = useNavigate();
    const [fade,setFade] = useState(true);
    // HANDLE FORWARD PAGE TRANSITON
    const handleButtonClick = () => {
        setFade(true);
        setTimeout(() => {
            setFade(true);
            navigate('/page2');
        }, 150);
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
                      onChange={handleDataChange}>
                    <div className="Age" style={{position: 'relative', width: "inherit"}}>
                        <input className="Bar AgeBar" type="text" id="age" name="Age" autoFocus={true}
                               placeholder="Nhập tuổi của bạn tại đây" required style={{boxSizing: "border-box"}}/>
                    </div>
                    <label className="Gender" style={{position: 'relative'}}>
                        <div className="custom-select">
                            <select className="Bar" id="gender" name="Gender" required>
                                <option value="" disabled selected>Chọn giới tính</option>
                                <option value="male">Nam</option>
                                <option value="female">Nữ</option>
                                <option value="other">Khác</option>
                            </select>
                        </div>
                    </label>
                    <label className="Major" style={{position: 'relative'}}>
                        <div className="custom-select">
                            <select className="Bar" id="block" name="Block" required
                                    onChange={handleSelectChange}>
                                <option value="" disabled selected>Khối bạn muốn thi</option>
                                <option value="a00">A00</option>
                                <option value="a01">A01</option>
                                <option value="b00">B00</option>
                                <option value="c00">C00</option>
                                <option value="d01">D01</option>
                                <option value="h01">H01</option>
                                <option value="k">Khác</option>
                            </select>
                        </div>
                    </label>
                </form>
                {/*<div className="formDataDisplay">*/}
                {/*    <h3>Stored Data:</h3>*/}
                {/*    <p>Skill3: {formData.Age}</p>*/}
                {/*    <p>Skill3: {formData.Gender}</p>*/}
                {/*    <p>Skill3: {formData.Blocks}</p>*/}
                {/*</div>*/}
            </div>
        </div>
    );
};
export default Page1;
