import { COUNT_DECREMENT, COUNT_INCREMENT } from './consts'

function delay(time = 1000) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, time)
  })
}

// ⚠️
// 这是一个 action creator 函数，返回值是一个函数
// 实际dispatch的是返回的action，所以嵌套的时候，直接dispatch方法就行了，不用在单独返回一个异步函数
export function increment(step = 1) {
  // 因为 thunk 中间件中 函数参数dispatch是增强后的dispatch，不是next，所以可以嵌套派发异步action
  // ⚠️ 一般情况下并不需要嵌套异步调用，可以通过在一个async函数中执行多次await来实现相同的效果
  return async (dispatch) => {
    console.log('第一个异步执行')
    await delay()

    dispatch(async () => {
      console.log('第二个异步执行')
      await delay()

      dispatch({
        type: COUNT_INCREMENT,
        payload: {
          step
        }
      })
    })
  }
}

export function decrement(step = 1) {
  return {
    type: COUNT_DECREMENT,
    payload: {
      step
    }
  }
}
