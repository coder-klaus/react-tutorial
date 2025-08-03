import { PureComponent } from 'react'

export class App extends PureComponent {
  state = {
    fontSize: 16
  }

  render() {
    const { fontSize } = this.state

    return (
      <div>
        {/* 内联样式天然支持样式动态化 */}
        <h1 style={{ color: 'red', fontSize }}>标题大小: { fontSize } px</h1>
        <button onClick={() => this.setState({ fontSize: fontSize + 2 })}>修改标题大小</button>
      </div>
    )
  }
}

export default App