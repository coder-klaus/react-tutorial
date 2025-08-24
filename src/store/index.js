import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './features/counter'
import thunk from '../middlewares/thunk'
import logger from '../middlewares/logger'

export default configureStore({
  reducer: {
    counter: counterReducer
  },
  // getDefaultMiddleware 是 Redux Toolkit 提供的函数，用于获取默认的中间件配置
  // 它返回一个数组，包含 Redux 内置的中间件
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)

  // 这里为了测试自己实现的redux-thunk中间件，所以没有使用默认的中间件
  middleware: () => [logger, thunk]
})