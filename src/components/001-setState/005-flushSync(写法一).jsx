import { PureComponent } from 'react'
import { flushSync } from 'react-dom'

export class App extends PureComponent {
  state = {
    count: 0
  }

  handleClick = () => {
    this.setState({ count: this.state.count + 1 })

    // 1. flushSync 从react-dom中引入，而不是react
    // 2. flushSync的参数是回调，当这个回调函数执行完毕后React会立即批处理一次状态变更， 而flushSync内部函数执行依旧是异步的
    //    因此在本例中 flushSync回调执行完毕后会批处理执行一次，而此时flushSync之前的回调还没有被更新，所以会在此次批处理中被一并更新完成

    // 所以本例中，render方法会被回调两次，界面上 count的值为2
    flushSync(() => {
      this.setState({ count: this.state.count + 1 })
      this.setState({ count: this.state.count + 1 })
    })

    this.setState({ count: this.state.count + 1 })
  }

  render() {
    console.log('render')

    return (
      <div>
        <h2>当前计数：{this.state.count} 🎉</h2>
        <button onClick={this.handleClick}>click me 🚀</button>
      </div>
    )
  }
}

export default App