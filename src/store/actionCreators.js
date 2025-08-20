import { COUNT_DECREMNT, COUNT_INCREMNT } from './consts'

// action creator => 一个返回 action行为对象的 函数
// 因为我们可能需要多次派发行为对象，而他们区别可能仅仅是参数不同，使用action creator 可以让我们更方便的创建 action 对象
export function increment(step = 1) {
  return {
    type: COUNT_INCREMNT,
    // payload 统一为对象形式，方便后续维护和扩展
    payload: {
      step
    }
  }
}

export function decrement(step = 1) {
  return {
    type: COUNT_DECREMNT,
    payload: {
      step
    }
  }
}
