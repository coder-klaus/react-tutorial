import { memo } from 'react'
import { connect } from 'react-redux'
import { incrementAction, decrementAction } from '../store'

const App = memo((props) => {
  const { count, increment, decrement } = props

  return (
    <>
      <h1>{count}</h1>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
    </>
  )
})

const mapStateToProps = (state) => {
  return {
    // 通过 state.counter.count 获取 counter 模块的 count 状态
    count: state.counter.count
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch(incrementAction()),
    decrement: () => dispatch(decrementAction())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)