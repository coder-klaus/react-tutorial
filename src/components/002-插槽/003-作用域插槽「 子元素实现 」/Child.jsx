import { memo, Children } from 'react'

const Child = memo(props => {

  return (
    <>
      {/* 调用函数类型props，并传入所需参数 */}
      {props.children({
        header: 'header',
        main: 'main',
        footer: 'footer'
      })}
    </>
  )
})

export default Child