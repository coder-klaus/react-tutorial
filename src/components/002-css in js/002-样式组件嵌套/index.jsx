import { memo } from 'react'
import { AppWrapper, HeaderWrapper, ContentWrapper, FooterWrapper } from './style'

const App = memo(() => {
  return (
    // 样式组件 支持 嵌套调用
    <AppWrapper>
      <HeaderWrapper>title</HeaderWrapper>
      <ContentWrapper>content</ContentWrapper>
      <FooterWrapper>footer</FooterWrapper>
    </AppWrapper>
  )
})

export default App