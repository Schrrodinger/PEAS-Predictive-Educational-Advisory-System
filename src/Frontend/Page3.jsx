import { useState } from 'react';
import './Decorator.css'; // Import your custom CSS file
import 'foundation-sites/dist/css/foundation.min.css';
import {useNavigate} from "react-router-dom";

const Page3 = () => {
    const navigate = useNavigate();
    const [fade,setFade] = useState(true);
    // HANDLE FORWARD NAVIGATION
    const handleButtonClick = () => {
        setFade(true);
        setTimeout(() => {
            setFade(true);
            navigate('/page4');
        }, 150);
    };

    // HANDLE BACKWARD PAGE TRANSITON
    const handleBackButtonClick = () => {
        setFade(true);
        setTimeout(() => {
            setFade(true);
            navigate('/page2');
        }, 150);
    };

    // HANDLE DROP DOWN
    const [openDropdowns, setOpenDropdowns] = useState({});

    const toggleDropdown = (choice) => {
        setOpenDropdowns(prevState => ({
            ...prevState,
            [choice]: !prevState[choice]
        }));
    };

    const getChoiceLabel = (choice) => {
        const labels = {
            'A': 'Khoa học tự nhiên',
            'B': 'Khoa học xã hội',
            'C': 'Công nghệ',
            'D': 'Kỹ thuật',
            'E': 'Y tế',
            'F': 'Kinh tế',
            'I': 'Luật ',
            'H': 'Giáo dục',
            'G': 'Nghệ thuật',
            'J': 'Truyền thông và báo chí',
            'K': 'Nông nghiệp và môi trường',
            'L': 'Du lịch và dịch vụ'
        };
        return labels[choice];
    };

    const getChoiceDetails = (choice) => {
        const details = {
            'A': 'Vật lí, Hóa học, Địa chất học,...',
            'B': 'Tâm lý học, Chính trị học,Nhân học,...',
            'C': 'Công nghệ thông tin, Công nghệ sinh học, Robotics,...',
            'D': 'Cơ khí, Điện-điện tử, Xây dựng,...',
            'E': 'Y học, Dược học, Điều dưỡng...',
            'F': 'Tài chính-ngân hàng, Kế toán, Kiểm toán...',
            'I': 'Luật, Hành chính công, Quan hệ quốc tế...',
            'H': 'Sư phạm, Quản lí giáo dục,...',
            'G': 'Âm nhạc, Thiết kế đồ họa, Thiết kế thời trang, Kiến trúc...',
            'J': 'Báo chí, Quan hệ công chúng, Quảng cáo...',
            'K': 'Nông nghiệp, Lâm nghiệp, Thủy hải sản,...',
            'L': 'Quản trị khách sạn, Du lịch...'
        };
        return details[choice];
    };

    return (
        <div className="InterestPage2 large-12 small-12 medium-12 columns ${fade ? 'fade-out' : ''}" style={{boxSizing: 'border-box', marginLeft: 0, marginTop: 0, width: '100%', position: 'relative', overflowY: 'scroll' }}>
            <div className="Panigation large-12 medium-12 small-12 columns" style={{ boxSizing: 'border-box', position: 'relative', width: '100%', height: 'fit-content', display: 'inline-block', margin: 'auto' }}>
                <a href="#" className="Previous large-6 medium-6 small-6 columns" style={{ position: 'relative', height: 'inherit', width: 'fit-content' }}>
                    <span className="LeftPani large-12 medium-12 small-12 columns" style={{ position: 'relative', color: 'lightgoldenrodyellow', textAlign: 'left' }} onClick={handleBackButtonClick}>‹</span>
                </a>
                <a href="#" className="Next large-6 medium-6 small-6 columns" style={{ position: 'relative', height: 'inherit', width: 'fit-content' }}>
                    <span className="RightPani large-12 medium-12 small-12 columns" style={{ position: 'relative', color: 'lightgoldenrodyellow', textAlign: 'right' }} onClick={handleButtonClick}>›</span>
                </a>
            </div>
            <div className="Text large-12 medium-12 small-12 columns" style={{ boxSizing: 'border-box', position: 'relative', width: '100%', height: 'fit-content', margin: 'auto' }}>
                <div className="Title large-12 medium-12 small-12 columns" style={{ position: 'relative', fontKerning: 'auto', fontFamily: 'Montserrat, sans-serif', color: '#E7E7C8', fontStyle: 'italic' }}>NHẬP THÔNG TIN</div>
                <div className="Sub large-12 medium-12 small-12 columns" style={{ position: 'relative', fontKerning: 'auto', fontFamily: 'Montserrat, sans-serif', color: 'floralwhite', fontStyle: 'italic' }}>Nhập thông tin của bạn dưới đây để tiến hành phân tích</div>
            </div>
            <div className="InterestContainer2 large-12 medium-12 small-12 columns" style={{ boxSizing: 'border-box', position: 'relative', width: '100%', height:'inherit' }}>
                <form className="InterestForm2 large-12 medium-12 small-12 columns" style={{ width: 'inherit', height: 'inherit', position: 'relative' }}>
                    <fieldset className="InterestList2 large-12 medium-12 small-12 columns" style={{ border: '2px solid lightgoldenrodyellow', position: 'relative', height: "fit-content", width: '100%' }}>
                        <legend className="Require" style={{ color: 'lightgoldenrodyellow', fontKerning: 'auto', fontStyle: 'italic', fontWeight: 'bold', fontFamily: 'Montserrat, sans-serif' }}>Chọn 3 lĩnh vực bạn quan tâm</legend>
                        {['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J','K','L'].map(choice => (
                            <label key={choice} className={`Choice ${choice} large-12 medium-12 small-12 columns`} style={{ alignContent: 'center', alignSelf: 'center' }}>
                                <input className="Checkbox" type="checkbox" />
                                {getChoiceLabel(choice)}
                                <button type="button" className="triangle" onClick={() => toggleDropdown(choice)}>▼</button>
                                <div className={`details ${openDropdowns[choice] ? 'visible' : ''}`}>
                                    <p>{getChoiceDetails(choice)}</p>
                                </div>
                            </label>
                        ))}
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default Page3;
