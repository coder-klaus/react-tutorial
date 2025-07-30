import { Component } from 'react'

export default class App extends Component {
  state = {
    count: 0
  }

  render() {
    console.log('render')

    return (
      <>
        <div>{ this.state.count }</div>
        {/*
          对于 Component而言，只要调用 setState，当前组件和其子组件就会重新渲染
          即使 新旧状态是一致的，此时会全量生成全新的VDOM，但 diff之后，没有patch不进行实际 DOM更新
        */}
        <button onClick={() => this.setState({ count: 0 })}>click</button>
      </>
    )
  }
}