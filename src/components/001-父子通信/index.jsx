import { PureComponent } from 'react'
import Counter from './Counter'
import Action from './Action'

export class App extends PureComponent {
  state = {
    count: 0
  }

  changeCount(step, type) {
    const flag = type === 'increment'

    this.setState({
      count: this.state.count + step * (flag ? 1 : -1)
    })
  }

  render() {
    return (
      <div>
        {/* 父传子 通过props 实现 */}
        <Counter count={this.state.count} />
        {/*
          子传父
          + 通过函数类型props 实现
          + 建议传递箭头函数，以确保this指向正确 => 因此需要手动实现参数转发
        */}
        <Action change={(step, type) => this.changeCount(step, type)} />
      </div>
    )
  }
}

export default App