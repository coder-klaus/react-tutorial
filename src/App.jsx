import { memo } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Router from './Router'

const App = memo(() => {
  return (
    <>
      {/*
        Link 默认渲染为 a标签
        => 没有属性指定其渲染后的标签形式
        => 可以通过Link的子元素来指定渲染后的标签形式
      */}
      <Link to="/">
        <button>default</button>
      </Link>

      <NavLink to="/home">
        <button>Home</button>
      </NavLink>

      <NavLink
        to="/contact"
        className={ ({ isActive }) => isActive ? 'custom-active' : '' }
      >
        <button>Contact</button>
      </NavLink>

      <NavLink
        to="/not-found"
        style={ ({ isActive }) => isActive ? { color: 'red' } : { color: 'blue' } }
      >
        <button>NotFound</button>
      </NavLink>

      {/*
        导入路由配置组件 => 即是路由配置，也是渲染占位符
      */}
      <Router />
    </>
  )
})

export default App