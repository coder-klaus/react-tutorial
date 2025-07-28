import { memo } from 'react'

const FunCpn = memo(props => {
  const headerSlot = props.header ?? <header>这是默认头部信息 🏷️</header>
  const defaultSlot =  props.default ?? <p>这是默认内容信息 📦</p>
  const footerSlot = props.footer ?? <footer>这是默认底部信息 🏷️</footer>

  return (
    <>
      {headerSlot}
      {defaultSlot}
      {footerSlot}
    </>
  )
})

export default FunCpn