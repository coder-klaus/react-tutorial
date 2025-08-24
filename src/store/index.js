import { createStore, applyMiddleware, thunk, log } from '../core'
import { reducer } from './reducer'

// 中间件件执行顺序是从参数的左边向右边执行
// 执行的中间件是 [...applyMiddleware的参数列表, store.dispatch]
export default createStore(reducer, applyMiddleware(thunk, log))