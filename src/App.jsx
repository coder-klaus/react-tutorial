import { memo } from 'react'
import { NavLink, useRoutes } from 'react-router-dom'
import router from './router'

const App = memo(() => {
  return (
    <>
      <NavLink to="/home">Home</NavLink>
      <NavLink to="/profile">Profile</NavLink>

      {/*
        早期配置文件导出静态路由，通过 useRoutes 将配置转换为实际嵌套路由配置
      */}
      {useRoutes(router)}
    </>
  )
})

export default App