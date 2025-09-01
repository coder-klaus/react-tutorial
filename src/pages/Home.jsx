import { memo } from 'react'
import { Outlet, Link } from 'react-router-dom'

const Home = memo(() => {
  return (
    <>
      <h2>Home</h2>

      {/* 定义二级路由跳转按钮 */}
      <Link to="/home/info">
        <button>Info</button>
      </Link>
      <Link to="/home/products">
        <button>Products</button>
      </Link>


      {/* 子路由默认渲染的位置 */}
      <Outlet />
    </>
  )
})

export default Home