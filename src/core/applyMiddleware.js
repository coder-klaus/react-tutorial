// 伪代码 => 模拟实现 applyMiddleware

// 1. middlewares 是中间件数组
// 2. createStore 是 redux 提供的 createStore 函数
// 3. reducer 就是 传递给 createStore 的 reducer 函数
export default (...middlewares) => createStore => reducer => {
  const store = createStore(reducer)

  // middlewareAPI 只有 store 的 getState 和 dispatch 方法
  // 没有其余方法，如 subscribe
  const middlewareAPI = {
    getState: store.getState,
    // middlewareAPI 的 dispatch 方法，是经过组合后的 dispatch 方法
    // 所以中间件中执行 dispatch 方法 后会重新执行一遍 中间件调用链

    // 一般来说 dispatch方法只需要传递 action 参数即可
    // ⚠️ 这里的 args 是为了避免一些中间件需要使用这种方式传递额外参数，属于兼容性处理，以提升代码的健壮性和可扩展性
    dispatch: (action, ...args) => dispatch(action, ...args)
  };

  const chain = middlewares.map(middleware => middleware(middlewareAPI));

  // 实现类似于 compose 的功能
  const dispatch = chain.reduceRight(
    (next, middleware) => middleware(next),
    store.dispatch
  );

  // monkey patching 了 store 的 dispatch 方法
  // 使用 组合后的 dispatch 替换 store 的 dispatch
  return { ...store, dispatch };
}