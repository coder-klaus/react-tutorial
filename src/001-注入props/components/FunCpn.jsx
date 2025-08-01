import { memo } from 'react'
import { withProps } from '../hoc/withProps'

const FunCpn = memo(withProps(props => {
  return (
    <>
      <h2>FunCpn</h2>
      {/* 这是 HOC 注入的 props */}
      <p>msg: {props.msg}</p>
      {/* 这是外部传入的 props */}
      <p>type: {props.type}</p>
    </>
  )
}))

export default FunCpn