// styled-components 是一种 CSS-in-JS 方案，允许在 JavaScript 文件中编写样式代码
import styled from 'styled-components';

// 使用模板字符串定义带样式的组件，语法与原生 CSS 基本一致
// styled-components 通过 styled.<tag> 创建样式化组件
// 例如 AppWrapper 就是样式组件 => 渲染为指定的 HTML 元素，并附带动态生成的 CSS 样式
const AppWrapper = styled.div`
  /* SC中的注释使用 CSS 注释形式 */
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
    cursor: pointer;

    /* 设置伪类， & 会被替换为 .footer */
    &:hover {
      color: red;
    }
  }
`;

// 推荐为 IDE 安装 styled-components 插件，以获得语法高亮和代码提示
export { AppWrapper };
