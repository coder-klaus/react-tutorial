import { memo } from 'react'
import Child from './Child'
// CSS Modules 和 普通 CSS 类似，如果不导入，是不会生效的
import './style.module.css'

const App = memo(() => {
  return (
    <>
      {/* 可以看到 这个div 和 Child 中的 div 的颜色都发生了修改 */}
      <div>Hello World !</div>
      <hr />
      <Child />
    </>
  )
})

export default App