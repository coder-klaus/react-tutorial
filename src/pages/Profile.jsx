import { memo } from 'react'
import { Outlet, NavLink } from 'react-router-dom'

const Profile = memo(() => {
  return (
    <>
      <h2>Profile</h2>
      <NavLink to="/profile/info">Info</NavLink>
      <NavLink to="/profile/product/1030870">Product</NavLink>

      <Outlet />
    </>
  )
})

export default Profile