import { PureComponent } from 'react'
import ThemeContext from './context/ThemeContext'

export class Home extends PureComponent {
  render() {
    return (
      // 通过上下文对象的 消费者组件 Consumer 消费数据
      <ThemeContext.Consumer>
        {
          // 结果是一个函数，函数参数就是 Provider 组件的 value 属性值
          value => {
            return (
              <>
                <h2>Home</h2>
                <p>color: {value.color}</p>
                <p>size: {value.size}</p>
              </>
            )
          }
        }
      </ThemeContext.Consumer>
    )
  }
}

export default Home