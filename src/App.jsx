import { memo } from 'react'
// react-redux 只是简化了 redux 在组件中的使用，并不影响 redux 本身的定义方式
import { connect } from 'react-redux'
import { increment, decrement } from './store/actionCreators'

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

// 全局注入后，组件就不需要自己导入state，并调用 getState() 获取状态对象
// mapStateToProps 是一个函数，用于将 state 映射到组件的 props 中
// 参数为 redux state 对象，返回值为 props 对象
const mapStateToProps = (state) => {
  return {
    count: state.count
  }
}

// mapDispatchToProps 是一个函数，用于将 dispatch 映射到组件的 props 中
// 参数为 dispatch 函数，返回值为 props 对象
const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)