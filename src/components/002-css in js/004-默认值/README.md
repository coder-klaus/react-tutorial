# 默认值设置 🎯

## 功能介绍
演示如何在 styled-components 中为动态样式设置默认值，确保组件在没有传递 props 时也能正常显示。

## 核心要点 ✨

### 1. attrs 方法设置默认值
```js
export const AppWrapper = styled.div
  .attrs(props => ({
    color: props.color ?? '#f5f5f5',
    fontSize: props.fontSize ?? 16
  }))`
    font-size: ${props => props.fontSize}px;
    background-color: ${props => props.color};
  `
```

### 2. 内联默认值设置
```js
// 方式一：使用空值合并运算符
font-size: ${props => props.fontSize ?? 16}px;

// 方式二：使用解构赋值默认值
font-size: ${({ fontSize = 16 }) => fontSize}px;
```

### 3. 使用示例
```jsx
// 不传递任何 props，使用默认值
<AppWrapper>
  <div>默认值</div>
</AppWrapper>

// 传递部分 props，未传递的使用默认值
<AppWrapper color="#ff6b6b">
  <div>部分默认值</div>
</AppWrapper>
```

## 关键特性 🌟

### attrs 方法优势
- 在样式组件生成前拦截 props
- 统一管理多个默认值
- 提高代码可读性和维护性

### 内联默认值优势
- 针对单个属性设置默认值
- 语法简洁明了
- 灵活性更高

## 注意事项 ⚠️
- `??` 空值合并运算符只对 `null` 和 `undefined` 生效
- `attrs` 方法在组件创建时执行，性能更好
- 内联默认值在每次渲染时都会执行
