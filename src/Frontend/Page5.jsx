import './Decorator.css'; // Import your custom CSS for styling
import 'foundation-sites/dist/css/foundation.min.css';
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {objectValues} from "react-foundation/lib/utils.js";
function Page5({formData,updateFormData}) {
    const navigate = useNavigate();
    const [fade,setFade] = useState(true);
    // HANDLE FORWARD NAVIGATION
    const handleButtonClick = () => {
        setFade(true);
        setTimeout(() => {
            setFade(true);
            navigate('/page6');
        }, 150);
    };

    // HANDLE BACKWARD PAGE TRANSITON
    const handleBackButtonClick = () => {
        setFade(true);
        setTimeout(() => {
            setFade(true);
            navigate('/page4');
        }, 150);
    };

    // HANDLE SAVE DATA
    useEffect(() => {
        updateFormData({
            Skill1: 'Bad',
            Skill2: 'Bad',
            Skill3: 'Bad',
            Skill4: 'Bad',
            Skill5: 'Bad',
            Skill6: 'Bad',
            Skill7: 'Bad',
            Skill8: 'Bad',
            Skill9: 'Bad',
            Skill10: 'Bad',
            Skill11: 'Bad'
        });
    }, []);
    const handleDataChange = (e) => {
        const {name,value} = e.target;
        const selection = parseInt(value);
        let skillDescription = '';
        if (selection === 1 || selection === 2) {
            skillDescription = 'Bad';
        } else if (selection === 3) {
            skillDescription = 'Moderate';
        } else if(selection === 4 || selection === 5) {
            skillDescription = 'Good';
        }
        updateFormData({[name]:skillDescription});
    };


    return (
        <div className="RatingPage" style={{ boxSizing: 'border-box', position: 'absolute', width: '100%', height: '95vh', overflowY: 'scroll'}}>
            <div className="Panigation large-12 medium-12 small-12 columns" style={{
                boxSizing: 'border-box',
                position: 'relative',
                width: '100%',
                height: 'fit-content',
                margin: 'auto',
                display: 'flex',
                justifyContent: 'space-between',
                alignSelf: 'center',
                alignItems: 'center'
            }}>
                <a href="#" className="Previous large-6 medium-6 small-6 columns"
                   style={{position: 'relative', height: 'inherit', width: 'fit-content'}}>
                    <span className="LeftPani large-12 medium-12 small-12 columns"
                          style={{position: 'relative', color: 'lightgoldenrodyellow', textAlign: 'left'}}
                          onClick={handleBackButtonClick}>&#8249;</span>
                </a>
                <a href="#" className="Next large-6 medium-6 small-6 columns"
                   style={{position: 'relative', height: 'inherit', width: 'fit-content'}}>
                    <span className="RightPani large-12 medium-12 small-12 columns"
                          style={{position: 'relative', color: 'lightgoldenrodyellow', textAlign: 'right'}}
                          onClick={handleButtonClick}>›</span>
                </a>
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
                    color: '#E7E7C8', fontStyle: 'italic' }}>NHẬP THÔNG TIN</div>
                <div className="Sub large-12 medium-12- small-12 columns" style={{ position: 'relative', fontKerning: 'auto', fontFamily: 'Montserrat, sans-serif', color: 'floralwhite', fontStyle: 'italic' }}>Nhập thông tin của bạn dưới đây để tiến hành phân tích</div>
            </div>

            <div className="GradingContainer large-12 medium-12 small-12 columns"
                 style={{boxSizing: 'border-box', position: 'relative', width: '100%', height: '120%'}}>
                <div className="Textbox1 large-12 medium-12 small-12 columns"
                     style={{boxSizing: 'border-box', width: 'max(100%)', height: 'fit-content', position: 'relative'}}>
                    <div className="Require1 large-12 medium-12 small-12 columns" style={{
                        position: 'relative',
                        fontKerning: 'auto',
                        fontFamily: 'Montserrat, sans-serif',
                        color: '#E7E7C8',
                        fontStyle: 'italic'
                    }}>* Tự đánh giá kĩ năng mềm của bạn theo các mục dưới đây
                    </div>
                    <div className="Rule large-12 medium-12 small-12 columns" style={{
                        position: 'relative',
                        fontKerning: 'auto',
                        fontFamily: 'Montserrat, sans-serif',
                        color: '#E7E7C8',
                        fontStyle: 'italic'
                    }}>( 1-2: Kĩ năng cần cải thiện ; 3: Kĩ năng trung bình ; 4-5: Tự tin )
                    </div>
                </div>

                <form className="GradingSlideContainer large-12 medium-12 small-12 columns "
                      style={{position: 'relative', height: 'max-content', boxSizing: 'border-box'}}
                      onChange={handleDataChange}>
                    {/* Skill 1 */}
                    <div className="Skill1 large-12 medium-12 small-12 columns" id="Skill_1" style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        boxSizing: 'border-box',
                        width: 'inherit',
                        height: 'max-content'
                    }}>
                        <div className="Skillname large-12 medium-12 small-12 columns"
                             style={{textAlign: 'left', width: 'inherit'}}>
                            Kĩ năng tin học
                        </div>
                        <div className="slider-container large-12 medium-12 small-12 columns" style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'flex-start',
                            flexDirection: 'column',
                            width: 'inherit'
                        }}>
                            <input name={"Skill1"} className="Slider" type="range" min="1" max="5" defaultValue="1"/>
                            <div className="range-values" style={{display: 'flex', justifyContent: 'space-between'}}>
                                <span>1</span>
                                <span>2</span>
                                <span>3</span>
                                <span>4</span>
                                <span>5</span>
                            </div>
                        </div>
                    </div>

                    {/* Skill 2 */}
                    <div className="Skill2 large-12 medium-12 small-12 columns" id="Skill_2" style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        boxSizing: 'border-box',
                        width: 'inherit',
                        height: 'max-content'
                    }}>
                        <div className="Skillname large-12 medium-12 small-12 columns"
                             style={{textAlign: 'left', width: 'inherit'}}>
                            Kĩ năng ngôn ngữ
                        </div>
                        <div className="slider-container large-12 medium-12 small-12 columns" style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'flex-start',
                            flexDirection: 'column',
                            width: 'inherit'
                        }}>
                            <input name={"Skill2"} className="Slider" type="range" min='1' max='5' defaultValue='1'/>
                            <div className="range-values" style={{display: 'flex', justifyContent: 'space-between'}}>
                                <span>1</span>
                                <span>2</span>
                                <span>3</span>
                                <span>4</span>
                                <span>5</span>
                            </div>
                        </div>
                    </div>

                    {/* Skill 3 */}
                    <div className="Skill3 large-12 medium-12 small-12 columns" id="Skill_3" style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        boxSizing: 'border-box',
                        width: 'inherit',
                        height: 'max-content'
                    }}>
                        <div className="Skillname large-12 medium-12 small-12 columns"
                             style={{textAlign: 'left', width: 'inherit'}}>
                            Kĩ năng giao tiếp
                        </div>
                        <div className="slider-container large-12 medium-12 small-12 columns" style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'flex-start',
                            flexDirection: 'column',
                            width: 'inherit'
                        }}>
                            <input name={"Skill3"} className="Slider" type="range" min="1" max="5" defaultValue="1"/>
                            <div className="range-values" style={{display: 'flex', justifyContent: 'space-between'}}>
                                <span>1</span>
                                <span>2</span>
                                <span>3</span>
                                <span>4</span>
                                <span>5</span>
                            </div>
                        </div>
                    </div>

                    {/* Skill 4 */}
                    <div className="Skill4 large-12 medium-12 small-12 columns" id="Skill_4" style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        boxSizing: 'border-box',
                        width: 'inherit',
                        height: 'max-content'
                    }}>
                        <div className="Skillname large-12 medium-12 small-12 columns"
                             style={{textAlign: 'left', width: 'inherit'}}>
                            Kĩ năng làm việc nhóm
                        </div>
                        <div className="slider-container large-12 medium-12 small-12 columns" style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'flex-start',
                            flexDirection: 'column',
                            width: 'inherit'
                        }}>
                            <input name={"Skill4"} className="Slider" type="range" min="1" max="5" defaultValue="1"/>
                            <div className="range-values" style={{display: 'flex', justifyContent: 'space-between'}}>
                                <span>1</span>
                                <span>2</span>
                                <span>3</span>
                                <span>4</span>
                                <span>5</span>
                            </div>
                        </div>
                    </div>

                    {/*    Skill 5*/}
                    <div className="Skill5 large-12 medium-12 small-12 columns" id="Skill_5" style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        boxSizing: 'border-box',
                        width: 'inherit',
                        height: 'max-content'
                    }}>
                        <div className="Skillname large-12 medium-12 small-12 columns"
                             style={{textAlign: 'left', width: 'inherit'}}>
                            Kĩ năng vận hành máy móc
                        </div>
                        <div className="slider-container large-12 medium-12 small-12 columns" style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'flex-start',
                            flexDirection: 'column',
                            width: 'inherit'
                        }}>
                            <input name={"Skill5"} className="Slider" type="range" min="1" max="5" defaultValue="1"/>
                            <div className="range-values" style={{display: 'flex', justifyContent: 'space-between'}}>
                                <span>1</span>
                                <span>2</span>
                                <span>3</span>
                                <span>4</span>
                                <span>5</span>
                            </div>
                        </div>
                    </div>

                    {/*    Skill 6*/}
                    <div className="Skill6 large-12 medium-12 small-12 columns" id="Skill_6" style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        boxSizing: 'border-box',
                        width: 'inherit',
                        height: 'max-content'
                    }}>
                        <div className="Skillname large-12 medium-12 small-12 columns"
                             style={{textAlign: 'left', width: 'inherit'}}>
                            Kĩ năng phân tích dữ liệu
                        </div>
                        <div className="slider-container large-12 medium-12 small-12 columns" style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'flex-start',
                            flexDirection: 'column',
                            width: 'inherit'
                        }}>
                            <input name={"Skill6"} className="Slider" type="range" min="1" max="5" defaultValue="1"/>
                            <div className="range-values" style={{display: 'flex', justifyContent: 'space-between'}}>
                                <span>1</span>
                                <span>2</span>
                                <span>3</span>
                                <span>4</span>
                                <span>5</span>
                            </div>
                        </div>
                    </div>

                    {/*    Skill 7*/}
                    <div className="Skill7 large-12 medium-12 small-12 columns" id="Skill_7" style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        boxSizing: 'border-box',
                        width: 'inherit',
                        height: 'max-content'
                    }}>
                        <div className="Skillname large-12 medium-12 small-12 columns"
                             style={{textAlign: 'left', width: 'inherit'}}>
                            Kĩ năng bán hàng và tiếp thị
                        </div>
                        <div className="slider-container large-12 medium-12 small-12 columns" style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'flex-start',
                            flexDirection: 'column',
                            width: 'inherit'
                        }}>
                            <input name={"Skill7"} className="Slider" type="range" min="1" max="5" defaultValue="1"/>
                            <div className="range-values" style={{display: 'flex', justifyContent: 'space-between'}}>
                                <span>1</span>
                                <span>2</span>
                                <span>3</span>
                                <span>4</span>
                                <span>5</span>
                            </div>
                        </div>
                    </div>

                    {/*    Skill 8*/}
                    <div className="Skill8 large-12 medium-12 small-12 columns" id="Skill_8" style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        boxSizing: 'border-box',
                        width: 'inherit',
                        height: 'max-content'
                    }}>
                        <div className="Skillname large-12 medium-12 small-12 columns"
                             style={{textAlign: 'left', width: 'inherit'}}>
                            Kĩ năng viết lách
                        </div>
                        <div className="slider-container large-12 medium-12 small-12 columns" style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'flex-start',
                            flexDirection: 'column',
                            width: 'inherit'
                        }}>
                            <input name={"Skill8"} className="Slider" type="range" min="1" max="5" defaultValue="1"/>
                            <div className="range-values" style={{display: 'flex', justifyContent: 'space-between'}}>
                                <span>1</span>
                                <span>2</span>
                                <span>3</span>
                                <span>4</span>
                                <span>5</span>
                            </div>
                        </div>
                    </div>

                    {/*    Skill 9*/}
                    <div className="Skill9 large-12 medium-12 small-12 columns" id="Skill_9" style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        boxSizing: 'border-box',
                        width: 'inherit',
                        height: 'max-content'
                    }}>
                        <div className="Skillname large-12 medium-12 small-12 columns"
                             style={{textAlign: 'left', width: 'inherit'}}>
                            Kĩ năng quản lí tài chính
                        </div>
                        <div className="slider-container large-12 medium-12 small-12 columns" style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'flex-start',
                            flexDirection: 'column',
                            width: 'inherit'
                        }}>
                            <input name={"Skill9"} className="Slider" type="range" min="1" max="5" defaultValue="1"/>
                            <div className="range-values" style={{display: 'flex', justifyContent: 'space-between'}}>
                                <span>1</span>
                                <span>2</span>
                                <span>3</span>
                                <span>4</span>
                                <span>5</span>
                            </div>
                        </div>
                    </div>

                    {/*    Skill 10*/}
                    <div className="Skill10 large-12 medium-12 small-12 columns" id="Skill_10" style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        boxSizing: 'border-box',
                        width: 'inherit',
                        height: 'max-content'
                    }}>
                        <div className="Skillname large-12 medium-12 small-12 columns"
                             style={{textAlign: 'left', width: 'inherit'}}>
                            Kĩ năng quản lí dự án
                        </div>
                        <div className="slider-container large-12 medium-12 small-12 columns" style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'flex-start',
                            flexDirection: 'column',
                            width: 'inherit'
                        }}>
                            <input name={"Skill10"} className="Slider" type="range" min="1" max="5" defaultValue="1"/>
                            <div className="range-values" style={{display: 'flex', justifyContent: 'space-between'}}>
                                <span>1</span>
                                <span>2</span>
                                <span>3</span>
                                <span>4</span>
                                <span>5</span>
                            </div>
                        </div>
                    </div>

                    {/*    Skill 11*/}
                    <div className="Skill11 large-12 medium-12 small-12 columns" id="Skill_11" style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        boxSizing: 'border-box',
                        width: 'inherit',
                        height: 'max-content'
                    }}>
                        <div className="Skillname large-12 medium-12 small-12 columns"
                             style={{textAlign: 'left', width: 'inherit'}}>
                            Kĩ năng y tế
                        </div>
                        <div className="slider-container large-12 medium-12 small-12 columns" style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'flex-start',
                            flexDirection: 'column',
                            width: 'inherit'
                        }}>
                            <input name={"Skill11"} className="Slider" type="range" min="1" max="5" defaultValue="1" />
                            <div className="range-values" style={{display: 'flex', justifyContent: 'space-between'}}>
                                <span>1</span>
                                <span>2</span>
                                <span>3</span>
                                <span>4</span>
                                <span>5</span>
                            </div>
                        </div>
                    </div>
                </form>
                <div className="formDataDisplay">
                    <h3>Stored Data:</h3>
                    <p>Skill1: {formData.Skill1}</p>
                    <p>Skill2: {formData.Skill2}</p>
                    <p>Skill3: {formData.Skill3}</p>
                    <p>Skill4: {formData.Skill4}</p>
                    <p>Skill5: {formData.Skill5}</p>
                    <p>Skill6: {formData.Skill6}</p>
                    <p>Skill7: {formData.Skill7}</p>
                    <p>Skill8: {formData.Skill8}</p>
                    <p>Skill9: {formData.Skill9}</p>
                    <p>Skill10: {formData.Skill10}</p>
                    <p>Skill11: {formData.Skill11}</p>
                </div>
            </div>
        </div>
    );
}

export default Page5;