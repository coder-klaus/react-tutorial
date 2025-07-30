import { PureComponent } from 'react'

export class App extends PureComponent {
  state = {
    count: 0
  }

  increment() {
    // 状态不是每次同步更新的，因此每次执行的都类似于 this.setState({ count: 0 + 1 })
    // 因此界面最终更新结果为 1
    this.setState({ count: this.state.count + 1 });
    this.setState({ count: this.state.count + 1 });
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    // 得益于批处理机制，即使短时间内状态更新了三次，render方法也只被回调了一次
    console.log('render')

    return (
      <>
        <h2>{ this.state.count }</h2>
        <button onClick={() => this.increment()}>increment</button>
      </>
    )
  }
}

export default App