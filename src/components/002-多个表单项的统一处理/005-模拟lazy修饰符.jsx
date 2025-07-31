import { PureComponent } from 'react'

export class App extends PureComponent {
  state = {
    inputValue: 'Hello World',
    lazyInputValue: 'Hello React'
  }

  handleInputChange = (event, stateKey) => {
    this.setState({
      [stateKey]: event.target.value
    })
  }

  render() {
    return (
      <>
        <h2>模拟 lazy 修饰符 💤</h2>

        {/* 在 input 元素上绑定 onChange 事件，其行为其实和原生的input方法效果类似 */}
        <input
          type="text"
          value={this.state.inputValue}
          onChange={event => this.handleInputChange(event, 'inputValue')}
        />
        <div>{this.state.inputValue}</div>

        <hr />

        {/* 如果需要模拟vue中lazy修饰符的效果，则需要使用onBlur事件结合非受控组件来完成 */}
        <input
          type="text"
          defaultValue={this.state.lazyInputValue}
          onBlur={event => this.handleInputChange(event, 'lazyInputValue')}
        />
        <div>{this.state.lazyInputValue}</div>
      </>
    )
  }
}

export default App