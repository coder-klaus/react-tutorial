import { PureComponent } from 'react'
import ThemeContext from '../context/ThemeContext'

export class ClassContextConsumer extends PureComponent {
  render() {
    return (
      <ThemeContext.Consumer>
        {
          // 通过传递一个函数，来消费数据
          // 其实就是以作用域插槽的形式来消费 ctx
          (value) => <h2>ClassContextConsumer: { value.color }</h2>
        }
      </ThemeContext.Consumer>
    )
  }
}

export default ClassContextConsumer