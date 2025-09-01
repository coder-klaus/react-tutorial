import { Navigate, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Info from './pages/Info'
import Products from './pages/Products'
import Profile from './pages/Profile'
import NotFound from './pages/NotFound'

// 路由配置组件不会接收 props，所以无需使用memo
export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      {/* Route可以嵌套调用 */}
      <Route path="/home" element={<Home />}>
        {/*
          子路由会自动和父路由进行路径拼接，形成完整的路径
          假设 父路由是 /home
          1. 如果子路由是相对路径，例如 info，则完整路径是 /home/info
          2. 如果子路由是绝对路径，例如 /info, 则完整路径是 /info
        */}

        {/*
          index => 当路由为父路由时，默认会渲染的子路由
        */}
        <Route index element={<Navigate to="info" />} />
        <Route path="info" element={<Info />} />
        <Route path="products" element={<Products />} />
      </Route>
      <Route path="/profile" element={<Profile />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}