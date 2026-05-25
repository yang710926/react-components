import { useNavigate } from 'react-router-dom';
import '../css/top.scss';
import logo from '../assets/svg/wuweiqiyue.svg';

/**
 * 顶部导航栏组件
 *  
 * 渲染应用程序的顶部导航区域，包含品牌标识元素
 * 
 * @returns 返回包含顶部导航栏结构的 JSX 元素
 */
function Top() {
    const navigate = useNavigate();

    const tohome = () => {
        navigate('/');
    };

    const todocs = () =>{
         navigate('/Docs');
    }

    return (
        <div>
            <div className="top-bar">
                <div className="logo">
                    <img src={logo} alt="" onClick={tohome}/>
                </div>

                <div className="btns" onClick={todocs}>
                    <span style={{ marginRight: '50px' }}>文档</span>
                </div>
            </div>
        </div>
    );
}

export default Top;