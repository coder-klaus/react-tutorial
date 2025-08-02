import { PureComponent } from 'react'

export const withRenderTime = Component => {
  // HOC 仅仅只是隐式注入功能，外部不实际使用，理论上，完全可以导出匿名组件
  // 但如果要考虑 DevTools 的调试，最好还是 为导出组件设置 displayName 或 name
  return class extends PureComponent {
    startTime = 0

    componentDidMount() {
      // performance 是浏览器全局对象，可以获取到浏览器性能相关的信息
      // performance.now() 返回一个高精度的当前时间，单位是毫秒
      this.endTime = performance.now()
      console.log(`${Component.displayName ?? Component.name} 渲染时间：${this.endTime - this.startTime}ms`)
    }

    render() {
      this.startTime = performance.now()
      return <Component {...this.props} />
    }
  }
}