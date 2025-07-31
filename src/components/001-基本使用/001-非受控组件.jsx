import { PureComponent } from 'react';

class App extends PureComponent {
  state = {
    username: ''
  }

  handleChange = (event) => {
    // 表单元素的值存放在 DOM 的 value 属性中，onChange 事件用于将输入框的值与组件的 state 实现同步。
    // 这种表单元素值不是绑定为 react组件状态，而是DOM原生 value属性的组件 就是 非受控组件
    this.setState({ username: event.target.value });
    console.log(this.state.username);
  };

  render() {
    return (
      <>
        <input type="text" onChange={this.handleChange} />
        <h1>{this.state.username}</h1>
      </>
    );
  }
}

export default App