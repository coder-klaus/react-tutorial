import { PureComponent } from 'react'

export class Count extends PureComponent {
  render() {
    return (
      <div>{ this.props.count }</div>
    )
  }
}

export default Count