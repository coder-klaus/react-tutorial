import { PureComponent } from 'react'
import Count from './Count'
import CountAction from './CountAction'

export class Child extends PureComponent {
  state = {
    count: 0
  }

  increment() {
    this.setState({
      count: this.state.count + 1
    })
  }

  render() {
    const { count } = this.state
    return (
      // 父组件可以同时给子组件传递多个 props，这些props会合并成一个对象赋值给 this.props。
      <>
        {/*
          1. props 通过组件标签上的属性传递给子组件。
          2. JSX 中，属性默认当作字符串处理，若要传递其他类型，需用花括号包裹表达式。
        */}
        <Count count={count} />
        {/*
          1. 子组件要和父组件通信时，可以调用父组件传递下来的函数类型 props。
          2. 让子组件向父组件进行通信的函数类型props建议用箭头函数，从而确保 this 指向父组件实例。
        */}
        <CountAction increment={() => this.increment()} />
      </>
    )
  }
}

export default Child