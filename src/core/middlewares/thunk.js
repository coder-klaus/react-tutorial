// 伪代码 => 模拟实现 thunk 中间件
export const thunk = store => next => action => {
  if (typeof action === 'function') {
    // 这里 执行函数时 传入的是 增强后的 dispatch，以便于可以嵌套派发异步action
    return action(store.dispatch, store.getState)
  }

  // 一般情况下，中间件需要将 执行结果 return
  // 目的是 如果用户的执行逻辑中显示返回了结果，那么中间件链就需要逐层将结果返回给最外层
  return next(action)
}