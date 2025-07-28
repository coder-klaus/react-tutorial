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
          <ClassCpn>
            {/*
              通过 slot 属性模拟具名插槽
              slot 是自定义属性，可以任意命名，不过一般为了和 vue的命名规则保持一致，推荐使用slot
            */}
            <header slot="header">父组件传入的头部信息 🏷️</header>
            <p>父组件传入的内容信息 📦</p>
            <footer slot="footer">父组件传入的底部信息 🏷️</footer>
          </ClassCpn>

          <hr />

          {/* 使用默认插槽 */}
          <ClassCpn />
        </div>

        {/* 函数组件插槽演示 */}
        <div style={{ border: '1px solid black', padding: 3 }}>
          <h2>函数组件 🧩</h2>

          {/* 显示传递插槽信息 */}
          <FunCpn>
            <header slot="header">父组件传入的头部信息 🏷️</header>
            <p>父组件传入的内容信息 📦</p>
            <footer slot="footer">父组件传入的底部信息 🏷️</footer>
          </FunCpn>

          <hr />

          {/* 使用默认插槽 */}
          <FunCpn />
        </div>
      </>
    )
  }
}

export default Child