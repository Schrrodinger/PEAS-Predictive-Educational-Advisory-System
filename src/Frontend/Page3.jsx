import { useState } from 'react';
import './Decorator.css'; // Import your custom CSS file
import 'foundation-sites/dist/css/foundation.min.css';
import {useNavigate} from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Page3 = ({formData,updateFormData}) => {
    const navigate = useNavigate();
    const [fade,setFade] = useState(true);
    const [filled,setFill]= useState(false);
    // HANDLE FORWARD NAVIGATION
    const handleButtonClick = () => {
        setFade(true);
        if(filled === true){
            setTimeout(() => {
                setFade(true);
                navigate('/page4');
            }, 150);
        }
        else{
            alert('Vui lòng chọn 1 trong những lựa chọn bên dưới !')
            navigate('/page3');
        }
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

    //  HANDLE SAVE DATA
    const handleDataChange = (e) =>{
        // updateFormData({...formData, [e.target.name]: e.target.value});
        const {name,value} = e.target;
        const selection = value;
        let realValue = null;
        if(selection === ''){
            setFill(false);
        }
        else{
            if(selection === 'Khoa học tự nhiên') {
                realValue = 'Khoa học Tự nhiên';
            } else if (selection === 'Khoa học xã hội') {
                realValue = 'Khoa học Xã hội';
            } else if (selection === 'Công nghệ') {
                realValue = 'Công nghệ';
            } else if (selection === 'Kỹ thuật') {
                realValue = 'Kỹ thuật';
            } else if (selection === 'Kinh tế') {
                realValue = 'Kinh tế và Kinh doanh';
            } else if (selection === 'Y tế') {
                realValue = 'Y tế và Sức khỏe ';
            } else if (selection === 'Giáo dục') {
                realValue = 'Giáo dục';
            } else if (selection === 'Nghệ thuật') {
                realValue = 'Nghệ thuật và Thiết kế';
            } else if (selection === 'Nông nghiệp và môi trường') {
                realValue = 'Nông nghiệp và Môi trường';
            } else if (selection === 'Truyền thông và báo chí') {
                realValue = 'Truyền thông và Media';
            } else if (selection === 'Luật') {
                realValue = 'Luật và Chính sách công';
            } else if (selection === 'Du lịch và dịch vụ') {
                realValue = 'Du lịch và Dịch vụ';
            }
            setFill(true);
        }
        updateFormData({[name]:realValue});
        console.log(name);
        console.log(realValue);
    };


    const getChoiceLabel = (choice) => {
        const labels = {
            'Khoa học tự nhiên': 'Khoa học tự nhiên',
            'Khoa học xã hội': 'Khoa học xã hội',
            'Công nghệ': 'Công nghệ',
            'Kỹ thuật': 'Kỹ thuật',
            'Y tế': 'Y tế',
            'Kinh tế': 'Kinh tế',
            'Luật': 'Luật ',
            'Giáo dục': 'Giáo dục',
            'Nghệ thuật': 'Nghệ thuật',
            'Truyền thông và báo chí': 'Truyền thông và báo chí',
            'Nông nghiệp và môi trường': 'Nông nghiệp và môi trường',
            'Du lịch và dịch vụ': 'Du lịch và dịch vụ'
        };
        return labels[choice];
    };

    const getChoiceDetails = (choice) => {
        const details = {
            'Khoa học tự nhiên': 'Vật lí, Hóa học, Địa chất học,...',
            'Khoa học xã hội': 'Tâm lý học, Chính trị học,Nhân học,...',
            'Công nghệ': 'Công nghệ thông tin, Công nghệ sinh học, Robotics,...',
            'Kỹ thuật': 'Cơ khí, Điện-điện tử, Xây dựng,...',
            'Y tế': 'Y học, Dược học, Điều dưỡng...',
            'Kinh tế': 'Tài chính-ngân hàng, Kế toán, Kiểm toán...',
            'Luật': 'Luật, Hành chính công, Quan hệ quốc tế...',
            'Giáo dục': 'Sư phạm, Quản lí giáo dục,...',
            'Nghệ thuật': 'Âm nhạc, Thiết kế đồ họa, Thiết kế thời trang, Kiến trúc...',
            'Truyền thông và báo chí': 'Báo chí, Quan hệ công chúng, Quảng cáo...',
            'Nông nghiệp và môi trường': 'Nông nghiệp, Lâm nghiệp, Thủy hải sản,...',
            'Du lịch và dịch vụ': 'Quản trị khách sạn, Du lịch...'
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
                <form onChange={handleDataChange} className="InterestForm2 large-12 medium-12 small-12 columns" style={{ width: 'inherit', height: 'inherit', position: 'relative' }}>
                    <fieldset className="InterestList2 large-12 medium-12 small-12 columns" style={{ border: '2px solid lightgoldenrodyellow', position: 'relative', height: "fit-content", width: '100%' }}>
                        <legend className="Require" style={{ color: 'lightgoldenrodyellow', fontKerning: 'auto', fontStyle: 'italic', fontWeight: 'bold', fontFamily: 'Montserrat, sans-serif' }}>Chọn 1 lĩnh vực bạn quan tâm</legend>
                        {['Khoa học tự nhiên', 'Khoa học xã hội', 'Công nghệ', 'Kỹ thuật', 'Y tế', 'Kinh tế', 'Luật', 'Giáo dục', 'Nghệ thuật', 'Truyền thông và báo chí','Nông nghiệp và môi trường','Du lịch và dịch vụ'].map(choice => (
                            <label key={choice} className={`Choice ${choice} large-12 medium-12 small-12 columns`} style={{ alignContent: 'center', alignSelf: 'center' }}>
                                <input name={'Field of Interest'} className="Checkbox" type="radio" value={choice} />
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
