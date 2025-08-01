import { memo } from 'react'

// 通常，高阶组件（HOC）会统一放在 src/hoc 目录下，便于集中管理。
export function withProps(WrappedComponent) {
  // 定义需要注入的 props
  const injectProps = {
    msg: 'HOC 注入的 props'
  }

  // 返回一个新的组件，注入外部传入的 props 和 HOC 自身的 props
  // 注意：
  // 1. 如果存在同名属性，HOC 注入的 props 会覆盖外部传入的 props
  //   「
  //      具体取决于 HOC 的代码实现，
  //      在本例中 injectProps 后于 props 传递，
  //      所以 injectProps 会覆盖 props
  //    」
  // 2. HOC 是接收组件返回新组件的函数，所以 HOC文件的后缀需也为 .jsx
  const EnhancedComponent = memo(function EnhancedComponent(props) {
    return <WrappedComponent {...props} {...injectProps} />
  })

  // 为了方便 DevTools 显示，设置 displayName
  EnhancedComponent.displayName = `withProps(${WrappedComponent.displayName ?? WrappedComponent.name})`

  return EnhancedComponent
}
