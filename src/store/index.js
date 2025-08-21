import { createStore } from 'redux'
import reducer from './features'
import { incrementAction, decrementAction } from './features/counter/actionCreators'
import { setUserInfoAction, setUserInfoNameAction, setUserInfoAgeAction } from './features/userInfo/actionCreators'

export default createStore(reducer)

// 统一导出 action creator 函数，便于外部调用
export {
  incrementAction,
  decrementAction,
  setUserInfoAction,
  setUserInfoNameAction,
  setUserInfoAgeAction
}