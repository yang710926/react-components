import { lazy } from 'react';

const Home = lazy(() => import('../pages/Home'));
const Docs = lazy(() => import('../pages/Docs'));
const Intro = lazy(() => import('../components/Intro'));
const Switch = lazy(() => import('../components/Switch'));
const Button = lazy(() => import('../components/Button'));
// 路由配置数组
export const routes = [
  {
    path: '/',
    element: <Home />,
    name: '首页',
    title: '首页'
  },
  {
    path: '/Docs',
    element: <Docs />,
    name: '文档页',
    title: '文档页',
    children: [
      {
        path: 'Intro',
        element: <Intro />,
        name: '介绍页',
        title: '介绍页'
      },
      {
        path: 'Switch',
        element: <Switch />,
        name: 'Switch组件',
        title: 'Switch组件'
      },
       {
        path: 'Button',
        element: <Button />,
        name: 'Button组件',
        title: 'Button组件'
      },
    ]
  },


  // 404 页面（放在最后）
  {
    path: '*',
    element: <div>404 - 页面未找到</div>,
    name: '404'
  }
] as const;

export type RoutePath = typeof routes[number]['path'];
