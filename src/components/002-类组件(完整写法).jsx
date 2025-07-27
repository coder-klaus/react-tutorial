import { PureComponent } from 'react'

export class ClassComponent extends PureComponent {
  /*
    默认情况下，继承的类存在如下默认属性
    constructor(...args) {
      super(...args)
    }
  */

  constructor(props) {
    // 将父组件传入的props显示传递给父类
    // ⚠️ 即使在构造器中，不显示传递props，React内部也会自动隐式将props传递给父类
    // 区别是
    // 1. 显示传递props，则可以在构造器中使用this.props，也可以在其它内部this为组件实例的方法「 如 render 」中使用this.props
    // 2. 隐式传递props，则不能在构造器中使用this.props, 只能在其它内部this为组件实例的方法「 如 render 」中使用this.props
    super(props)

    this.state = {
      count: 0
    }

    this.message = '类组件(完整写法)'
  }

  render() {
    return (
      <div>
        <h1>{this.message}</h1>
        <h2>{this.state.count}</h2>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>+1</button>
      </div>
    )
  }
}

export default ClassComponent