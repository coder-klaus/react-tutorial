// 伪代码 => 模拟实现 thunk 中间件
export const thunk = store => next => action => {
  if (typeof action === 'function') {
    return action(store.dispatch, store.getState)
  }

  // 一般情况下，中间件需要将 执行结果 return
  // 目的是 如果用户的执行逻辑中显示返回了结果，那么中间件链就需要逐层将结果返回给最外层
  return next(action)
}