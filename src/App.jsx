import { memo } from 'react'
import { connect } from 'react-redux'
import { increment, decrement } from './store/actionCreators'

const App = memo((props) => {
  const { count, increment, decrement } = props

  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => increment()}>异步+1</button>
      <button onClick={() => decrement()}>同步-1</button>
    </>
  )
})

const mapStateToProps = (state) => {
  return {
    count: state.count
  }
}

const mapDispatchToProps = {
  increment,
  decrement
}

export default connect(mapStateToProps, mapDispatchToProps)(App)