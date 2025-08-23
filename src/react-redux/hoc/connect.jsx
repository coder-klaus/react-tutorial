import { useContext, useState, useEffect, useMemo } from 'react'
import StoreContext from '../context/StoreContext'
import { bindActionCreators } from '../utils/bindActionCreators'
import { shallowEqual } from '../utils/shallowEqual'

export default function connect(mapStateToProps, mapDispatchToProps) {
  if (typeof mapStateToProps !== 'function') {
    throw new Error('mapStateToProps must be a function')
  }

  if (!['object', 'function'].includes(typeof mapDispatchToProps)) {
    throw new Error('mapDispatchToProps must be a function or an object')
  }

  // redux-thunk 中的 connect 是通过类组件实现的，这里通过函数组件模拟实现
  return function (WrappedComponent) {
    return function (props) {
      const { getState, dispatch, subscribe } = useContext(StoreContext)
      const [stateProps, setStateProps] = useState(() => mapStateToProps(getState()))

      // 这是生成一个新的函数，所以需要使用useMemo 进行缓存 => 类似于计算缓存
      // 除非 dispatch 和 props 发生变化，否则不会重新计算
      const dispatchProps = useMemo(() => {
        // useMemo 的值是参数回调的返回值，所以需要返回一个值
        return typeof mapDispatchToProps === 'object' ?
        bindActionCreators(mapDispatchToProps, dispatch) :
        // 如果connect第二个参数类型是函数，则存在两个参数 dispatch 和 props
        // 如果 connect 第二个参数类型是对象，则只存在一个参数 dispatch，不存在 props 参数
        mapDispatchToProps(dispatch, props)
      }, [dispatch, props])

      useEffect(() => {
        // ⚠️ 组件更新逻辑也是 connect 内部实现的 ！！！
        const unsubscribe = subscribe(() => {
          setStateProps(prev => {
            const newStateProps = mapStateToProps(getState())

            // memo 只是对 props 进行浅比较，并不比较状态
            // 状态更新函数，如果参数值引用一致，会停止更新
            // 所以在这里 需要自己手动通过 shallowEqual 进行比较 状态是否发生变化
            // 避免每次 mapStateToProps 都返回的都是独立新对象
            return shallowEqual(prev, newStateProps) ? prev : newStateProps
          })
        })

        // 更新订阅时，移除上一次订阅
        return unsubscribe

      // 再执行useEffect 时，所以使用的外部变量都应该被视为依赖
      // 以便于在外部变量发生改变时，可以使用最新值执行对应副作用回调
      // 从而避免闭包陷阱 => 即副作用回调访问外部变量时，因为是之前执行上下文中的变量，而非最新执行上下文中的变量
      // 最终导致逻辑执行错误

      // 但是在本例中，getState 和 subscribe 这类外部变量很明确不会发生改变
      // 存在的唯一意义是为了避免 ESLint 警告错误
      }, [getState, subscribe])

      return <WrappedComponent {...props} {...stateProps} {...dispatchProps} />
    }
  }
}