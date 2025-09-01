import { memo } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

const Router = memo(() => {
  return (
    // 路由表
    <Routes>
      {/*
        path => 路由路径
        element => 路由组件
      */}
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      {/* 路由通配符 => 路由未匹配到的路径 => 兜底路由 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
})

export default Router