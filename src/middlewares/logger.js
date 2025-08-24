// store 是 storeApi 对象 => 是一个只包含了 getState 和 dispatch 的对象
// next 是一个方法，表示的就是下一个需要执行的中间件
// action 是 dispatch 传入的 action 对象
export default store => next => action => {
  // 不满足条件直接下一个中间件 => 例如 异步函数aciton就不进行日志打印了
  if (!action.type) {
    return next(action)
  }

  // 仅在开发环境打印旧的state和执行的action
  if (import.meta.env.DEV) {
    // groupCollapsed 和 groupEnd 可以用来将日志分组，方便阅读 => 控制台表现为 一个可以折叠的日志块
    // groupCollapsed 的参数是日志的标题，会显示在日志块的顶部
    // 折叠块的内容是 groupCollapsed 和 groupEnd 之间的所有打印的日志内容
    console.groupCollapsed('[logger] ' + action.type)
    console.log('旧的state', store.getState())
    console.log('执行的action', action)
  }

  const result = next(action)

  // 仅在开发环境打印新的state
  if (import.meta.env.DEV) {
    console.log('新的state', store.getState())
    console.groupEnd()
  }

  return result
}