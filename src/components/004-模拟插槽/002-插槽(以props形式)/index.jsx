import { PureComponent } from 'react'
import ClassCpn from './ClassCpn'
import FunCpn from './FunCpn'

export class Child extends PureComponent {
  render() {
    return (
      <>
        {/* 类组件插槽演示 */}
        <div style={{ border: '1px solid black', padding: 3, marginBottom: 16 }}>
          <h2>类组件 🎩</h2>

          {/* 显示传递插槽信息 */}
          <ClassCpn
            header={<header>父组件传入的头部信息 🏷️</header>}
            default={<p>父组件传入的内容信息 📦</p>}
            footer={<footer>父组件传入的底部信息 🏷️</footer>}
          />

          <hr />

          {/* 使用默认插槽 */}
          <ClassCpn />
        </div>

        {/* 函数组件插槽演示 */}
        <div style={{ border: '1px solid black', padding: 3 }}>
          <h2>函数组件 🧩</h2>

          {/* 显示传递插槽信息 */}
          <FunCpn
            header={<header>父组件传入的头部信息 🏷️</header>}
            default={<p>父组件传入的内容信息 📦</p>}
            footer={<footer>父组件传入的底部信息 🏷️</footer>}
          />

          <hr />

          {/* 使用默认插槽 */}
          <FunCpn />
        </div>
      </>
    )
  }
}

export default Child