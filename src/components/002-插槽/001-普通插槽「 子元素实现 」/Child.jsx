import { memo, Children } from 'react'

const Child = memo(props => {
  const children = Children.toArray(props.children)
  // slot 会作为vdom的props存在，所以可以通过props.slot获取并区分插槽
  const headerSlot = children.find(child => child.props.slot === 'header') ?? <header>默认header</header>
  const mainSlot = children.find(child => child.props.slot === 'default' || !child.props.slot) ?? <main>默认main</main>
  const footerSlot = children.find(child => child.props.slot === 'footer') ?? <footer>默认footer</footer>

  return (
    <div>
      {headerSlot}
      {mainSlot}
      {footerSlot}
    </div>
  )
})

export default Child