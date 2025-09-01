import { Navigate } from 'react-router-dom'
import Home from '../pages/Home'
import Profile from '../pages/Profile'
import Product from '../pages/Product'
import Info from '../pages/Info'
import NotFound from '../pages/NotFound'

const router = [
  {
    path: '/',
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
        path: 'info',
        element: <Info />,
      },
      {
        path: 'product/:id',
        element: <Product />,
      },
    ],
  },
  {
    path: '/product/:id',
    element: <Product />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
]

// 导出配置文件
export default router