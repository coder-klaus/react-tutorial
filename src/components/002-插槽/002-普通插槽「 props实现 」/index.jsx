import { memo } from 'react'
import Child from './Child'

const App = memo(() => {
  return (
    // 通过props实现插槽
    <Child
      header={<header>header</header>}
      main={<main>main</main>}
      footer={<footer>footer</footer>}
    />
  )
})

export default App