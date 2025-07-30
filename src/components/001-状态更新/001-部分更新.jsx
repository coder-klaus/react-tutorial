import { PureComponent } from 'react'

export class App extends PureComponent {
  state = {
    name: '小明',
    age: 18
  }

  handleChangeName = () => {
    // setState的状态是部分更新的，会和默认状态执行浅合并
    // + 类似于 const newState = { ...this.state, ...partialState }
    // + 并不会执行 Object.assign(this.state, partialState)，因此assign合并时非纯函数，会修改this.state状态本身，破坏了 state 的不可变性原则。

    // 可以给setState传递第二个参数，其值是一个回调函数，该函数会在对应状态实际更新完毕后立即回调
    // + 功能类似于 vue的 nextTick，会在DOM更新完毕，componentDidUpdate执行完毕后被立即回调
    // + setState的第二个回调仅会在对应状态更新完毕后执行，而componentDidUpdate会在任何状态更新完毕后执行
    this.setState({ name: '小红' }, () => console.log('nextTick', this.state.name) /* 小红 */)

    // React 状态是统一批处理更新的，即状态更新时异步的，并非同步更新
    // React 会将状态更新操作统一加入更新队列，在当前主线程任务执行完毕后，生成新VDOM前, 统一更新 更新队列中的所有状态修改
    // 从而确保 在短时间内 多次调用 setState 只会触发一次render方法
    console.log(this.state.name) // '小明'
  }

  componentDidUpdate() {  console.log('componentDidUpdate') }

  render() {
    const { name, age } = this.state
    return (
      <div>
        <div>姓名：{name} 😊</div>
        <div>年龄：{age} 🎂</div>
        <button onClick={this.handleChangeName}>修改姓名</button>
      </div>
    )
  }
}

export default App