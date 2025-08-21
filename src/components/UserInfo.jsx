import { memo } from 'react'
import { connect } from 'react-redux'
import { setUserInfoAction, setUserInfoNameAction, setUserInfoAgeAction } from '../store'

const UserInfo = memo((props) => {
  const { userInfo, setUserInfo, setUserInfoName, setUserInfoAge } = props

  return (
    <div>
      <button onClick={setUserInfo}>设置用户信息</button>
      <button onClick={setUserInfoName}>设置用户名</button>
      <button onClick={setUserInfoAge}>设置用户年龄</button>

      {
        Object.keys(userInfo).length ? (
          <div>
            {
              Object.entries(userInfo).map(([key, value]) => {
                return (
                  <div key={key}>
                    <span>{key}:</span>
                    <span>{value}</span>
                  </div>
                )
              })
            }
          </div>
        ) : <div>用户信息为空</div>
      }
    </div>
  )
})

const mapStateToProps = (state) => {
  return {
    userInfo: state.userInfo
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setUserInfo: () => dispatch(setUserInfoAction({ name: '张三', age: 18 })),
    setUserInfoName: () => dispatch(setUserInfoNameAction({ name: '李四' })),
    setUserInfoAge: () => dispatch(setUserInfoAgeAction({ age: 20 }))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserInfo)