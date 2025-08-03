// styled-components 简写为 SC
// 是 css in js 的一种实现方案, 所以样式后缀为 .js
import styled from 'styled-components';

// 使用 styled.<tag> 结合 标签模板字符串创建样式组件
// 1. 样式组件会被渲染为带对应样式的 <tag> 组件元素
// 2. 标签模板字符串内写法和原生CSS嵌套写法基本一致
// 3. 内部注释使用的也是 CSS 注释 （/* ... */）
const AppWrapper = styled.div`
  /* 🎨 基本样式演示 */
  border: 2px solid #4f8ef7;
  padding: 20px;
  background-color: #f0f8ff;

  /* 标题样式 */
  .title {
    color: #e67e22;
    font-size: 28px;
    font-weight: bold;
    cursor: pointer;

    /* &:hover 会编译为 .title:hover */
    &:hover {
      color: #4f8ef7;
    }
  }

  /* 内容样式 */
  .content {
    color: #34495e;
    font-size: 18px;
    line-height: 1.7;
    padding: 10px 16px;
    background: #fffbe6;
    cursor: pointer;

    /* &:hover 会编译为 .content:hover */
    &:hover {
      color: #e67e22;
    }
  }
`;

// 样式组件命名一般为 XxxWrapper 以示区分
export default AppWrapper