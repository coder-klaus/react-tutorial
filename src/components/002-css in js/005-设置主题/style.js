import styled from 'styled-components'

export const ChildWrapper = styled.div
  .attrs(props => ({
    // ChildWrapper 是 ThemeProvider 的子组件，所以可以通过 props.theme 访问注入的主题对象
    color: props.theme.primary,
    fontColor: props.theme.warn
  }))`
    padding: 10px;
    margin: 10px;
    border-radius: 5px;
    background-color: ${props => props.color};
    color: ${props => props.fontColor};
    cursor: pointer;
`