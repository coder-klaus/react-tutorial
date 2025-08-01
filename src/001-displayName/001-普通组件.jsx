import React, { PureComponent } from 'react'


// 函数组件和类组件是没有displayName的，显示的是name属性值
function Hello(props) {
  return <div>你好，{props.name}！👋</div>
}

console.log('-----------------------------------------------------')

const Welcome = function(props) {
  return <div>欢迎，{props.name}！🎉</div>
}

console.log('-----------------------------------------------------')

class GreetingClass extends PureComponent {
  render() {
    return <div>欢迎你，{this.props.name}！🦄</div>
  }
}

console.log('-----------------------------------------------------')

const WelcomeClass = function(props) {
  return <div>欢迎你，{props.name}！🌟</div>
}

console.log('-----------------------------------------------------')

function App() {
  return (
    <div>
      <Hello name="小明" />
      <Welcome name="小红" />
      <GreetingClass name="小刚" />
      <WelcomeClass name="小李" />
    </div>
  )
}

export default App