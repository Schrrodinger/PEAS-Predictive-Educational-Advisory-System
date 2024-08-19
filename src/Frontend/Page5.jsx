import './Decorator.css'; // Import your custom CSS for styling
import 'foundation-sites/dist/css/foundation.min.css';
import {useNavigate} from "react-router-dom";
import {useState} from "react";
function Page5() {
    const navigate = useNavigate();
    const [fade,setFade] = useState(true);
    // HANDLE FORWARD NAVIGATION
    // const handleButtonClick = () => {
    //     setFade(true);
    //     setTimeout(() => {
    //         setFade(true);
    //         navigate('/page5');
    //     }, 150);
    // };

    // HANDLE BACKWARD PAGE TRANSITON
    const handleBackButtonClick = () => {
        setFade(true);
        setTimeout(() => {
            setFade(true);
            navigate('/page4');
        }, 150);
    };
    return (
        <div className="RatingPage" style={{ boxSizing: 'border-box', position: 'absolute', width: '100%', height: '95vh', overflowY: 'scroll'}}>
            <div className="Panigation large-12 medium-12 small-12 columns" style={{ boxSizing: 'border-box', position: 'relative', width: '100%', height: 'fit-content', margin: 'auto', display: 'flex', justifyContent: 'space-between', alignSelf: 'center', alignItems: 'center' }}>
                <a href="#" className="Previous large-6 medium-6 small-6 columns" style={{ position: 'relative', height: 'inherit', width: 'fit-content'  }}>
                    <span className="LeftPani large-12 medium-12 small-12 columns" style={{ position: 'relative', color: 'lightgoldenrodyellow', textAlign: 'left' }} onClick={handleBackButtonClick}>&#8249;</span>
                </a>
                <div className="SubmitButton large-6 medium-6 small-6 columns" style={{ position: 'relative', height: 'inherit', width: 'fit-content', alignSelf: 'center', alignItems: 'center' }}>
                    <button type="submit" className="button Submit large-12 medium-12 small-12 columns" style={{ position: 'relative', background: 'lightgoldenrodyellow', textAlign: 'center', borderRadius: '50px', color: 'black', fontFamily: 'Montserrat, sans-serif', fontKerning: 'auto', fontStyle: 'italic', fontWeight: 'bold', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Submit</button>
                </div>
            </div>

            <div className="Text large-12 medium-12 small-12 columns" style={{ boxSizing: 'border-box', position: 'relative', width: '100%', height: 'fit-content', margin: 'auto' }}>
                <div className="Title large-12 medium-12- small-12 columns" style={{ position: 'relative', fontKerning: 'auto', fontFamily: 'Montserrat, sans-serif', color: '#E7E7C8', fontStyle: 'italic' }}>NHẬP THÔNG TIN</div>
                <div className="Sub large-12 medium-12- small-12 columns" style={{ position: 'relative', fontKerning: 'auto', fontFamily: 'Montserrat, sans-serif', color: 'floralwhite', fontStyle: 'italic' }}>Nhập thông tin của bạn dưới đây để tiến hành phân tích</div>
            </div>

            <div className="GradingContainer large-12 medium-12 small-12 columns" style={{ boxSizing: 'border-box', position: 'relative', width: '100%', height: '100%' }}>
                <div className="Textbox1 large-12 medium-12 small-12 columns" style={{ boxSizing: 'border-box', width: 'max(107%)', height: 'fit-content', position: 'relative' }}>
                    <div className="Require1 large-12 medium-12 small-12 columns" style={{ position: 'relative', fontKerning: 'auto', fontFamily: 'Montserrat, sans-serif', color: '#E7E7C8', fontStyle: 'italic' }}>* Tự đánh giá kĩ năng mềm của bạn theo các mục dưới đây</div>
                    <div className="Rule large-12 medium-12 small-12 columns" style={{ position: 'relative', fontKerning: 'auto', fontFamily: 'Montserrat, sans-serif', color: '#E7E7C8', fontStyle: 'italic' }}>( 1-2: Kĩ năng cần cải thiện ; 3: Kĩ năng trung bình ; 4-5: Tự tin )</div>
                </div>

                <form className="GradingSlideContainer large-12 medium-12 small-12 columns" style={{ position: 'relative', height: 'max-content', boxSizing: 'border-box' }}>
                    {/* Skill 1 */}
                    <div className="Skill1 large-12 medium-12 small-12 columns" id="Skill_1" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', boxSizing: 'border-box', width: 'inherit', height: 'max-content' }}>
                        <div className="Skillname large-12 medium-12 small-12 columns" style={{ textAlign: 'left', width: 'inherit' }}>
                            Kĩ năng giao tiếp ( Giao tiếp bằng lời, hành động, lắng nghe tích cực)
                        </div>
                        <div className="slider-container large-12 medium-12 small-12 columns" style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', flexDirection: 'column', width: 'inherit' }}>
                            <input className="Slider" type="range" min="1" max="5" defaultValue="1" />
                            <div className="range-values" style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <span>1</span>
                                <span>2</span>
                                <span>3</span>
                                <span>4</span>
                                <span>5</span>
                            </div>
                        </div>
                    </div>

                    {/* Skill 2 */}
                    <div className="Skill2 large-12 medium-12 small-12 columns" id="Skill_2" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', boxSizing: 'border-box', width: 'inherit', height: 'max-content' }}>
                        <div className="Skillname large-12 medium-12 small-12 columns" style={{ textAlign: 'left', width: 'inherit' }}>
                            Kĩ năng quản lí ( Quản lí thời gian, lập kế hoạch, tổ chức công việc )
                        </div>
                        <div className="slider-container large-12 medium-12 small-12 columns" style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', flexDirection: 'column', width: 'inherit' }}>
                            <input className="Slider" type="range" min="1" max="5" defaultValue="1" />
                            <div className="range-values" style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <span>1</span>
                                <span>2</span>
                                <span>3</span>
                                <span>4</span>
                                <span>5</span>
                            </div>
                        </div>
                    </div>

                    {/* Skill 3 */}
                    <div className="Skill3 large-12 medium-12 small-12 columns" id="Skill_3" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', boxSizing: 'border-box', width: 'inherit', height: 'max-content' }}>
                        <div className="Skillname large-12 medium-12 small-12 columns" style={{ textAlign: 'left', width: 'inherit' }}>
                            Kĩ năng quản lí ( Quản lí thời gian, lập kế hoạch, tổ chức công việc )
                        </div>
                        <div className="slider-container large-12 medium-12 small-12 columns" style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', flexDirection: 'column', width: 'inherit' }}>
                            <input className="Slider" type="range" min="1" max="5" defaultValue="1" />
                            <div className="range-values" style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <span>1</span>
                                <span>2</span>
                                <span>3</span>
                                <span>4</span>
                                <span>5</span>
                            </div>
                        </div>
                    </div>

                    {/* Skill 4 */}
                    <div className="Skill4 large-12 medium-12 small-12 columns" id="Skill_4" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', boxSizing: 'border-box', width: 'inherit', height: 'max-content' }}>
                        <div className="Skillname large-12 medium-12 small-12 columns" style={{ textAlign: 'left', width: 'inherit' }}>
                            Kĩ năng tư duy ( Tư duy phản biện, sáng tạo , giải quyết vấn đề )
                        </div>
                        <div className="slider-container large-12 medium-12 small-12 columns" style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', flexDirection: 'column', width: 'inherit' }}>
                            <input className="Slider" type="range" min="1" max="5" defaultValue="1" />
                            <div className="range-values" style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <span>1</span>
                                <span>2</span>
                                <span>3</span>
                                <span>4</span>
                                <span>5</span>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}
export default Page5;






