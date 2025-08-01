// 本例规则使用于所有 React 内置 Hoc 函数，例如 memo、forwardRef 等
// 本例中使用 memo 为例，其他 Hoc 函数同理
import React, { memo } from 'react'

const Welcome = function(props) {
  return <div>欢迎，{props.name}！🎉</div>
}

console.log('-----------------------------------------------------')

// 使用memo包裹后，组件名就为原本组件名加上 memo 标签
// 例如本例就是 Memo(Welcome)
const MemoWelcome = memo(Welcome)

console.log('-----------------------------------------------------')

// 传给memo的组件是一个匿名组件
// memo会根据组件使用位置等信息内部生成一个名称 一般为 _c<数字>
const MemoWelcomeWithoutDisplayName = memo(props => <div>欢迎，{props.name}！🎉</div>)

// _c<数字> 是 memo 内部生成的组件名，不能通过 displayName 或 name 获取
console.log(MemoWelcomeWithoutDisplayName.name)
console.log(MemoWelcomeWithoutDisplayName.displayName)

console.log('-----------------------------------------------------')

// 手动设置displayName
const MemoWelcomeWithDisplayName = memo(props => <div>欢迎，{props.name}！🎉</div>)
MemoWelcomeWithDisplayName.displayName = 'MemoWelcomeWithDisplayName'

console.log('-----------------------------------------------------')

// 此时传入的是具名组件，DevTools 中显示为 Memo(HelloMemo)
const MemoHello = memo(function HelloMemo(props) {
  return <div>你好，{props.name}！👋</div>
})

console.log('-----------------------------------------------------')

// 此时传入的是具名组件，但具名组件名和变量名相同了，此时 DevTools 中显示为 Memo(HelloMemo<数字>)
// 数字值为 HelloMemo 出现的此时，例如在这里就是 Memo(HelloMemo3)
const HelloMemo = memo(function HelloMemo(props) {
  return <div>你好，{props.name}！👋</div>
})

// 同样的，<组件名><数字> 这也是React内部生成的，无法通过 displayName 或 name来获取
console.log(HelloMemo.name)
console.log(HelloMemo.displayName)

console.log('-----------------------------------------------------')

function App() {
  return (
    <div>
      {/* DevTools 中显示为 Welcome */}
      <Welcome />
      <hr />
      {/* DevTools 中显示为 Memo(Welcome) */}
      <MemoWelcome />
      <hr />
      {/* DevTools 中显示为 _c3 */}
      <MemoWelcomeWithoutDisplayName />
      <hr />
      {/* DevTools 中显示为 MemoWelcomeWithDisplayName */}
      <MemoWelcomeWithDisplayName />
      <hr />
      {/* DevTools 中显示为 Memo(HelloMemo) */}
      <MemoHello />
      <hr />
      <HelloMemo />
    </div>
  )
}

export default App