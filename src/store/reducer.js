import { COUNT_DECREMENT, COUNT_INCREMENT } from './consts'

// reducer 是一个纯函数，它接受两个参数：state 和 action
//  + state 是当前的 state 对象
//  + action 是派发的行为对象
//  + 返回值是新的 state 对象

// reducer 必须是纯函数
// => 不能直接修改state的属性，而是要返回一个新的state对象
// => 只有新旧state引用不一致了，才会触发redux依次回调订阅事件 => 即支持组件 subscribe 添加的事件

// state首次挂载时，state的值默认为undefined
// 此时 Redux 内部会自动派发一次action，action的type 是 @@redux/INIT<hash> => 实现redux store的初始化
// 因此此时匹配不上任何case，所以返回state默认为{ count: 0 }
export function reducer(state = { count: 0 }, action) {
  switch (action.type) {
    // 错误示例：state.count += action.payload.step => 因为其直接修改 state 属性。
    // reducer 应该是纯函数，不能直接修改 state，否则 state 对象的引用不会改变。
    // 虽然每次 reducer 执行后，redux 会依次回调所有订阅事件，
    // 但在使用 react-redux 等库时，state 是通过 props 注入的，如果引用地址未变，可能导致组件无法正确重新渲染。
    // 此外，每次返回的新 state 对象其实都会被视为是当前状态的快照，直接修改 state 会破坏这种不可变快照的特性，导致如 react devtools 的状态穿梭和调试功能出现问题。
    // 因此，state 应始终被视为只读，reducer 应返回新的 state 对象，而不是直接修改原 state。
    //
    // 有些第三方库（如 immutable.js、immer.js）提供了语法糖，允许我们用类似直接修改的方式更新 state，但本质上依然会返回一个全新的 state 对象。
    // 其中，immutable.js 语法较繁琐，早期较为流行，而现在 immer.js 更为常用。
    // + 因为 immer.js 相比较于 immutable.js 更为简单，更接近于原生JavaScript写法

    case COUNT_INCREMENT:
      state.count += action.payload.step
      return state
      // return {
      //   ...state,
      //   count: state.count + action.payload.step
      // }
    case COUNT_DECREMENT:
      return {
        ...state,
        count: state.count - action.payload.step
      }
    default:
      // 什么都没有匹配，直接返回旧的state即可
      // 因为此时无需触发组件的subscribe回调
      return state
  }
}