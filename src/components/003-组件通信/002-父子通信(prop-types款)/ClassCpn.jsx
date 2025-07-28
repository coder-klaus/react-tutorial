import PropTypes from 'prop-types'
import { PureComponent } from 'react'

export class ClassCpn extends PureComponent {
  // 通过静态属性 propTypes 设置 props 类型校验
  // 和 Vue 一样，类型校验只是警告信息，并不会真正阻止 props 传递
  static propTypes = {
    // 具体支持类型，可以查阅 prop-types 的官方文档
    count: PropTypes.number.isRequired
  }

  // 通过静态属性 defaultProps 设置 props 的默认值
  // 只有当props的值隐式为undefined「 没有传递 」 或被 显示传递为 undefined时
  // 默认值没有必要和必选值同时存在，因为设置了必选值将无法触发默认值，所以同时设置默认值和必选值将会出现警告
  static defaultProps = {
    title: 'prop-types 在类组件中的使用示例'
  }

  render() {
    // React19 开始 prop-types的类型校验将静默失效，没有必要为了设置默认值单独引入一个第三方库
    // 因此 React19 开始 props的默认值推荐使用如下方式进行设置
    // const { title = 'prop-types 在类组件中的使用示例', count } = this.props
    // 而 类型校对 和 props是否必传「 是否是可选属性 」 通过 TypeScript进行设置

    return (
      <>
        <h2>{ this.props.title }</h2>
        <div>{ this.props.count }</div>
      </>
    )
  }
}

export default ClassCpn