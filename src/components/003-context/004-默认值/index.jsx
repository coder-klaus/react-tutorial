import { memo } from 'react'
import ThemeContext from './context/ThemeContext'
import Home from './Home'
import Profile from './Profile'

const App = memo(() => {
  return (
    <>
    {/* 使用 Provider 时必须传入 value，否则注入结果为 undefined，并在控制台产生警告 */}
    <ThemeContext.Provider>
      <Home />
    </ThemeContext.Provider>
    {/* 如果组件没有被 Provider 包裹，将会使用 Context 定义时的默认值。 */}
    <Profile />
    </>
  )
})

export default App