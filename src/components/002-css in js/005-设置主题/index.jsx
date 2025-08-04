import { memo } from 'react'
// styled-components 自带一个 ThemeProvider 组件，可以用来设置主题
import { ThemeProvider } from 'styled-components'
import Child from './Child'
import { themeColors } from './theme'

const App = memo(() => {
  return (
    // 主题通过 theme 属性传递给 子组件，子组件可以通过 props.theme 访问主题
    <ThemeProvider theme={themeColors}>
      <Child />
    </ThemeProvider>
  )
})

export default App