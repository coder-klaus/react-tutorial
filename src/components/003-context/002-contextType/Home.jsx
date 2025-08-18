import { PureComponent } from 'react'
import ThemeContext from './context/ThemeContext'

export class Home extends PureComponent {
  // 通过静态属性 contextType，可以让类组件直接访问对应的 Context 的 value。
  // 指定 contextType 后，可以通过 this.context 获取当前上下文的值。
  // 注意：一个类组件只能指定一个 contextType，
  // 如果有多个 Context 嵌套，其他的 Context 需要通过 Consumer 组件来获取。
  static contextType = ThemeContext

  render() {
    return (
      <>
        <h2>Home</h2>
        <p>color: {this.context.color}</p>
        <p>size: {this.context.size}</p>
      </>
    )
  }
}

export default Home