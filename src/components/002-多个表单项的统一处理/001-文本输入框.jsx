import { PureComponent } from 'react'

export class App extends PureComponent {
  state = {
    name: '',
    password: '',
    gender: '',
    autoLogin: false,
    isAgree: false
  }

  handleChange = (event) => {
    // 在 React 表单处理中，可以通过动态属性名（即 [event.target.name]）结合表单元素的 name 属性，实现对多个表单项的统一管理

    // 对于 checkbox 和 radio 类型的表单项，其选中状态由 checked 属性控制，
    // 而其他类型的输入项（如 text、number 等）则通过 value 属性获取输入内容
    // 因此，可以通过判断 event.target.type，在处理表单变更时，选择合适的属性进行赋值
    this.setState({ [event.target.name]: ['checkbox', 'radio'].includes(event.target.type) ? event.target.checked : event.target.value })
  }

  handleSubmit = (event) => {
    // 阻止默认行为 「 React 没有指令，无法使用修饰符 」
    event.preventDefault()
    console.log(this.state)
  }

  render() {
    return (
        <form>
          <div>
            <label htmlFor="name">
              用户名
              {/* 文本输入框绑定的value值默认都是 字符串类型值 */}
              <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
            </label>
          </div>
          <div>
            <label htmlFor="password">
              密码
              <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
            </label>
          </div>
          <div>
            <label htmlFor="gender">
              性别
              {/*
                1. radio 默认绑定 value属性值
                2. 通过 相同 name 进行分组
                3. 如果 radio 没有设置value属性，选中时 值默认为 'on'
                   + radio 选中后，无法取消，除非通过JavaScript脚本或选中同组另一个radio
                   + 此时 只要value值不是 'on', radio 就不会被选中，因此 radio 没有取消后的默认value值
              */}
              <input type="radio" name="gender" value="male" onChange={this.handleChange} /> 男
              <input type="radio" name="gender" value="female" onChange={this.handleChange} /> 女
            </label>
          </div>
          <div>
            <label htmlFor="autoLogin">
              {/* checkbox 绑定的值 一般为 布尔类型值 */}
              <input type="checkbox" name="autoLogin" onChange={this.handleChange} /> 下次是否自动登录
            </label>
          </div>
          <div>
            <label htmlFor="isAgree">
              {/* 这里没有 value属性，因此选中后 值默认为 'on' */}
              <input type="radio" name="isAgree" onChange={this.handleChange} /> 同意协议
            </label>
          </div>
          <button type="submit" onClick={this.handleSubmit}>注册</button>
        </form>
    )
  }
}

export default App