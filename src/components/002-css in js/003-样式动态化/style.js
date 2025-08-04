import styled from 'styled-components'

export const AppWrapper = styled.div`
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
  /*
    样式值可以通过回调函数来实现样式动态化
    + 参数是 传递给样式组件的 props对象
    + 返回值是需要设置的样式值
  */
  font-size: ${props => props.fontSize}px; // 需手动添加单位
  background-color: ${props => props.color};
  cursor: pointer;
`