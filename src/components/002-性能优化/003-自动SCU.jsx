import { PureComponent, memo } from 'react';

// 类组件
class Message extends PureComponent {
  render() {
    console.log('Class Component Render')

    return <div>{ this.props.message }</div>
  }
}

// 函数组件
const Counter = memo(({ counter }) => {
  console.log('Function Component Render')
  return <div>{ counter }</div>
})

class App extends PureComponent {
  state = {
    message: 'hello world',
    counter: 0,
  }

  render() {
    const { message, counter } = this.state;
    return (
      <div>
        {/* 点击后，只有Message的props更新了，所以重新渲染，其余组件并没有更新 */}
        <button onClick={() => this.setState({ message: 'Hello React' })}>修改文本</button>
        {/* 此时更新后，App组件的SCU返回false，后续渲染也被中止了 */}
        <button onClick={() => this.setState({ counter: counter })}>修改次数</button>
        <Message message={message} />
        <Counter counter={counter} />
      </div>
    );
  }
}

export default App