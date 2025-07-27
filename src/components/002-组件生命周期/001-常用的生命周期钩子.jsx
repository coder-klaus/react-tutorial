import { PureComponent } from 'react'

export class Child extends PureComponent {
  state = {
    count: 0
  }

  /*
    componentDidMount（CDM）
    - 触发时机：组件首次挂载到 DOM 后
    - 作用：适合进行 DOM 操作、添加事件监听、发起网络请求等副作用
    - 无参数
  */
  componentDidMount() {
    console.log('componentDidMount')
  }

  /*
    componentDidUpdate（CDU）
    - 触发时机：组件更新且 DOM 更新完成后
    - 参数：
      prevProps：更新前的 props
      prevState：更新前的 state
      snapshot：getSnapshotBeforeUpdate 的返回值，默认为 undefined
  */
  componentDidUpdate() {
    console.log('componentDidUpdate')
  }

  /*
    componentWillUnmount（CWU）
    - 触发时机：组件卸载前
    - 作用：清理副作用，如移除事件监听、清除定时器等
  */
  componentWillUnmount() {
    console.log('componentWillUnmount')
  }

  render() {
    console.log('render')

    return (
      <>
        <div>{this.state.count}</div>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>+</button>
      </>
    )
  }
}

export default Child