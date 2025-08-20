import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from './store/index.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* react-redux 提供 Provider 组件，用于将 store 注入到应用中, 避免每个组件在使用时都需要单独导入 store */}
    {/* react-redux 底层使用的依旧是 react的 context机制 */}
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)