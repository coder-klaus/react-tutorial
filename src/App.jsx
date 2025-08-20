import { memo, useState, useEffect } from 'react'
// 导入状态对象
import store from './store'
// 导入 action creators
import { increment, decrement } from './store/actionCreators'

const App = memo(() => {
  const [_, forceUpdate] = useState(0)

  // 通过store.getState() 获取状态对象
  const { count } = store.getState()

  // 每次状态改变，所有订阅事件都会被依次回调
  // 即使不是count的值发生改变，该订阅事件依旧可能因为其它状态改变而触发，非常浪费性能

  // 为此，需要通过 useEffect包裹处理，依赖项为 count
  // + 首次渲染，订阅事件 => subscribe中的闭包变量count获取的是第一次上下文中的count
  // + 状态改变，取消之前的订阅事件，重新订阅，并强制刷新组件
  //   => 因为重新订阅，所以闭包变量 count的值 是 最新的上下文中的count值
  useEffect(() => {
    // store.subscribe 参数是一个回调，这个回调会被加入redux的事件池中
    // 当redux store中状态发生改变，事件池中的所有事件都会被依次触发

    // store.subscribe 返回一个函数，这个函数可以用来取消订阅
    const unsubscribe = store.subscribe(() => {
      const { count: currentCount } = store.getState()
      if (currentCount !== count) {
        forceUpdate(prev => prev + 1)
      }
    })
    return unsubscribe
  }, [count])

  return (
    <>
      <h1>{count}</h1>
      {/* 任何状态的改变都必须通过 store.dispatch 派发一个 action 对象来实现 */}
      <button onClick={() => store.dispatch(increment())}>+1</button>
      <button onClick={() => store.dispatch(decrement())}>-1</button>
    </>
  )
})

export default App