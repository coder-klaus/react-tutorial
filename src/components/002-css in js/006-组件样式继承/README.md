# 组件样式继承 🔄

## 功能介绍
演示如何在 styled-components 中实现样式组件的继承，通过 `styled(组件)` 语法复用现有样式并添加新样式。

## 核心要点 ✨

### 1. 基础样式组件
```js
const ButtonWrapper = styled.button`
  background-color: #000;
  color: #f5f5f5;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
`
```

### 2. 继承样式组件
```js
// 通过 styled(ButtonWrapper) 继承基础样式
const PrimaryButtonWrapper = styled(ButtonWrapper)`
  background: #409eff; // 覆盖父组件的背景色

  &:hover {
    background: #66b1ff; // 添加悬停效果
  }
`
```

### 3. 使用示例
```jsx
// 使用基础按钮
<ButtonWrapper>普通按钮</ButtonWrapper>

// 使用继承的主按钮
<PrimaryButtonWrapper>主按钮</PrimaryButtonWrapper>
```

## 继承机制 🔧

### 样式覆盖规则
- 子组件样式会覆盖父组件的同名属性
- 未覆盖的属性会保持父组件的样式
- 可以添加父组件没有的新样式

### 生成的类名
```html
<!-- 基础按钮 -->
<button class="sc-bRKDuR irIZrm">普通按钮</button>

<!-- 继承按钮 -->
<button class="sc-bRKDuR sc-hvigdm irIZrm fgerNX">主按钮</button>
```

## 优势 🌟

### 代码复用
- 避免重复编写相同的基础样式
- 提高代码维护性
- 保持样式一致性

### 灵活扩展
- 可以添加新的样式属性
- 支持伪类选择器扩展
- 实现样式变体

### 类型安全
- 继承的组件保持类型信息
- IDE 智能提示支持
- 减少样式错误

## 注意事项 ⚠️
- 继承的样式组件会生成多个类名
- 子组件样式优先级高于父组件
- 建议合理使用继承，避免过度嵌套
