
import './Decorator.css';
import Subject from "./Subject.js";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {objectValues} from "react-foundation/lib/utils.js";
// import {NotificationContainer, NotificationManager} from 'react-notifications';


const Page2 = ({formData,updateFormData}) =>{
    const navigate = useNavigate();
    const [fade,setFade] = useState(true);
    const [filled , setFill] = useState(false);
    const [valid, setValid] = useState(true);
    useEffect(() =>{
        if (formData.Mark1 && formData.Mark2 && formData.Mark3) {
            setFill(true);
        }
    },[formData]);
    // HANDLE FORWARD PAGE TRANSITON
    const handleButtonClick = () => {
        setFade(true);
        if(filled && valid === true){
            setTimeout(() => {
                setFade(true);
                navigate('/page3');
            }, 150);
        }

        else{
            if(filled === false){
                alert('Vui lòng điền đầy đủ vào các mục bên dưới !');
            }
            else if(valid === false){
                alert('Vui lòng nhập điểm hợp lệ !');
            }
            navigate('/page2');
        }

    };
    // HANDLE BACKWARD PAGE TRANSITON
    const handleBackButtonClick = () => {
        setFade(true);
        setTimeout(() => {
            setFade(true);
            navigate('/page1');
        }, 150);
    };
    useEffect(() => {
        const selectedBlock = localStorage.getItem('selectedBlock');
        console.log(selectedBlock);
        if (selectedBlock && Subject[selectedBlock]) {
            const subjects = Subject[selectedBlock];
            document.getElementById('s1').placeholder = `Nhập điểm môn ${subjects[0]}`;
            document.getElementById('s2').placeholder = `Nhập điểm môn ${subjects[1]}`;
            document.getElementById('s3').placeholder = `Nhập điểm môn ${subjects[2]}`;
        }
    }, []); // Empty dependency array means this runs once on mount


    //  HANDLE STORE DATA
    const handleDataChange = (e) =>{
        const mark1 = document.getElementById('s1').value;
        const mark2 = document.getElementById('s2').value;
        const mark3 = document.getElementById('s3').value;
        if(mark1 === '' || mark2 === '' || mark3 === ''){
            setFill(false);
        }
        else{
            setFill(true);
        }
        updateFormData({...formData, [e.target.name]: e.target.value});
        console.log(e.target.name);
        console.log(e.target.value);
    };

    // HANDLE INVALID MARK
    const handleInvalidMark = (e) =>{
        if(parseInt(e.target.value) < 0 || parseInt(e.target.value )>10 || isNaN(e.target.value)){
            setValid(false);
            alert('Vui lòng nhập điểm hợp lệ !')
        }
        else{
            setValid(true);
        }
    };
    return (
        <div className="SelfGeneralPage large-12 small-12 medium-12 columns" style={{ boxSizing: 'border-box', marginLeft: 0, marginTop: 0, width: '100%', height: '80vh', position: 'relative', overflowY: 'scroll' }}>
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
            <div className="SelfMarkContainer large-12 medium-12 small-12 columns"
                 style={{boxSizing: 'border-box', position: 'relative', width: '100%', height: 'fit-content'}}>
                <form className="Mark large-12 medium-12 small-12 columns" style={{height: "fit-content"}}
                      onChange={handleDataChange} onBlur={handleInvalidMark}>
                    <div className="Mark1" style={{position: 'relative', width: "inherit"}}>
                        <input className="Bar MarkBar" type="text" id="s1" name="Mark1" value={formData.Mark1} autoFocus={true}
                               placeholder="Nhập điểm môn 1" required style={{boxSizing: "border-box"}}/>
                    </div>
                    <div className="Mark2" style={{position: 'relative', width: "inherit"}}>
                        <input className="Bar MarkBar" type="text" id="s2" name="Mark2" value={formData.Mark2} autoFocus={true}
                               placeholder="Nhập điểm môn 2" required style={{boxSizing: "border-box"}}/>
                    </div>
                    <div className="Mark3" style={{position: 'relative', width: "inherit"}}>
                        <input className="Bar MarkBar" type="text" id="s3" name="Mark3" value={formData.Mark3} autoFocus={true}
                               placeholder="Nhập điểm môn 3" required style={{boxSizing: "border-box"}}/>
                    </div>
                </form>
            </div>
        </div>
    );
};
export default Page2;
