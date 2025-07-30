import { Component } from 'react';

// 类组件
class Message extends Component {
  render() {
    console.log('Class Component Render')

    return <div>{ this.props.message }</div>
  }
}

// 函数组件
function Counter({ counter }) {
  console.log('Function Component Render')
  return <div>{ counter }</div>
}

class App extends Component {
  state = {
    message: 'hello world',
    counter: 0,
  }

  render() {
    const { message, counter } = this.state;
    return (
      <div>
        {/*
          点击该按钮，Counter依赖的状态counter并没有发生更新，
          但是因为App组件更新了，所以子组件会一并更新
          这便导致了没有意义的渲染
         */}
        <button onClick={() => this.setState({ message: 'Hello React' })}>修改文本</button>
        {/*
          点击该按钮，即便状态counter的值没有改变「 值从0变成了0 」
          但默认情况下，只要执行了setState，组件App就会重新执行render方法，进而导致App、Counter、Message组件都触发了没有意义的更新和渲染
        */}
        <button onClick={() => this.setState({ counter: counter })}>修改次数</button>
        <Message message={message} />
        <Counter counter={counter} />
      </div>
    );
  }
}

export default App