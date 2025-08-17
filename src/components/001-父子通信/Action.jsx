import { memo } from 'react'

const Action = memo(({ change }) => {
  return (
    <>
      <button onClick={() => change(1, 'increment')}>+1</button>
      <button onClick={() => change(1, 'decrement')}>-1</button>
    </>
  )
})

export default Action