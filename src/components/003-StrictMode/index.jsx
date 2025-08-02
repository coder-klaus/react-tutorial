import { PureComponent } from 'react'


export class App extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      count: 0
    }

    console.log('constructor')
  }

  componentDidMount() {
    console.log('componentDidMount')
  }

  componentDidUpdate() {
    console.log('componentDidUpdate')
  }

  componentWillUnmount() {
    console.log('componentWillUnmount')
  }

  render() {
    console.log('render')

    return (
      <>
        <div>count: {this.state.count}</div>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>+1</button>
      </>
    )
  }
}

export default App