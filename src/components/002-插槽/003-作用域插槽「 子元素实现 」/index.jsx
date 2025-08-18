import { memo } from 'react'
import Child from './Child'

const App = memo(() => {
  return (
    <Child>
      {
        // 以函数形式将 插槽传递给子组件，子组件将需要使用的数据通过函数参数传递给父组件
        // 这个函数参数一般叫做 slotScope
        ({ header, main, footer }) => (
          // 函数返回值是个单独的JSX片段，所以也必须有且只能有一个根元素
          <>
            <header slot="header">
              <h2>{header}</h2>
            </header>
            <main>
              <p>{main}</p>
            </main>
            <footer slot="footer">
              <h2>{footer}</h2>
            </footer>
          </>
        )
      }
    </Child>
  )
})

export default App