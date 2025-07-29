import { memo } from 'react'
import ThemeContext from './context/ThemeContext'
import ChildWithProvider from './components/ChildWithProvider'
import ChildWithoutProvider from './components/ChildWithoutProvider'

const App = memo(() => {
  return (
    <>
      {/* 如果没有设置 value属性，则子组件注入的context值为undefined，并且会在控制台抛出对应警告 */}
      <ThemeContext.Provider>
        <ChildWithProvider />
      </ThemeContext.Provider>

      <ChildWithoutProvider />
    </>
  )
})

export default App