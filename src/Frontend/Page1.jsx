
import './Decorator.css';
const Page1 = () =>{
    return (
        <div className="SelfGeneralPage large-12 small-12 medium-12 columns" style={{ boxSizing: 'border-box', marginLeft: 0, marginTop: 0, width: '100%', height: '80vh', position: 'relative', overflowY: 'scroll' }}>
            <div className="Panigation large-12 medium-12 small-12 columns" style={{ border: '3px solid lawngreen', boxSizing: 'border-box', position: 'relative', width: '100%', height: 'fit-content', display: 'inline-block', margin: 'auto' }}>
                <a href="#" className="Previous large-6 medium-6 small-6 columns" style={{ position: 'relative', height: 'inherit', width: 'fit-content' }}>
                    <span className="LeftPani large-12 medium-12 small-12 columns" style={{ position: 'relative', color: 'lightgoldenrodyellow', textAlign: 'left' }}>&#8249;</span>
                </a>
                <a href="#" className="Next large-6 medium-6 small-6 columns" style={{ position: 'relative', height: 'inherit', width: 'fit-content' }}>
                    <span className="RightPani large-12 medium-12 small-12 columns" style={{ position: 'relative', color: 'lightgoldenrodyellow', textAlign: 'right' }}>&#8250;</span>
                </a>
            </div>
            <div className="Text large-12 medium-12 small-12 columns" style={{ boxSizing: 'border-box', border: '3px solid lightblue', position: 'relative', width: '100%', height: 'fit-content', margin: 'auto' }}>
                <div className="Title large-12 medium-12- small-12 columns" style={{ position: 'relative', fontKerning: 'auto', fontFamily: 'Montserrat, sans-serif', color: '#E7E7C8', fontStyle: 'italic' }}>
                    NHẬP THÔNG TIN
                </div>
                <div className="Sub large-12 medium-12- small-12 columns" style={{ position: 'relative', fontKerning: 'auto', fontFamily: 'Montserrat, sans-serif', color: 'floralwhite', fontStyle: 'italic' }}>
                    Nhập thông tin của bạn dưới đây để tiến hành phân tích
                </div>
            </div>
            <div className="SelfGeneralContainer large-12 medium-12 small-12 columns" style={{ border: '5px solid lightpink', boxSizing: 'border-box', position: 'relative', width: '100%', height: 'fit-content' }}>
                <form className="General large-12 medium-12 small-12 columns" style={{height:"fit-content"}}>
                    <div className="Age" style={{ position: 'relative',width:"inherit" }}>
                        <input className="Bar AgeBar" type="text" id="age" name="age" autoFocus={true} placeholder="Nhập tuổi của bạn tại đây" required style={{boxSizing:"border-box"}} />
                    </div>
                    <label className="Gender" style={{ position: 'relative' }}>
                        <div className="custom-select">
                            <select className="Bar" id="gender" name="gender" required>
                                <option value="" disabled selected>Chọn giới tính</option>
                                <option value="male">Nam</option>
                                <option value="female">Nữ</option>
                                <option value="other">Khác</option>
                            </select>
                        </div>
                    </label>
                    <label className="Major" style={{ position: 'relative' }}>
                        <div className="custom-select">
                            <select className="Bar" id="division" name="division" required>
                                <option value="" disabled selected>Khối bạn muốn thi</option>
                                <option value="a">A00</option>
                                <option value="a1">A01</option>
                                <option value="b">B00</option>
                                <option value="c">C00</option>
                                <option value="d">D01</option>
                                <option value="h">H01</option>
                                <option value="k">Khác</option>
                            </select>
                        </div>
                    </label>
                </form>
            </div>
        </div>
    );
};

export default Page1;
