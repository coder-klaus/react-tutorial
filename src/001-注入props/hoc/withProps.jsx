// 高阶组件一般会放置在 src/hoc 目录下进行统一管理
export function withProps(WrappedComponent) {
  const injectProps = {
    msg: 'HOC 注入的 props'
  }

  // 需要同时注入 外部传入的props 和 HOC 注入的props
  // ⚠️
  // 1. 如果外部传入的props 和 HOC 注入的props 有重名，这里会以外部传入的props 为准
  // 2. 因为这里本质定义的是一个匿名组件，所以 HOC 文件的后缀一般使用 jsx 而非 js
  const enhancer = (props) => <WrappedComponent {...props} {...injectProps} />

  // 默认情况下，增加的组件是匿名组件，为了方便 devTool 中的调试，一般会给组件通过 displayName 来设置组件名称
  // 组件都有一个 name 属性，表示的是当前组件的名称
  enhancer.displayName = `withProps(${WrappedComponent.name})`

  return enhancer
}
