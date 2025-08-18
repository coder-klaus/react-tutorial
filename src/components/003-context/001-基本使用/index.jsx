import { memo } from 'react'
import ThemeContext from './context/ThemeContext'
import Home from './Home'

const App = memo(() => {
  return (
    // 通过上下文对象的 生产者组件 Provider 提供数据
    // 数据一般以对象形式，作为value属性值传递
    <ThemeContext.Provider value={{ color: 'red', size: 30 }}>
      {/* 只有被 Provider 包裹的后代组件才能访问 Context 数据 */}
      <Home />
    </ThemeContext.Provider>
  )
})

export default App