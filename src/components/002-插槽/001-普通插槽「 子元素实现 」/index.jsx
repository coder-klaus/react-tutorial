import { memo } from 'react'
import Child from './Child'

const App = memo(() => {
  return (
    <Child>
      {/*
        slot是自定义属性，用于标识插槽位置
        名称任意，为了和Vue保持一致，使用slot
      */}
      <header slot="header">
        <h2>header</h2>
      </header>
      {/* 没有slot，默认名为default */}
      <main>
        <p>main</p>
      </main>
      <footer slot="footer">
        <h2>footer</h2>
      </footer>
    </Child>
  )
})

export default App