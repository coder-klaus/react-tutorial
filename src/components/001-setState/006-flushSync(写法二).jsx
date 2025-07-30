import { PureComponent } from 'react'
import { flushSync } from 'react-dom'

export class App extends PureComponent {
  state = {
    count: 0
  }

  handleClick = async () => {
    this.setState({ count: this.state.count + 1 })
    this.setState({ count: this.state.count + 1 })

    // 可以通过这简单一行直接模拟同步刷新
    flushSync(() => {})

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