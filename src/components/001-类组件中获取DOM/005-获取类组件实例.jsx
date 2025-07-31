import { PureComponent, createRef } from 'react'

class ClassCpn extends PureComponent {
  state = {
    count: 0
  }

  render() {
    return (
      <>
        <h3>{this.state.count}</h3>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>+</button>
        <button onClick={() => this.setState({ count: this.state.count - 1 })}>-</button>
      </>
    )
  }
}

export class App extends PureComponent {
  state = {
    count: 0
  }

  classCpnRef = createRef()

  componentDidMount() {
    // 如果ref对象直接作用于类组件，获取的就是类组件对应的实例对象
    console.log(this.classCpnRef.current)
    console.log(this.classCpnRef.current.state) // => { count: 0 }
  }

  render() {
    return (
      <>
        <ClassCpn ref={this.classCpnRef} />
      </>
    )
  }
}

export default App