import { memo } from 'react'
import { connect } from 'react-redux'
import { increment, decrement } from '../store/actionCreators'

const Counter = memo((props) => {
  const { count, increment, decrement } = props

  return (
    <>
      <h1>{count}</h1>
      {/* ⚠️: 这里必须使用箭头函数包裹，否则默认会传入合成事件对象，导致无法使用action creator的默认参数 */}
      <button onClick={() => increment()}>+1</button>
      <button onClick={() => decrement()}>-1</button>
    </>
  )
})

const mapStateToProps = (state) => {
  return {
    count: state.count
  }
}

/*
   如果 connect 的第二个参数是对象，redux内部提供了 bindActionCreators 函数
   会将对象中的每个属性值都转换为 dispatch(action) 的函数
   {
    increment: (...args) => increment(...args),
    decrement: (...args) => decrement(...args)
   }
  会被转换为
  {
    increment: (...args) => dispatch(increment(...args)),
    decrement: (...args) => dispatch(decrement(...args))
  }
*/
const mapDispatchToProps = {
  increment,
  decrement
}


export default connect(mapStateToProps, mapDispatchToProps)(Counter)