import { memo } from 'react'
import { AppWrapper } from './style'

const App = memo(() => {
  return (
    <AppWrapper>
      <div>默认值</div>
    </AppWrapper>
  )
})

export default App