import styled from 'styled-components'

export const AppWrapper = styled.div`
  border: 1px solid red;
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
  background-color: #f0f0f0;
  cursor: pointer;

  &:hover {
    background-color: #e0e0e0;
  }
`

// 如果样式组件内部样式比较复杂，内部元素也可以单独抽取并定义为样式组件
export const HeaderWrapper = styled.header`
  color: red;
`

export const ContentWrapper = styled.p`
  color: blue;
`

export const FooterWrapper = styled.footer`
  color: green;
`
