import { lazy } from 'react';

const Home = lazy(() => import('../pages/Home'));

// 路由配置数组
export const routes = [
  {
    path: '/',
    element: <Home />,
    name: '首页',
    title: '首页 - 我的应用'
  },
 
  // 404 页面（放在最后）
  {
    path: '*',
    element: <div>404 - 页面未找到</div>,
    name: '404'
  }
] as const;

export type RoutePath = typeof routes[number]['path'];
