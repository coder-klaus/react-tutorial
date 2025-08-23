import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './features/counter'
import logger from '../middlewares/logger'

export default configureStore({
  reducer: {
    counter: counterReducer
  },
  // getDefaultMiddleware 是 Redux Toolkit 提供的函数，用于获取默认的中间件配置
  // 它返回一个数组，包含 Redux 内置的中间件
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})