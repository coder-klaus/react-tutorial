import { memo } from 'react'

// 函数组件本质就是接收props对象，并返回JSX视图的函数
// 函数组件会在组件首次渲染和后续更新时被回调，以获取最新的JSX视图
const FunctionComponent = memo((props = {}) => {
  return (
    <div>
      <h1>函数组件</h1>
      <p>props: {Object.keys(props).length > 0 ? JSON.stringify(props) : '暂时没有传递任何props'}</p>
    </div>
  )
})

export default FunctionComponent