import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/*
      通过 BrowserRouter 或 HashRouter 开启路由功能
    */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
