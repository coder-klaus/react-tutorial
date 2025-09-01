import { createBrowserRouter, Navigate } from 'react-router-dom'
import App from '../pages/App'
import Home from '../pages/Home'
import Profile from '../pages/Profile'
import Product from '../pages/Product'
import Info from '../pages/Info'
import NotFound from '../pages/NotFound'

// history路由 => createBrowserRouter
// hash路由 => createHashRouter
const router = createBrowserRouter([
  {
    path: '/',
    // 路由包裹器
    element: <App />,
    // 子路由
    children: [
      // 默认路由
      {
        index: true,
        // 路由重定向
        element: <Navigate to="/home" />,
      },
      {
        path: '/home',
        element: <Home />,
      },
      {
        path: '/profile',
        element: <Profile />,
        children: [
          {
            index: true,
            element: <Navigate to="/profile/info" />,
          },
          {
            // 子路由可以是相对路径，也可以是绝对路径
            // 如果是相对路径，会和父路由进行拼接处理
            // 如果是绝对路径，会直接使用
            path: 'info',
            element: <Info />,
          },
          {
            path: '/profile/product/:id',
            element: <Product />,
          },
        ],
      },
      {
        path: '/product/:id',
        element: <Product />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
])

export default router