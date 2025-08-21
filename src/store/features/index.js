import { combineReducers } from 'redux'
import counter from './counter'
import userInfo from './userInfo'

/*
  通过 combineReducers 合并多个 reducer, 最终变成类似于如下的对象
  {
    counter: {
      ...
    },
    userInfo: {
      ...
    }
  }
*/
export default combineReducers({
  counter,
  userInfo,
})