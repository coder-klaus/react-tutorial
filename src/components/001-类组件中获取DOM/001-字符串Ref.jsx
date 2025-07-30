
import { PureComponent } from 'react'

export class App extends PureComponent {
  /*
     ⚠️
      无论那种方式获取DOM，都必须在DOM挂载后，才能获取到DOM。
      并且元素被卸载后，ref 的值将为 null 或 undefined

  */
  componentDidMount() {
    // 通过字符串ref获取DOM节点, DOM节点被挂载到 this.refs 对象上
    // ⚠️ 字符串ref 在 React 16.3 版本中被弃用，在 React 19 版本中已被正式移除
    console.log(this.refs.btnRef)
  }

  render() {
    return (
      <div>
        <div ref="btnRef">Hello React</div>
      </div>
    )
  }
}

export default App
