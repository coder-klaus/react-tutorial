// 生成随机字符串
// 36进制是JavaScript中可以表示的最大进制，由 0-9 和 a-z 组成
// 进制规则 1. 不区分大小写 2. 不可以使用特殊字符
const randomString = () => Math.random().toString(36).substring(7).split('').join('.')

export default function createStore(reducer, enhancer) {
  let listeners = new Set()

  // enhancer 是 applyMiddleware函数
  if (typeof enhancer === 'function') {
    return enhancer(createStore)(reducer)
  }

  // 手动生成随机数是为了向前兼容，其实使用 Symbol() 就可以了
  let state = reducer(undefined, { type: `@redux/INIT${randomString()}` })

  return {
    getState: () => state,
    dispatch: (action) => {
      state = reducer(state, action)

      listeners.forEach(listener => listener())

      return action
    },
    subscribe: (listener) => {
      listeners.add(listener)

      return () => {
        listeners.delete(listener)
      }
    }
  }

}