import { memo } from 'react'
import ThemeContext from '../context/ThemeContext'

const FunctionContextConsumer = memo(() => {
  return (
    <ThemeContext.Consumer>
      {
        // 函数组件没有静态属性 contextType，所以需要通过 Consumer 组件来消费上下文
        (value) => <h2>FunctionContextConsumer: { value.color }</h2>
      }
    </ThemeContext.Consumer>
  )
})

export default FunctionContextConsumer