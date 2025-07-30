import { PureComponent, createRef } from 'react'

export class App extends PureComponent {
  // 通过 createRef 创建 ref 对象
  // ref对象的默认值为 null
  dvRef = createRef()


  componentDidMount() {
    // 实际的DOM元素被挂载到 ref 对象的 current 属性上
    console.log(this.dvRef.current)
  }

  render() {
    return (
      <div>
        <div ref={this.dvRef}>Hello React</div>
      </div>
    )
  }
}

export default App
