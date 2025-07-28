import { memo } from 'react'

// 演示 props.children 的不同值情况
function Child(props) {
  // 子元素会作为 props.children传递
  const { children } = props

  let title
  if (children === undefined) {
    title = '没有子元素 🚫'
  } else if (Array.isArray(children)) {
    title = '多个子元素 🟡'
  } else {
    title = '只有一个子元素 🟢'
  }

  // 控制台输出，便于观察
  console.log(title, children)
}

const Cpn = memo(() => {
  return (
    <>
      <h2 style={{ color: '#1976d2', background: '#e3f2fd', padding: '8px 16px', borderRadius: 6 }}>
        打开控制台，查看示例结果 🚀
      </h2>

      {/* 没有子元素，props.children 为 undefined */}
      <Child />

      {/* 只有一个子元素，props.children 为单个 vdom */}
      <Child>
        <div>只有一个子元素：Hello World 🌍</div>
      </Child>

      {/* 有多个子元素，props.children 为 vdom 数组 */}
      <Child>
        <div>第一个子元素：Hello World 🌍</div>
        <div>第二个子元素：Hello React ⚛️</div>
      </Child>
    </>
  )
})

export default Cpn