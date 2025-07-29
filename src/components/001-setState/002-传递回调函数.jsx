import { PureComponent } from "react";

class Counter extends PureComponent {
  state = {
    count: 0
  }

  handleAdd = () => {
    // setState 可以接收一个返回需要更新状态的工厂函数
    // 该工厂函数返回的partialState会和现有state进行浅合并

    // 该工厂函数接收两个参数
    // 1. 上一次更新的状态对象
    // 2. 组件传入的 props对象
    this.setState((prevState, props) => {
      // 使用工厂函数的好处是
      // 1. 如果状态需要经过计算得出，可以将修改逻辑纳入函数中，增加内聚性
      // 2. 可以直接基于旧状态派生出新状态
      console.log("上一次的count:", prevState.count);
      // ⚠️: React 不会像Vue那样 自动在 pascal-case 和 camcelCase 之间进行自动转换
      // 为了方便在JS中使用，推荐写成小驼峰形式
      console.log('组件的props:', props); // {parent-count: 100}
      return { count: prevState.count + 1 };
    }, () => {
      console.log('nextTick', this.state.count)
    });

    console.log('主线程', this.state.count)
    /*
      第一次点击按钮后的执行结果如下:

      主线程 0
      上一次的count: 0
      组件的props: {parent-count: 100}
      nextTick 1

      总结：
      1. 给setState传工厂函数，内部也是统一加入更新对象，统一批处理更新
         所以是先执行完主线程的日志打印，再执行回调函数

      2. 无论setState第一个参数是对象还是函数，都可以传递第二个参数，以在对应状态实际更新完毕后执行
    */
  };

  render() {
    return (
      <div>
        <h2>计数器：{this.state.count}</h2>
        <button onClick={this.handleAdd}>+1</button>
      </div>
    );
  }
}

class App extends PureComponent {
  render() {
    return <Counter parent-count={100} />
  }
}

export default App