import React from 'react'

// 类组件显示规则 和 函数组件 同理
class MyClass extends React.Component {
  render() {
    return <div>类组件 displayName 🌟</div>
  }
}

console.log('-----------------------------------------------------')

// 导出为具名函数，所以 DevTool显示为 EnhancedComponent
function withLogger(Component) {
  const EnhancedComponent = (props) => <Component {...props} />
  return EnhancedComponent
}

const LoggedHello = withLogger(MyClass)

console.log('-----------------------------------------------------')

// 导出匿名组件，又是自定义HOC，所以 DevTool 不知道如何显示组件名，显示为 Anonymous
function withLoggerWithAnyonmous(Component) {
  return (props) => <Component {...props} />
}

const LoggedHelloWithAnyonmous = withLoggerWithAnyonmous(MyClass)

console.log('-----------------------------------------------------')

// 自定义组件的 displayName
function withLoggerWithDisplayName(WrappedComponent) {
  const EnhancedComponent = (props) => <WrappedComponent {...props} />
  EnhancedComponent.displayName = `withLogger(${WrappedComponent.displayName ?? WrappedComponent.name})`
  return EnhancedComponent
}

const LoggedHelloWithDisplayName = withLoggerWithDisplayName(MyClass)

console.log('-----------------------------------------------------')

function App() {
  return (
    <div>
      {/* 普通类组件，devTools 中显示为 MyClass */}
      <MyClass />
      <hr />
      {/* 高阶组件包裹的组件，devTools 中显示为 EnhancedComponent */}
      <LoggedHello />
      <hr />
      {/* 高阶组件包裹的组件，devTools 中显示为 Anonymous */}
      <LoggedHelloWithAnyonmous />
      <hr />
      {/*
        高阶组件包裹的组件，devTools 中显示为 withLogger(MyClass)
        实际显示为 MyClass，右边一个 withLogger 标签
      */}
      <LoggedHelloWithDisplayName />
    </div>
  )
}

export default App