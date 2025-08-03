// styled-components 是一种 CSS-in-JS 方案，允许在 JavaScript 文件中编写样式代码
import styled from 'styled-components';

// 1. 使用模板字符串定义带样式的组件，语法与原生 CSS 基本一致
// 2.通过 styled.<tag>（如 styled.div）创建样式化组件，例如 AppWrapper，它会渲染为指定的 HTML 元素，并自动附带生成的 CSS 样式。
const AppWrapper = styled.div`
  /* SC中的注释使用 CSS 注释形式 */
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 5px;

  .footer {
    margin-top: 20px;
    color: green;
    cursor: pointer;

    /* 可以在样式中使用伪类，例如 &:hover，它会被转换为对应的选择器（如 .footer:hover）。 */
    &:hover {
      color: red;
    }
  }
`;

// 1. 样式组件支持嵌套调用，可以在组件内嵌套选择器。
// 2. 通常建议使用大驼峰命名法，并以 Wrapper 作为样式组件的后缀，例如 SectionWrapper。
const SectionWrapper = styled.section`
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;

  .title {
    color: red;
  }

  .content {
    color: blue;
  }
`;

// 推荐为 IDE 安装 styled-components 插件，以获得语法高亮和代码提示
export { AppWrapper, SectionWrapper };
