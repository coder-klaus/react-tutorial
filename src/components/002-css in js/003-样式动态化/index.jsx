import { memo } from 'react'
import { AppWrapper } from './style'

const App = memo(() => {
  return (
    // 通过 props 传递 动态样式值
    <AppWrapper color="#f5f5f5" fontSize={16}>
      <div>样式动态化 ✨</div>
    </AppWrapper>
  )
})

export default App