import { memo } from 'react'
import Home from './Home'
import { TokenContext, ThemeContext } from './context'

const App = memo(() => {
  return (
    // 生产者嵌套提供数据
    // 数据冲突，后边的覆盖前边的
    // Crypto.uuid() => JavaScript 内置生成唯一UUID的方法
    <TokenContext.Provider value={{ token: Crypto.uuid() }}>
      <ThemeContext.Provider value={{ color: 'red', size: 30 }}>
        <Home />
      </ThemeContext.Provider>
    </TokenContext.Provider>
  )
})

export default App