import { memo } from 'react'

// 函数组件可以通过解构来获取props，并通过参数默认值来设置props的默认值
const Counter = memo(({ count = 0 }) => {
  return (
    <>
      <h2>Counter: {count}</h2>
    </>
  )
})

export default Counter