import { combineReducers } from 'redux'
import counter from './counter'
import userInfo from './userInfo'

// 通过 combineReducers 合并多个 reducer, 变成一个大的 reducer 函数
export default combineReducers({
  counter,
  userInfo,
})