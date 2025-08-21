import { memo } from 'react'
import Count from './components/Count'
import UserInfo from './components/UserInfo'

const App = memo(() => {
  return (
    <>
      <Count />
      <hr />
      <UserInfo />
    </>
  )
})

export default App