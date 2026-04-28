import Top from '../components/top';
import '../css/home.scss';

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

const Home = () => {
  return (
    <div>
      <Top />
      <div className="content">
        <h1>瓦UI</h1>
        <h2 style={{ marginTop: '15px' }}>基于react.js的UI框架</h2>
        <div className="btns">
          <div className="address">gitee</div>
          <div className="go">开始</div>
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
