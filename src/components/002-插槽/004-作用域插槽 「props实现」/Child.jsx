import { memo, useState } from 'react'

const Child = memo(props => {
  const { header, main, footer } = props
  const headerSlot = header ?? (() => <header>默认header</header>)
  const mainSlot = main ?? (() => <main>默认main</main>)
  const footerSlot = footer ?? (() => <footer>默认footer</footer>)

  const [data] = useState({
    header: 'header',
    main: 'main',
    footer: 'footer'
  })

  return (
    <div>
      {headerSlot(data)}
      {mainSlot(data)}
      {footerSlot(data)}
    </div>
  )
})

export default Child