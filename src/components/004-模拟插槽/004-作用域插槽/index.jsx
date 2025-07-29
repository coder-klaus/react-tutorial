import { memo, useState } from 'react'

const Child = memo(({ children }) => {
  const [name] = useState('Klaus')

  // 父组件实际传递的是一个返回 JSX 元素的函数，我们把子组件的状态作为参数传递给这个函数
  // 这样，这个函数就能利用子组件的状态来渲染最终的 UI。
  // 通常，这个函数的参数会以对象形式传递，方便后续扩展，这个对象常被称为 slotScope。
  return children({ name })
})

const Cpn = memo(() => {
  return (
    <Child>
      {
        ({ name }) => <h2>Hello { name }</h2>
      }
    </Child>
  )
})

export default Cpn