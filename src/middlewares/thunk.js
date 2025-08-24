// 模拟实现 redux-thunk 中间件
export default store => next => action => {
  // 如果 action 是一个函数，则直接调用该函数，并传入 dispatch 和 getState
  if (typeof action === 'function') {
    // 如果异步函数返回的还是一个函数，则嵌套调用 => 实现异步函数嵌套调用
    return action(store.dispatch, store.getState);
  }

  // 如果不是，则调用下一个中间件
  return next(action);
}