import { PureComponent } from 'react'

export class ClassComponent extends PureComponent {
  /*
    默认情况下，如果没有自定义 constructor，子类会自动拥有如下默认构造函数：
    constructor(...args) {
      super(...args)
    }
  */

  constructor(props) {
    // 显式将父组件传入的 props 传递给父类构造函数
    // ⚠️：如果在 constructor 中没有将 props 传递给 super（即写成 super()），
    //  + 在 constructor 内部 this.props 为 undefined，
    //  + 只有调用 super(props) 后，才能在 constructor 中通过 this.props 访问 props。
    // 然而在构造函数执行完毕后，无论我们是否显示传递了props，React内部都会将我们的props挂载到组件实例上
    // 因此 即使我们没有显示传递props，我们依旧可以在 render等其它方法中正常使用this.props
    // 这么做的目的是为了简化类组件的代码，让我们尽可能的可以省略构造函数
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