import { createStore, applyMiddleware } from 'redux'
// thunk 中间件，用于处理异步 action
import { thunk } from 'redux-thunk'
import promise from 'redux-promise'
import { reducer } from './reducer'

// 参数一是 reducer 函数，参数二是中间件
// applyMiddleware 可以接收多个中间件，并按照顺序依次判断是否满足执行条件，如果满足则执行

// ⚠️: 本例是示例，redux-thunk 和 redux-promise 都是用于在 redux 中派发 异步任务的中间件
//  一般情况下，两者选一个即可
// 其中 redux-thunk 是 redux 官方提供的中间件，redux-promise 是第三方中间件
// 所以相比较而言 redux-thunk的使用频率更高
export default createStore(reducer, applyMiddleware(thunk, promise))