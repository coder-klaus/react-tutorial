import { PureComponent } from 'react'
import FunCpn from './FunCpn'
import ClassCpn from './ClassCpn'

export class Child extends PureComponent {
  state = {
    count: 0
  }

  increment() {
    this.setState({
      count: this.state.count + 1
    })
  }

  render() {
    const { count } = this.state
    return (
      <>
        {/* count + '' 是为了让 number类型 props变成 string，从而触发 prop-types的类型警告 */}
        <ClassCpn count={count + ''} />
        <br />
        <FunCpn count={count + ''} />
      </>
    )
  }
}

export default Child