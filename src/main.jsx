import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// 导入路由组件
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* 开启路由 => 可以局部也可以全局，一般全局即可 */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)

