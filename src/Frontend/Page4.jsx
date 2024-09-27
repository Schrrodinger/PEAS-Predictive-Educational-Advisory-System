import {useEffect, useState} from 'react';
import './Decorator.css'; // Import your custom CSS file
import 'foundation-sites/dist/css/foundation.min.css';
import {useNavigate} from "react-router-dom";

const Page4 = ({formData,updateFormData}) => {
    const navigate = useNavigate();
    const [fade,setFade] = useState(true);
    const [filled,setFill] = useState(false);
    useEffect(() => {
        if(formData.Habit){
            setFill(true);
        }
    }, [formData]);
    // HANDLE FORWARD NAVIGATION
    const handleButtonClick = () => {
        setFade(true);
        if(filled === true){
            setTimeout(() => {
                setFade(true);
                navigate('/page5');
            }, 150);
        }
        else{
            alert('Vui lòng chọn 1 trong những lựa chọn bên dưới !');
            navigate('/page4');
        }

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

    const fieldMapping ={
        'Nghệ thuật và sáng tạo':'Nghệ thuật và sáng tạo',
        'Công nghệ và kĩ thuật':'Công nghệ và kỹ thuật số',
        'Hoạt đông xã hội và cộng đồng':'Hoạt động xã hội và cộng đồng',
        'Du lịch và khám phá văn hóa':'Du lịch và khám phá văn hóa',
        'Thể thao và hoạt động thể chất':'Thể thao và hoạt động thể chất',
        'Khoa học và nghiên cứu':'Khoa học và khám phá',
        'Nấu ăn và ẩm thực':'Nấu ăn và ẩm thực',
        'Khác':'Other'
    }

    const getChoiceLabel = (choice) => {
        const labels = {
            'Nghệ thuật và sáng tạo': 'Nghệ thuật và sáng tạo',
            'Thể thao và hoạt động thể chất': 'Thể thao và hoạt động thể chất',
            'Công nghệ và kĩ thuật': 'Công nghệ và kĩ thuật',
            'Khoa học và nghiên cứu': 'Khoa học và nghiên cứu',
            'Hoạt đông xã hội và cộng đồng': 'Hoạt đông xã hội và cộng đồng',
            'Nấu ăn và ẩm thực': 'Nấu ăn và ẩm thực',
            'Du lịch và khám phá văn hóa': 'Du lịch và khám phá văn hóa',
            'Khác': 'Khác'
        };
        return labels[choice];
    };

    const getChoiceDetails = (choice) => {
        const details = {
            'Nghệ thuật và sáng tạo': 'Âm nhạc; Hội họa; Viết ( văn, thơ, blog).',
            'Thể thao và hoạt động thể chất': 'Tham gia các cuộc thi thể thao.',
            'Công nghệ và kĩ thuật': 'Lập trình; Chơi game; Thiết kế đồ họa; Robotics.',
            'Khoa học và nghiên cứu': 'Thí nghiệm khoa học, thiên văn học...',
            'Hoạt đông xã hội và cộng đồng': 'Tham gia câu lạc bộ và các hoạt động tình nguyện',
            'Nấu ăn và ẩm thực': 'Nấu ăn; Khám phá ẩm thực.',
            'Du lịch và khám phá văn hóa': 'Du lịch và tìm hiểu văn hóa, lịch sử của các khu vực khác nhau.',
            'Khác': 'Khác.'
        };
        return details[choice];
    };

    //  HANDLE SAVE DATA
    const handleDataChange = (e) =>{
        // updateFormData({...formData, [e.target.name]: e.target.value});
        const {name,value} = e.target;
        const selection = value;
        let realValue = null;
        if(selection === ''){
            setFill(false);
        }
        else {
            if (selection === 'Nghệ thuật và sáng tạo') {
                realValue = 'Nghệ thuật và sáng tạo';
            } else if (selection === 'Công nghệ và kĩ thuật') {
                realValue = 'Công nghệ và kỹ thuật số';
            } else if (selection === 'Hoạt đông xã hội và cộng đồng') {
                realValue = 'Hoạt động xã hội và cộng đồng';
            } else if (selection === 'Du lịch và khám phá văn hóa') {
                realValue = 'Du lịch và khám phá văn hóa';
            } else if (selection === 'Thể thao và hoạt động thể chất') {
                realValue = 'Thể thao và hoạt động thể chất';
            } else if (selection === 'Khoa học và nghiên cứu') {
                realValue = 'Khoa học và khám phá';
            } else if (selection === 'Nấu ăn và ẩm thực') {
                realValue = 'Nấu ăn và ẩm thực';
            } else if (selection === 'Khác') {
                realValue = 'Other';
            }
            console.log('selection is:' + selection);
            console.log('realValue is: ' + realValue);
            setFill(true);
        }
        updateFormData({[name]:realValue});
        // console.log(name);
        // console.log(formData.Habit);
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
                <form onChange={handleDataChange} className="InterestForm large-12 medium-12 small-12 columns" style={{ width: 'inherit', height: 'inherit', position: 'relative' }}>
                    <fieldset className="InterestList large-12 medium-12 small-12 columns" style={{ border: '2px solid lightgoldenrodyellow', position: 'relative', height: "fit-content", width: '100%' }}>
                        <legend className="Require" style={{ color: 'lightgoldenrodyellow', fontKerning: 'auto', fontStyle: 'italic', fontWeight: 'bold', fontFamily: 'Montserrat, sans-serif' }}>Chọn 1 sở thích phù hợp với bạn</legend>
                        {['Nghệ thuật và sáng tạo', 'Thể thao và hoạt động thể chất', 'Công nghệ và kĩ thuật', 'Khoa học và nghiên cứu', 'Hoạt đông xã hội và cộng đồng', 'Nấu ăn và ẩm thực', 'Du lịch và khám phá văn hóa', 'Khác'].map(choice => (
                            <label key={choice} className={`Choice ${choice} large-12 medium-12 small-12 columns`} style={{ alignContent: 'center', alignSelf: 'center' }}>
                                <input name={"Habit"} className="Checkbox" type="radio" value={choice} checked={fieldMapping[choice] === formData.Habit}/>
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
