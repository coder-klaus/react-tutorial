// 伪代码 => 模拟实现 thunk 中间件
export const thunk = store => next => action => {
  if (typeof action === 'function') {
    return action(store.dispatch, store.getState)
  }

  // 将中间件调用结果逐层返回，以便于最外层使用
  return next(action)
}