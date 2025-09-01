import { memo } from 'react'
import { NavLink } from 'react-router-dom'
import Router from './Router'

const App = memo(() => {
  return (
    <div>
      {/* 定义顶层路由「 一级路由 」跳转按钮 */}
      <NavLink to="/home">
        <button>Home</button>
      </NavLink>
      <NavLink to="/profile">
        <button>Profile</button>
      </NavLink>


      <Router />
    </div>
  )
})

export default App