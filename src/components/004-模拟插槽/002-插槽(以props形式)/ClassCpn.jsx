import { PureComponent } from 'react'

export class ClassCpn extends PureComponent {
  render() {
    const headerSlot = this.props.header ?? <header>这是默认头部信息 🏷️</header>
    const defaultSlot =  this.props.default ?? <p>这是默认内容信息 📦</p>
    const footerSlot = this.props.footer ?? <footer>这是默认底部信息 🏷️</footer>

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