// styled-components 是一种 CSS-in-JS 方案，允许在 JavaScript 文件中编写样式代码
import styled from 'styled-components';

// 使用模板字符串定义带样式的组件，语法与原生 CSS 基本一致
const AppWrapper = styled.div`
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 5px;

  .section {
    background-color: #fff;
    padding: 20px;
    border-radius: 5px;

    .title {
      color: red;
    }

    .content {
      color: blue;
    }
  }

  .footer {
    margin-top: 20px;
    color: green;
  }
`;

// 推荐为 IDE 安装 styled-components 插件，以获得语法高亮和代码提示
export { AppWrapper };
