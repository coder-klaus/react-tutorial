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
    // dispatch方法值是箭头函数，最终运行时根据作用域链 dispatch为增强后的dispatch，即 chain.reduceRight 的返回值
    // 因此对于每个中间件而言，有两个派发方法
    // 1. next 方法，是下一个中间件的 dispatch 方法
    // 2. dispatch 方法，是经过组合后的 dispatch 方法 => 重新执行一遍完整的中间件调用链

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