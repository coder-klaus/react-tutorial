// css in js 是通过 js 来编写样式，所以样式文件后缀为 .js
import styled from 'styled-components'

// 1. styled<tag>`` 是 styled-components 的语法，用于创建一个 styled 组件 「 样式组件 」
// 2. 样式组件中样式写法 和 原生 css 写法基本一致
// 3. 样式组件的命名格式一般为 XxxWrapper 「 如 AppWrapper 」以和普通组件进行区分
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

  .title {
    color: red;
  }

  .content {
    color: blue;
  }

  .footer {
    color: green;
  }
`