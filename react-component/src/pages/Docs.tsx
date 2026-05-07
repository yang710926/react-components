import Top from '../components/top';
import '../css/doc.scss';
import { Link, Outlet } from 'react-router-dom';
const Docs = () => {

  return (
    <div >
      <Top />
      <div className="docs-content">
        <aside>
          {/* 目录导航区域 */}
          <h1>文档</h1>
          <ol>
            <li> <Link to="./Intro"> 介绍</Link></li>
          </ol>

          <h1>组件列表</h1>
          <ol>
            <li> <Link to="./Switch"> switch</Link></li>
          </ol>

        </aside>
        <main>
          {/* 文档内容将放在这里 */}
          <Outlet />
        </main>
      </div>

    </div>
  );
};

export default Docs;
