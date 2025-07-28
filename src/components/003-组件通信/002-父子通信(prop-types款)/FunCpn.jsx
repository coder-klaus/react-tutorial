import PropTypes from 'prop-types'
import { memo } from 'react'

// React19 开始 prop-types 的类型校对将不再生效，只对默认值生效，没必要为了默认值引入一个单独的第三方库
// 因此 React19开始推荐写法如下 ({ count, title = 'prop-types 在函数组件中的使用示例' }) => JSX视图
const FunCpn = memo(() => {
  return (
    <div>FunCpn</div>
  )
})

// 函数组件，对props进行类型校对和是否必传
FunCpn.propTypes = {
  count: PropTypes.number.isRequired
}

// 函数组件，设置 props的默认值
FunCpn.defaultProps = {
  title: 'prop-types 在函数组件中的使用示例'
};

export default FunCpn