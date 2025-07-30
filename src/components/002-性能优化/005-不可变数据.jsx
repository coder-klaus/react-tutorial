import { PureComponent } from 'react'

export class App extends PureComponent {
  state = {
    users: [
      { id: 1, name: '张三', age: 18 },
      { id: 2, name: '李四', age: 20 },
      { id: 3, name: '王五', age: 22 },
    ]
  }

  addUserError() {
    // 虽然状态改了，但是因为引用地址没变，所以不会重新渲染
    // 最终导致同一个状态在不同地方显示不一致，这被称之为 「 脏状态 或 状态撕裂 」
    this.state.users.push({ id: 4, name: '赵六', age: 24 })
    this.setState({ users: this.state.users })
  }

  addUserSuccess() {
    // 因为参数为函数的setState，会接收上一次的state，因此其是实际使用中更为常见的写法
    this.setState(prevState => ({
      // 改变状态时，使用新的引用地址，可以触发重新渲染
      users: [...prevState.users, { id: 4, name: '赵六', age: 24 }]
    }))
  }

  render() {
    return (
      <>
        <ul>
          {this.state.users.map(user => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
        <button onClick={() => this.addUserError()}>add user『 无效操作 』</button>
        <button onClick={() => this.addUserSuccess()}>add user『 有效操作 』</button>
      </>
    )
  }
}

export default App