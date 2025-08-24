// 模拟实现 redux-thunk 中间件
export default store => next => action => {
  // 如果 action 是一个函数，则直接调用该函数，并传入 dispatch 和 getState
  if (typeof action === 'function') {
    return action(store.dispatch, store.getState);
  }

  // 如果不是，则调用下一个中间件
  return next(action);
}