// 实际使用时，store 通常通过 react-redux 的 Provider 注入到组件树中
// 这里是自定义实现 connect 的伪代码，没有 Provider，因此手动引入 store
import { bindActionCreators } from '../utils/bindActionCreators'
import { useEffect, useState, memo, useMemo, useContext } from 'react'
import { shallowEqual } from '../utils/shallowEqual'
import StoreContext from '../context/StoreContext'

// connect是个高阶函数，返回高阶组件 => 通过订阅store变化，把state和dispatch映射到组件props上
// ⚠️ 组件更新逻辑也是 connect 内部实现的 ！！！
export function connect(mapStateToProps, mapDispatchToProps) {
  return function (WrappedComponent) {
    return memo((props) => {
      const store = useContext(StoreContext)

      // 参数初始化只需要首次渲染时调用即可，后续无需再次初始化，使用无依赖项的 useMemo 避免每次渲染都重新初始化
      const stateToPropsFn = useMemo(() => {
        return typeof mapStateToProps === 'function' ? mapStateToProps : () => ({})
      }, [])

      const [stateProperty, setStateProperty] = useState(() => stateToPropsFn(store.getState()))

      let dispatchProps = useMemo(() => {
        if (typeof mapDispatchToProps === 'function') {
          return mapDispatchToProps(store.dispatch, props)
        } else if (typeof mapDispatchToProps === 'object') {
          return bindActionCreators(mapDispatchToProps, store.dispatch)
        } else {
          return {}
        }
      // props 改变，需要重新执行 mapDispatchToProps 获取最新 dispatchProps
      // 因此需要将 props 添加到依赖数组中，避免闭包陷阱
      // 简单来说就是缓存的回调函数在访问闭包变量时，因为记住的是之前执行上下文中的变量值，而不是当前执行上下文中的变量值，从而出现bug
      }, [props, store])

      useEffect(() => {
        const unsubscribe = store.subscribe(() => {
          const newStateProps = stateToPropsFn(store.getState())

          // 状态更新函数，推荐使用函数式更新 => 避免获取外部变量，导致闭包陷阱
          setStateProperty(prev => {
            if (!shallowEqual(prev, newStateProps)) {
              return newStateProps
            }
            return prev
          })
        })
        return unsubscribe
        // 只要 useEffect 使用了外部变量，就应将这些变量添加到依赖数组中
        // 这样可以确保当依赖项发生变化时，useEffect 会重新执行，回调函数能够获取到最新的变量值，从而避免闭包陷阱。
      }, [stateToPropsFn, store])

      return <WrappedComponent {...props} {...stateProperty} {...dispatchProps} />
    })
  }
}

