import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './features/counter'
import userInfoReducer from './features/userInfo'

// RTK 使用 configureStore 创建 store
// 参数为
// 1. reducer => 实现之前 combineReducers 的功能，将多个 reducer 合并为一个 reducer
// 2. middleware => 中间件
//    + 默认内置集成了 redux-thunk
//    + 可以自行扩展，值为数组，数组中可以传入多个中间件 => 自己设置的数组会替换默认内置数组，所以此时需要自己加上 redux-thunk
// 3. devTools => 是否开启 DevTool 调试工具 => 默认开启
export default configureStore({
  reducer: {
    counter: counterReducer,
    userInfo: userInfoReducer,
  },
})