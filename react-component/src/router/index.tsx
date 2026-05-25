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

// 递归为所有路由（含子路由）包裹 Suspense
const wrapSuspense = (routeList: any) => {
  return routeList.map((route: any) => ({
    ...route,
    element: (
      <Suspense fallback={<Loading />}>
        {route.element}
      </Suspense>
    ),
    ...(route.children ? { children: wrapSuspense(route.children) } : {})
  }));
};

// basename 匹配 vite.config 中的 base，dev 为 '/'，生产为 '/react-components/'
const router = createBrowserRouter(wrapSuspense(routes), {
  basename: import.meta.env.BASE_URL,
});

export { router };
