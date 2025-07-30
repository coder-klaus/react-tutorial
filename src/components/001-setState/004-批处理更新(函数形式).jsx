import { PureComponent } from 'react'

export class App extends PureComponent {
  state = {
    count: 0
  }

  increment() {
    // 函数形式回调和对象形式最大的区别是
    // 函数形式内部会使用类似于组合函数的形式进行回调，这也就意味着 每次获取的prevState都是上一次状态更新的状态值
    // 因此render被执行一次，界面显示为3
    this.setState(prevState => ({ count: prevState.count + 1 }));
    this.setState(prevState => ({ count: prevState.count + 1 }));
    this.setState(prevState => ({ count: prevState.count + 1 }));
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