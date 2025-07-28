import { PureComponent } from 'react'

export class CountAction extends PureComponent {
  render() {
    return (
      <button onClick={this.props.increment}>+1</button>
    )
  }
}

export default CountAction