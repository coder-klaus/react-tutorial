import { memo } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setUserInfoAction, setUserInfoNameAction, setUserInfoAgeAction } from '../store/features/userInfo'

const UserInfo = memo(() => {
  const userInfo = useSelector(state => state.userInfo)
  const dispatch = useDispatch()

  return (
    <>
      <h2>用户信息：{userInfo.name}</h2>
      <h2>用户年龄：{userInfo.age}</h2>

      <button onClick={() => dispatch(setUserInfoNameAction('Steven'))}>设置用户名</button>
      <button onClick={() => dispatch(setUserInfoAgeAction(23))}>设置用户年龄</button>
      <button onClick={() => dispatch(setUserInfoAction({ name: 'Klaus', age: 18 }))}>设置用户信息</button>
    </>
  )
})

export default UserInfo