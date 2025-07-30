import { PureComponent, createRef, memo, forwardRef } from 'react'

/*
  如果同时使用 memo 和 forwardRef，则需要将 memo 放在 forwardRef 的外面
  从而确保 forwardRef 会将 ref 自动注入为 函数组件的 第二个参数
  如果 forwardRef 放在 memo 外，ref会注入给memo，而memo不会转发给 函数组件
*/
const FunCpn = memo(forwardRef((props, ref) => {
  return (
    <div ref={ref}>FunCpn</div>
  )
}))

export class App extends PureComponent {
  funCpnRef = createRef()

  componentDidMount() {
    console.log(this.funCpnRef.current) // <div>FunCpn</div>
  }


  render() {
    return (
      <>
        {/*
          1. 函数组件没有实例，默认不能直接绑定ref对象
             直接给函数组件绑定 Ref对象，在 React18 之前会报错，而从 React18开始，不会报错，但ref对象的current值为null

          2. 我们可以使用 forwardRef 实现ref转发，从而绑定函数组件中的某一个子DOM元素
        */}
        <FunCpn ref={this.funCpnRef} />
      </>
    )
  }
}

export default App