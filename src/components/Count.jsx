import { memo } from 'react'
import { connect } from 'react-redux'
import { increment, decrement } from '../store/actionCreators'

const Count = memo((props) => {
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
    count: state.count
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Count)