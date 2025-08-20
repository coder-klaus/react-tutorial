import { memo, useState, useEffect } from 'react'
import store from './store'
import { increment, decrement } from './store/actionCreators'

const App = memo(() => {
  const [_, forceUpdate] = useState(0)

  const { count } = store.getState()
  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      const { count: currentCount } = store.getState()
      if (currentCount !== count) {
        forceUpdate(prev => prev + 1)
      }
    })
    return unsubscribe
  }, [count])

  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => store.dispatch(increment())}>+1</button>
      <button onClick={() => store.dispatch(decrement())}>-1</button>
    </>
  )
})

export default App