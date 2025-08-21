import { memo } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { incrementAsyncAction, decrementAsyncAction } from '../store/features/counter'

const Counter = memo(() => {
  const count = useSelector(state => state.counter.count)
  const dispatch = useDispatch()

  return (
    <>
      <h2>当前计数：{count}</h2>
      <button onClick={() => dispatch(incrementAsyncAction({ step: 10 }))}>异步+10</button>
      <button onClick={() => dispatch(decrementAsyncAction({ step: 10 }))}>异步-10</button>
    </>
  )
})

export default Counter