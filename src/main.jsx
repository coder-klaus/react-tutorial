// 导入严格模式
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  // 使用严格模式
  <StrictMode>
    <App />
  </StrictMode>,
)
