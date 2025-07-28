import { memo, Children } from 'react'

const FunCpn = memo(props => {
  const children = Children.toArray(props.children)

  const slotMap = new Map()
  children.forEach(child => {
    const slotName = child.props?.slot ?? 'default'
    if (slotName) {
      slotMap.set(slotName, child)
    }
  })

  const headerSlot = slotMap.get('header') ?? <header>这是默认头部信息 🏷️</header>
  const defaultSlot = slotMap.get('default') ?? <p>这是默认内容信息 📦</p>
  const footerSlot = slotMap.get('footer') ?? <footer>这是默认底部信息 🏷️</footer>

  return (
    <>
      {headerSlot}
      {defaultSlot}
      {footerSlot}
    </>
  )
})

export default FunCpn