export const log = store => next => action => {
  // 不满足条件，直接执行下一个中间件，不进行日志记录
  if (!action.type) {
    return next(action)
  }

  console.log('dispatching', action)
  const result = next(action)
  console.log('next state', store.getState())
  return result
}