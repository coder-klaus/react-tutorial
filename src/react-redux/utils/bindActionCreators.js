/*
  输入:
  {
    increment: (step) => ({ type: 'COUNT_INCREMENT', payload: { step } }),
    decrement: (step) => ({ type: 'COUNT_DECREMENT', payload: { step } })
  }
  输出:
  {
    increment: (step) => dispatch({ type: 'COUNT_INCREMENT', payload: { step } }),
    decrement: (step) => dispatch({ type: 'COUNT_DECREMENT', payload: { step } })
  }
  因此理论上，connect 可以直接传入 Record<string, actionCreator> 作为参数，而不需要传入 mapDispatchToProps 类型的函数
*/
export function bindActionCreators(actions, dispatch) {
  return Object.keys(actions).reduce((acc, key) => {
    acc[key] = (...args) => dispatch(actions[key](...args))
    return acc
  }, {})
}

