import styled from 'styled-components'

export const AppWrapper = styled.div
  // 通过 attrs 方法设置默认值，attrs的参数是一个接收props对象的回调函数
  // 回调函数会在生成样式组件之前拦截 props对象，从而设置默认值
  .attrs(props => ({
    color: props.color ?? '#f5f5f5',
    fontSize: props.fontSize ?? 16
  }))`
    padding: 10px;
    margin: 10px;
    border-radius: 5px;
    /*
      如果某个样式需要单独设置默认值，可以不使用 attrs 方法，直接在样式中设置默认值
      例如：font-size: ${props => props.fontSize ?? 16}px;
      或 font-size: ${({ fontSize = 16 }) => fontSize}px;
    */
    font-size: ${props => props.fontSize}px;
    background-color: ${props => props.color};
    cursor: pointer;
`