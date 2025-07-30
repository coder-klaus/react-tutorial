import { PureComponent } from 'react'

export class App extends PureComponent {
  state = {
    isShow: true
  }

  // 定义ref对象并设置默认值
  // 因为不参与界面渲染，所以无需定义在state中
  dvRef = undefined

  componentDidMount() {
    console.log(this.dvRef)
  }

  componentDidUpdate() {
    console.log(this.dvRef)
  }

  render() {
    return (
      <>
        {/*
          ref 是一个函数
          1. 当组件挂载时，会调用这个函数，并传入 DOM 元素作为参数
          2. 当组件卸载时，会调用这个函数，并传入 null 作为参数
        */}
        {this.state.isShow && (
          <div ref={el => this.dvRef = el}>Hello React</div>
        )}
        <button onClick={() => this.setState({ isShow: false })}>remove</button>
      </>
    )
  }
}

export default App