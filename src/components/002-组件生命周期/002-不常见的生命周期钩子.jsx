import { Component } from 'react'

export class Child extends Component {
  state = {
    count: 0
  }

  /*
    static getDerivedStateFromProps(nextProps, nextState)（简称 GDSFP）
    - 触发时机：组件挂载和更新时，在 render 之前最先调用
    - 作用：根据 props 派生新状态，替代早期的 componentWillReceiveProps
    - 参数：
      nextProps：即将使用的 props
      nextState：即将使用的 state
    - 返回值：
      - 返回 null：不更新 state
      - 返回对象：合并到当前 state
  */
  static getDerivedStateFromProps(nextProps, nextState) {
    // 默认情况下，只要组件初次渲染和更新时都会被回调，因此通常需要加条件，避免不必要的 state 更新
    if (!nextState.derivedState) {
      // 返回对象，和 现有state 执行 assign 合并
      return {
        derivedState: 'getDerivedStateFromProps 注入的状态'
      }
    }

    // 如果条件不满足，则返回 null，无事发生
    return null
  }

   /*
    shouldComponentUpdate(nextProps, nextState)（简称 SCU）
    1. 返回布尔值，用于控制组件是否需要重新渲染
      - 会在 getDerivedStateFromProps 后、render 前执行
      - 返回 true：继续渲染流程
      - 返回 false：跳过渲染，后续的 VDOM 不会生成，也不会 diff 和 patch
    2. 作用：默认情况下，父组件更新，子组件也会一并更新。
            但很多时候，子组件的状态和props都没有发生任何改变，是不需要更新任何更新的
            通过 SCU 可以优化性能，防止组件在 props 和 state 未变化时不必要地更新
    3. React 提供了 PureComponent（类组件）和 memo（函数组件）
      - PureComponent 和  memo，默认实现了一个对 state 和 props 进行浅比较的 SCU方法
      - 无需我们手动编写 SCU，因此 SCU虽然很重要，但其属于不常用的生命周期钩子
      - 在 使用 PureComponent 时，默认进行 新旧props 和 新旧state 的 浅比较
        + 如果我们手动实现了自己的SCU，React反而会在控制台抛出警告，因为我们覆盖了其默认提供的SCU方法
      - 在 使用 memo 时，React默认浅比较只有 props 没有 state
        + 可以通过 memo 方法的第二个参数 手动指定一个自定义的比较函数，不过一般很少使用
    4.  默认的SCU是对 新旧state 和 新旧props 的引用地址进行了浅比较，如果每一个属性的引用地址都一致则SCU的返回值为false，中断后续更新操作
        因此我们更新状态时推荐创建一个新的对象引用，而非直接修改原本的引用地址，这种模式也叫做不可变数据的力量
    5. ⚠️ React有一个强制更新的API 叫做 forceUpdate，当执行这个API时，React会自动无视SCU，直接执行后续更新流程。
          即 forceUpdate 一律认为组件的SCU返回值为true
    6. 如果不显示提供SCU，那么默认就会认为需要进行组件更新，即默认认为 SCU的返回值为true
  */
  shouldComponentUpdate(nextProps, nextState) {
    console.log(nextProps, nextState)
    return true
  }

  /*
    getSnapshotBeforeUpdate(prevProps, prevState)（简称 GSBU）
    - 触发时机：组件更新时，在 render 执行完毕、DOM 更新前调用
    - 参数：更新前的 props 和 state
    - 作用：在 DOM 更新前获取和保存某些 DOM 信息
    - 返回值：
      - 返回快照对象：作为 componentDidUpdate 的第三个参数 snapshot
      - 返回 null：没有快照，componentDidUpdate 的第三个参数 snapshot 的值为 null
    - 如果未定义该方法，componentDidUpdate 的 snapshot 参数为 undefined
  */
  getSnapshotBeforeUpdate() {
     return {
      msg: 'getSnapshotBeforeUpdate注入的值'
     }
  }

  componentDidMount() {
    console.log(this.state.derivedState)
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(prevState.derivedState) // 'getDerivedStateFromProps 注入的状态'
    // snapshot 的值取决于 getSnapshotBeforeUpdate 的返回值
    // + 未定义 GSBU 时为 undefined
    // + 返回 null 时为 null
    // + 返回对象时为对象
    console.log('snapshot', snapshot) // { msg: 'getSnapshotBeforeUpdate 注入的值' }
  }

  render() {
    return (
      <>
        <div>{this.state.count}</div>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>+</button>
      </>
    )
  }
}

export default Child