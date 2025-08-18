import { memo } from 'react'

const Child = memo(props => {
  const { header, main, footer } = props
  const headerSlot = header ?? <header>默认header</header>
  const mainSlot = main ?? <main>默认main</main>
  const footerSlot = footer ?? <footer>默认footer</footer>

  return (
    <div>
      {headerSlot}
      {mainSlot}
      {footerSlot}
    </div>
  )
})

export default Child