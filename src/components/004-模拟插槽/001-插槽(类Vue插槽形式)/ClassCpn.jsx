import { PureComponent, Children } from 'react'

export class ClassCpn extends PureComponent {
  render() {
    // 将 props.children 的类型统一为数组，方便后续处理
    const children = Children.toArray(this.props.children)

    // 使用 Map 提升查找效率，便于后续扩展更多插槽
    const slotMap = new Map()
    children.forEach(child => {
      // default 为默认插槽
      const slotName = child.props?.slot ?? 'default'
      if (slotName) {
        slotMap.set(slotName, child)
      }
    })

    // 获取各个插槽内容 => 插槽元素使用 slot 作为命名后缀，以区分普通变量
    const headerSlot = slotMap.get('header') ?? <header>这是默认头部信息 🏷️</header>
    const defaultSlot =  slotMap.get('default') ?? <p>这是默认内容信息 📦</p>
    const footerSlot = slotMap.get('footer') ?? <footer>这是默认底部信息 🏷️</footer>

    return (
      <>
        {headerSlot}
        {defaultSlot}
        {footerSlot}
      </>
    )
  }
}

export default ClassCpn