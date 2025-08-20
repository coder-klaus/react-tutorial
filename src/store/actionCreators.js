import { COUNT_DECREMENT, COUNT_INCREMENT } from './consts'

// 模拟异步请求
function delay(time = 1000) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, time)
  })
}

// 根据 action creator 的返回值，redux 会调用不同的中间件进行处理，或自己直接处理
// + 如果 action creator 返回一个函数，则会被 redux-thunk 中间件拦截
// + 如果 action creator 返回一个 Promise，则会被 redux-promise 中间件拦截
// + 如果 action creator 返回一个对象，则会被 redux 直接分发
export function increment(step = 1) {
  // 返回一个函数，会被 redux-thunk 中间件拦截
  // 函数参数是 dispatch 和 getState
  return async (dispatch) => {
    await delay()
    // 异步结束后，需要自己手动调用 dispatch 分发 action
    // 以让 reducer 使用异步结果 更新 state
    dispatch({
      type: COUNT_INCREMENT,
      payload: {
        step
      }
    })
  }
}

// 如果 action creator 返回一个 Promise，则会被 redux-promise 中间件拦截
// 如果 action creator 返回一个标准的 action 对象，redux-promise 中间件会自动调用 dispatch 将这个 action 对象派发给redux
export async function decrement(step = 1) {
  await delay()
  return {
    type: COUNT_DECREMENT,
    payload: {
      step
    }
  }
}
