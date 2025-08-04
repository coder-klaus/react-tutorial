# 样式动态化 🎨

## 功能介绍
演示如何在 styled-components 中实现样式的动态化，通过 props 传递动态样式值。

## 核心要点 ✨

### 1. 动态样式实现
- 使用回调函数接收 props 参数
- 通过 `${props => props.属性名}` 语法实现动态样式
- 回调函数返回具体的样式值

### 2. 使用示例
```jsx
// 组件中使用
<AppWrapper color="#f5f5f5" fontSize={16}>
  <div>样式动态化 ✨</div>
</AppWrapper>
```

```js
// 样式定义
export const AppWrapper = styled.div`
  font-size: ${props => props.fontSize}px; // 需手动添加单位
  background-color: ${props => props.color};
`
```

### 3. 注意事项 ⚠️
- 回调函数参数是传递给样式组件的 props 对象
- 需要手动添加 CSS 单位（如 px、rem 等）
- 支持所有 CSS 属性值的动态化

## 优势 🌟
- 样式与逻辑分离，提高代码可维护性
- 支持运行时动态修改样式
- 类型安全，便于调试
