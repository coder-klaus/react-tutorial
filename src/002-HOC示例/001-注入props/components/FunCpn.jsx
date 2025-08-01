import { memo } from 'react'
import { withProps } from '../hoc/withProps'

const FunCpn = memo(props => {
  return (
    <>
      <h2>FunCpn 🎉</h2>
      {/* 通过高阶组件（HOC）注入的 props */}
      <p>msg: {props.msg}</p>
      {/* 通过父组件传入的 props */}
      <p>type: {props.type}</p>
    </>
  )
})

// 传递的函数是匿名函数，为了方便 DevTools 显示，需要显示设置 displayName，否则其显示的名称为 _c<数字>
// HOC 的 displayName 设置规则是 <传入组件>.displayName ?? <传入组件>.name
// 如果不显示设置 displayName，则最终 HOC 的 displayName 即为 undefined
FunCpn.displayName = 'FunCpn'

export default withProps(FunCpn)