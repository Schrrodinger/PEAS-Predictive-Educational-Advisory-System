import './Decorator.css'; // Ensure this path is correct
import yellowImage from '../Image/yellow.png'; // Update path as necessary
import { useNavigate } from 'react-router-dom';
import {useState} from "react";
const Page0 = () => {
    const navigate = useNavigate();
    const [fade, setFade] = useState(false);

    const handleButtonClick = () => {
        setFade(true);
        setTimeout(() => {
            navigate('/page1');
        }, 150); // Delay of 1000 milliseconds (1 second)
    };
    return (
        <div className="LandingPage ${fade ? 'fade-out' : ''}" id="landingpage" style={{ boxSizing: 'border-box', position: 'fixed', width: '100%', height: '100%', top: 0, left: 0 }}>
            <div className="MenuBar large-12 medium-12 small-12 columns" style={{ boxSizing: 'border-box', position: 'relative', top: '3vh', left: 0, height: '3.8vh', display: 'flex', justifyContent: 'space-between', alignItems: 'center', alignSelf: 'center' }}>
                <div className="Nav large-7 medium-7 small-6 columns" style={{ boxSizing: 'border-box', position: 'relative', left: 0, display: 'flex', justifyContent: 'space-evenly', height: 'inherit', alignItems: 'center' }}>
                    <a href="#Trang chu" className="Home large-6 medium-6 small-6 columns" style={{ fontKerning: 'auto', fontStyle: 'italic', fontFamily: 'Montserrat, sans-serif', textAlign: 'center',color: 'floralwhite' }}>Trang chủ</a>
                    <a href="#Ve chung toi" className="About large-6 medium-6 small-6 columns" style={{ fontKerning: 'auto', fontStyle: 'italic', fontFamily: 'Montserrat, sans-serif', color: 'floralwhite', textAlign: 'center' }}>Về chúng tôi</a>
                </div>
                <div className="Brand large-5 medium-5 small-6 columns" style={{ boxSizing: 'border-box', height: 'inherit', marginRight: '-15px', alignItems: 'center', alignSelf: 'center', display: 'flex', justifyContent: 'center' }}>
                    <span className="Brand_name large-12 medium-12 small-12 columns" style={{ fontFamily: 'Montserrat, sans-serif', color: 'lightgoldenrodyellow', textAlign: 'right', height: 'inherit', display: 'flex', alignSelf: 'center', justifyContent: 'right' }}>MAJOR PICKER</span>
                </div>
            </div>
            <div className="Seperator large-12 medium-12  small-12 columns" style={{ position: 'relative' }}>
                <hr style={{ minWidth: '100%' }} />
            </div>
            <div className="Underline large-12 medium-12 small-12 columns" style={{ boxSizing: 'border-box', position: 'relative', width: 'inherit', height: 'inherit' }}>
                <div className="Slogan large-12 medium-12 small-12 columns" style={{ fontFamily: 'Montserrat, sans-serif', textAlign: 'center', color: '#E7E7C8', fontStyle: 'italic' }}>Chọn ngành nghề, chọn tương lai</div>
                <div className="Hook large-12 medium-12 small-12 columns" style={{ fontFamily: 'Montserrat, sans-serif', textAlign: 'center', color: '#D0B49B', fontStyle: 'italic' }}>Tìm hiểu ngành nghề phù hợp với bạn tại đây</div>
                <div className="Button large-12 medium-12 small-12 columns" style={{ textAlign: 'center', display: 'flex', justifyContent: 'center', position: 'relative' }}>
                    <button type="button" className="button Start_button" id="startButton" style={{ background: 'lightgoldenrodyellow', borderRadius: '50px', position: 'relative', color: 'black', fontFamily: 'Montserrat, sans-serif', fontStyle: 'italic', fontKerning: 'auto' }} onClick={handleButtonClick}>Bắt đầu</button>
                </div>
                <div className="LandingImage large-12 small-12 medium-12 columns" style={{ position: 'relative', justifyContent: 'center', width: 'inherit' }}>
                    <img className="Trophy" src={yellowImage} style={{ verticalAlign: 'center' }} alt="Trophy" />
                </div>
            </div>
        </div>
    );
};

export default Page0;
