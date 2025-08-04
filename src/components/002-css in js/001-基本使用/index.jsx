import { memo } from 'react'
import { AppWrapper } from './style'

const App = memo(() => {
  return (
    /*
      1. 直接使用 样式组件替换 原本的 div 标签 即可 「 无需添加 className 属性 」
      2. AppWrapper 会被编译为类似于 <div class="sc-hjsuWn csGIKH"> 的格式
          + 即通过最外层容器组件的 唯一类名来实现 样式隔离
          + 内部样式其实通过 .<hash类> .<类名> 来实现样式设置，如 .csGIKH .title
    */
    <AppWrapper>
      <header className="title">title</header>
      <p className="content">content</p>
      <footer className='footer'>footer</footer>
    </AppWrapper>
  )
})

export default App