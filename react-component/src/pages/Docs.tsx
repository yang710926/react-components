import { useParams, Link } from 'react-router-dom';

const Docs = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>文档中心</h1>
      {id ? (
        <p>当前查看文档 ID: {id}</p>
      ) : (
        <div>
          <p>请选择一个文档</p>
          <ul>
            <li><Link to="/docs/1">文档 1</Link></li>
            <li><Link to="/docs/2">文档 2</Link></li>
            <li><Link to="/docs/3">文档 3</Link></li>
          </ul>
        </div>
      )}
      <div style={{ marginTop: '20px' }}>
        <Link to="/">返回首页</Link>
      </div>
    </div>
  );
};

export default Docs;
