import { memo } from 'react'
import styles from './style.module.css'

const App = memo(() => {
  return (
    // 最终编译结果为: <div class="box undefined">App</div>
    // 因为 样式被整体编译为了样式对象，所以访问不存在的类名其实就是 访问对象上不存在的属性
    <div className={`box ${styles.container}`}>App</div>
  )
})

export default App