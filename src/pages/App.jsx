import { memo } from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const App = memo(() => {
  return (
    <div>
      <NavLink to="/home">Home</NavLink>
      <NavLink to="/profile">Profile</NavLink>

      {/* 因为App变成了一级路由，那么就可以在其中使用 Outlet 来声明二级路由需要渲染的地方 */}
      <Outlet />
    </div>
  )
})

export default App
