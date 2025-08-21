import { memo } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { incrementAction, decrementAction } from '../store/features/counter'

const Counter = memo(() => {
  // 1. 我们可以继续使用 connect 将 props 和 actionCreator 注入 组件
  // 2. 也可以使用 Redux 提供的Hook API 来获取 state 和 dispatch
  //  + useSelector => 功能和 connect 的 mapStateToProps 一致
  //  + useDispatch => 用于获取 dispatch 方法
  const count = useSelector(state => state.counter.count)
  const dispatch = useDispatch()

  return (
    <>
      <h2>当前计数：{count}</h2>
      <button onClick={() => dispatch(incrementAction())}>+1</button>
      <button onClick={() => dispatch(decrementAction())}>-1</button>
      <button onClick={() => dispatch(incrementAction({ step: 10 }))}>+10</button>
    </>
  )
})

export default Counter