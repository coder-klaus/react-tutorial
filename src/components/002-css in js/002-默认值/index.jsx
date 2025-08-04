import { PureComponent } from 'react'
import { AppWrapper } from './style'

export class App extends PureComponent {
  state = {
    size: 30,
    color: 'purple'
  }

  render() {
    return (
      <AppWrapper size={this.state.size} color={this.state.color}>
        <h1>我是标题</h1>
      </AppWrapper>
    )
  }
}

export default App