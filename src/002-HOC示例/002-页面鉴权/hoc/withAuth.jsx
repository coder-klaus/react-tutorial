export const withAuth = Component => {
  // ❌ 错误做法：在 HOC 函数体内获取 token
  // 原因：HOC 函数只执行一次，会形成闭包，导致 token 无法实时更新
  // const token = localStorage.getItem('x-token')

  // ⚠️ 注意：返回的组件不能使用 React.memo 包裹
  // 原因：当 localStorage 中的 token 发生变化时，props 可能没有变化
  // 使用 memo 会导致组件不会重新渲染，无法检测到 token 的更新
  return props => {
    // ✅ 正确做法：在返回的组件内部获取 token
    // 确保每次组件重新渲染时都能获取到最新的 token 值
    const token = localStorage.getItem('x-token')

    if (token) {
      return <Component {...props} />
    } else {
      return <div>请先登录</div>
    }
  }
}