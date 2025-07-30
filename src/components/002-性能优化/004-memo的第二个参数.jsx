import { PureComponent, memo } from 'react';

// 函数组件
const Counter = memo(
({ counter }) => {
  return <div>{ counter }</div>
},
// memo的第二个参数是对比函数，它接收两个参数：prevProps 和 nextProps。
// 如果返回 true，表示 props 没有变化，不需要重新渲染；返回 false，则会重新渲染。
// ⚠️ 其返回结果和 SCU的结果是反的，返回true表示不更新，返回false表示更新
(prevProps, nextProps) => {
  return false
})

class App extends PureComponent {
  state = {
    counter: 0,
  }

  render() {
    const { counter } = this.state;
    return (
      <div>
        <button onClick={() => this.setState({ counter: counter + 1 })}>修改次数</button>
        <Counter counter={counter} />
      </div>
    );
  }
}

export default App