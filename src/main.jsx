import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import RouterConfig from './router/index.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/*
      1. 基于路由配置生成嵌套路由结构
      2. 匹配默认路由 => 即 /
      所以此时并不需要自己手动渲染 App 组件了
    */}
    <RouterProvider router={RouterConfig} />
  </StrictMode>,
)
