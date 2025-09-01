import { memo } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
// 视图组件一般放在 pages 目录下，全局组件放在 components 目录下
import Home from './pages/Home'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

const Router = memo(() => {
  return (
    // 路由表
    <Routes>
      {/* 路由为 / 时，渲染 Navigage组件 => 重定向到 /home */}
      <Route path="/" element={<Navigate to="/home" />} />
      {/*
        path => 路由路径
        element => 路由组件
      */}
      <Route path="/home" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      {/* 路由通配符 => 路由未匹配到的路径 => 兜底路由 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
})

export default Router