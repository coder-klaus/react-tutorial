import { memo } from 'react'
import Child from './Child'

const App = memo(() => {
  return (
    // 给子组件函数类型props，子组件调用传入所需要的数据
    <Child
      header={({ header }) => <header>{header}</header>}
      main={({ main }) => <main>{main}</main>}
      footer={({ footer }) => <footer>{footer}</footer>}
    />
  )
})

export default App