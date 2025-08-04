import styled from 'styled-components'

const ButtonWrapper = styled.button`
  background-color: #000;
  color: #f5f5f5;
  appearance: none;
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
`

// 通过 styled方法 可以继承 另一个样式组件的样式，并添加新的样式
const PrimaryButtonWrapper = styled(ButtonWrapper)`
  background: #409eff;


  &:hover {
    background: #66b1ff;
  }
`

export { ButtonWrapper, PrimaryButtonWrapper }