import { PureComponent } from 'react'

export class App extends PureComponent {
  state = {
    name: '',
    password: ''
  }

  handleChange = (event) => {
    // 通过动态属性名（[event.target.name]）结合 DOM 元素的通用属性 name，实现多个表单项的统一处理
    // 文本输入框绑定过来的value值一定是字符串类型值
    this.setState({ [event.target.name]: event.target.value })
  }

  handleSubmit = (event) => {
    // 阻止默认行为 「 React 没有指令，无法使用修饰符 」
    event.preventDefault()
    console.log(this.state)
  }

  render() {
    return (
        <form>
          <label htmlFor="name">
            用户名
            <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
          </label>
          <label htmlFor="password">
            密码
            <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
          </label>
          <button type="submit" onClick={this.handleSubmit}>注册</button>
        </form>
    )
  }
}

export default App