import { memo } from 'react'
import Counter from './components/Counter'
import UserInfo from './components/UserInfo'

const App = memo(() => {
  return (
    <>
      <Counter />
      <hr />
      <UserInfo />
    </>
  )
})

export default App