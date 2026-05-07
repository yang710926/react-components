import Top from '../components/top';
import '../css/home.scss';
import { useNavigate } from 'react-router-dom';
const features = [
  {
    title: '开箱即用',
    description: '开箱即用，快速上手，无需配置，即可使用'
  },
  {
    title: '组件丰富',
    description: '组件丰富，功能齐全，满足各种需求'
  },
  {
    title: '文档详尽',
    description: '文档详尽，易于理解，使用方便'
  }
];


const toaddress = () => {
  window.open('https://gitee.com/yang710926/react---component-library/tree/master/react-component');
}



const Home = () => {
  const navigate = useNavigate();
  const todoc = () => {

    navigate('/Docs');
  }
  return (
    <div>
      <Top />
      <div className="content">
        <h1>瓦UI</h1>
        <h2 style={{ marginTop: '15px' }}>基于react.js的UI框架</h2>
        <div className="btns">
          <div className="address" onClick={toaddress}>gitee</div>
          <div className="go" onClick={todoc}>开始</div>
        </div>
      </div>

      <div className="features">
        {features.map((item, index) => (
          <div className="item" key={index}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
