// React 支持默认导出（如 export default React）和命名导出（如 export { Component }）
// 因此我们即可以 import React from 'react' 后通过 React.PureComponent 使用，
// 也可以直接 import { PureComponent } from 'react' 后使用·
import { PureComponent } from 'react'

export class ClassComponent extends PureComponent {
  // 原则上，状态和数据一般会被定义到构造函数中
  // 但ES6提供了类字段定义方式，浏览器解析时会自动将类字段定义方式直接放入构造函数的最后执行
  // 因此我们可以直接在类中直接定义，以省略构造函数

  // 状态需要定义在state
  state = {
    count: 0
  }

  // 普通数据无需定义在state
  message = '类组件'

  // 这是唯一必须实现的方法，内部this指向组件实例，返回值是组件的JSX视图
  //  + 所以 render方法的返回值类型是 ReactNode
  // 组件的render方法会在初始渲染或组件更新时被回调，以获取最新的JSX视图
  render() {
    return (
      <div>
        <h1>{this.message}</h1>
        <h2>{this.state.count}</h2>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>+1</button>
      </div>
    )
  }
}

export default ClassComponent