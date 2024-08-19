import { useState } from 'react';
import './Decorator.css'; // Import your custom CSS file
import 'foundation-sites/dist/css/foundation.min.css';
import {useNavigate} from "react-router-dom";

const Page4 = () => {
    const navigate = useNavigate();
    const [fade,setFade] = useState(true);
    // HANDLE FORWARD NAVIGATION
    const handleButtonClick = () => {
        setFade(true);
        setTimeout(() => {
            setFade(true);
            navigate('/page5');
        }, 150);
    };

    // HANDLE BACKWARD PAGE TRANSITON
    const handleBackButtonClick = () => {
        setFade(true);
        setTimeout(() => {
            setFade(true);
            navigate('/page3');
        }, 150);
    };

    // HANDLE DROPDOWN
    const [openDropdowns, setOpenDropdowns] = useState({});

    const toggleDropdown = (choice) => {
        setOpenDropdowns(prevState => ({
            ...prevState,
            [choice]: !prevState[choice]
        }));
    };

    const getChoiceLabel = (choice) => {
        const labels = {
            'A': 'Nghệ thuật và sáng tạo',
            'B': 'Thể thao và hoạt động thể chất',
            'C': 'Công nghệ và Kỹ thuật',
            'D': 'Khoa học và Nghiên cứu',
            'E': 'Đọc sách và Học tập',
            'F': 'Hoạt đông xã hội và cộng đồng',
            'I': 'Nấu ăn và Ẩm thực',
            'H': 'Du lịch và Khám phá văn hóa',
            'G': 'Làm thủ công và DIY',
            'J': 'Chăm sóc động vật'
        };
        return labels[choice];
    };

    const getChoiceDetails = (choice) => {
        const details = {
            'A': 'Âm nhạc; Hội họa; Viết ( văn, thơ, blog).',
            'B': 'Tham gia các cuộc thi thể thao.',
            'C': 'Lập trình; Chơi game; Thiết kế đồ họa; Robotics.',
            'D': 'Thí nghiệm khoa học, thiên văn học...',
            'E': 'Đọc sách; Học ngoại ngữ; Giải đố.',
            'F': 'Tham gia câu lạc bộ và các hoạt động tình nguyện',
            'I': 'Nấu ăn; Khám phá ẩm thực.',
            'H': 'Du lịch và tìm hiểu văn hóa, lịch sử của các khu vực khác nhau.',
            'G': 'Làm đồ thủ công; Chế tạo đồ dùng; Thiết kế thời trang.',
            'J': 'Nuôi thú cưng; Bảo tồn động vật hoang dã.'
        };
        return details[choice];
    };

    return (
        <div className="InterestPage large-12 small-12 medium-12 columns ${fade ? 'fade-out' : ''}" style={{boxSizing: 'border-box', marginLeft: 0, marginTop: 0, width: '100%', position: 'relative', overflowY: 'scroll' }}>
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
            <div className="InterestContainer large-12 medium-12 small-12 columns" style={{ boxSizing: 'border-box', position: 'relative', width: '100%', height:'inherit' }}>
                <form className="InterestForm large-12 medium-12 small-12 columns" style={{ width: 'inherit', height: 'inherit', position: 'relative' }}>
                    <fieldset className="InterestList large-12 medium-12 small-12 columns" style={{ border: '2px solid lightgoldenrodyellow', position: 'relative', height: "fit-content", width: '100%' }}>
                        <legend className="Require" style={{ color: 'lightgoldenrodyellow', fontKerning: 'auto', fontStyle: 'italic', fontWeight: 'bold', fontFamily: 'Montserrat, sans-serif' }}>Chọn 3 sở thích phù hợp với bạn</legend>
                        {['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'].map(choice => (
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

export default Page4;
