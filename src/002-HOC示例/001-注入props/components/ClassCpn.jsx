import { PureComponent } from 'react'
import { withProps } from '../hoc/withProps'

class ClassCpn extends PureComponent {
  render() {
    return (
      <div>
        <h2>ClassCpn 🏫</h2>
        {/* 这是 HOC 注入的 props */}
        <p>msg: {this.props.msg}</p>
        {/* 这是外部传入的 props */}
        <p>type: {this.props.type}</p>
      </div>
    )
  }
}

const EnhancedClassCpn = withProps(ClassCpn)
export default EnhancedClassCpn