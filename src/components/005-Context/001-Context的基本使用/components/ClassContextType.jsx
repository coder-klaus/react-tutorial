import { PureComponent } from 'react'
import ThemeContext from '../context/ThemeContext'

export class ClassContextType extends PureComponent {
  // 类组件有一个 contextType 属性，可以用来接收上下文对象
  static contextType = ThemeContext

  render() {
    return (
      // 通过 contextType指定后，就可以直接通过 this.context 消费 ctx
      // 无需通过 Consumer 组件来消费
      <h2>ClassContextType: { this.context.color }</h2>
    )
  }
}

export default ClassContextType