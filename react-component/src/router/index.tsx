// router/index.tsx
import { createBrowserRouter } from 'react-router-dom';
import { Suspense } from 'react';
import { routes } from './routes';

// 懒加载 Loading 组件
const Loading = () => (
  <div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    fontSize: '18px',
    color: '#666'
  }}>
    加载中...
  </div>
);

// 创建路由配置（带懒加载包装）
const router = createBrowserRouter(
  routes.map(route => ({
    ...route,
    element: (
      <Suspense fallback={<Loading />}>
        {route.element}
      </Suspense>
    )
  }))
);

export { router };
