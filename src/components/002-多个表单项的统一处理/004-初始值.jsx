import { PureComponent, createRef } from 'react'

/**
 * 本示例演示了受控组件和非受控组件设置初始值的方式 😃
*/
class App extends PureComponent {
  state = {
    username: '张三' // 受控组件的初始值
  }

  // 创建ref用于非受控组件
  inputRef = createRef()
  checkboxRef = createRef()

  handleSubmit = (e) => {
    e.preventDefault()

    // 获取非受控组件的值

    // 这种 完全通过 原生DOM 控制的表单元素 可以叫做 “完全” 非受控组件
    // 而那种 状态由 表单 value/checked 控制, 而值更新通过 React 控制 「 如通过 onChange 更新状态值 」 的表单元素 可以叫做 “不完全” 非受控组件
    const inputValue = this.inputRef.current.value
    const checkboxChecked = this.checkboxRef.current.checked

    console.log(`受控组件用户名: ${this.state.username} 😃`)
    console.log(`非受控文本框: ${inputValue} 📝`)
    console.log(`非受控复选框: ${checkboxChecked ? '选中 ✅' : '未选中 ❌'}`)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>受控组件示例 ✍️</h2>
        <label>
          用户名（受控）:
          <input
            type="text"
            value={this.state.username}
            onChange={({ target }) => {
              this.setState({
                username: target.value
              })
            }}
          />
        </label>
        <br /><br />

        <h2>非受控组件示例 🕹️</h2>
        <label>
          备注（非受控，defaultValue）:
          <input
            type="text"
            defaultValue="初始备注"
            ref={this.inputRef}
          />
        </label>
        <br /><br />
        <label>
          同意协议（非受控，defaultChecked）:
          <input
            type="checkbox"
            defaultChecked={true}
            ref={this.checkboxRef}
          />
        </label>
        <br /><br />

        <button type="submit">提交 🚀</button>
      </form>
    )
  }
}

export default App