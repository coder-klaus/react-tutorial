import { PureComponent, Children } from 'react'
// createPortal 来自于 react-dom，而不是react
import { createPortal } from 'react-dom'

// Portal 组件 - 将子元素渲染到指定 DOM 节点
export class Model extends PureComponent {
  render() {
    const children = Children.toArray(this.props.children)

    // createPortal(children, container)
    // - children: 要渲染的 React 元素
    // - container: 目标 DOM 节点

    // createPortal 的返回值是一个 portal类型 的 JSX元素
    // React 会将 children 渲染到指定的 container 中，并作为最后一个子元素进行插入。即默认调用的是 appendChild方法
    return createPortal(
      <>{ children }</>,
      document.body
    )
  }
}

export default Model