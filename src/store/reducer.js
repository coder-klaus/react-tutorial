import { COUNT_DECREMNT, COUNT_INCREMNT } from './consts'

// reducer 是一个纯函数，它接受两个参数：state 和 action
//  + state 是当前的 state 对象
//  + action 是派发的行为对象
//  + 返回值是新的 state 对象

// reducer 必须是纯函数
// => 不能直接修改state的属性，而是要返回一个新的state对象
// => 只有新旧state引用不一致了，才会触发rendux依次回调订阅事件 => 即支持组件 subscribe 添加的事件

// state首次挂载时，state的值默认为undefined
// 此时 Redux 内部会自动派发一次aciton，action的type 是 @@redux/INIT<hash> => 实现redux store的初始化
// 因此此时匹配不上任何case，所以返回state默认为{ count: 0 }
export function reducer(state = { count: 0 }, action) {
  switch (action.type) {
    // state.count += action.payload.step => 直接修改state的属性，这是错误的
    // 因为reducer应该是纯函数，redux是根据state对象的引用地址改变来判断是否需要触发组件的订阅事件
    // 如果直接修改state的属性，那么state对象的引用地址不会改变，redux会认为state没有改变，不会触发组件的订阅事件
    // 因此，我们需要返回一个新的state对象，而不是直接修改state的属性 => state应该永远被视为是只读的

    // 一些第三方库可以提供对应的语法糖写法，让我们可以使用类似于直接修改状态的方式去修改state，但他们的本质依旧是返回一个单独的全新state对象
    // 常见的有: immutable.js, immer.js 等
    // + 早期流行的是 immutable.js，但是其语法过于繁琐，所以现在流行的是 immer.js
    case COUNT_INCREMNT:
      return {
        ...state,
        count: state.count + action.payload.step
      }
    case COUNT_DECREMNT:
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