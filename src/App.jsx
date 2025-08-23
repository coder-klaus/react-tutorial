import { memo } from 'react'
import Counter from './components/Counter'

const App = memo(() => {
  return (
    <Counter />
  )
})

export default App
