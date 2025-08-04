# 设置主题 🎨

## 功能介绍
演示如何使用 styled-components 的 `ThemeProvider` 组件来设置和管理全局主题，实现主题色的统一管理和动态切换。

## 核心要点 ✨

### 1. 主题定义
```js
// theme/index.js
export const themeColors = {
  primary: '#409eff',
  warn: '#e6a23c',
  success: '#67c23a'
}
```

### 2. 主题提供者
```jsx
// 使用 ThemeProvider 包裹应用或组件树
import { ThemeProvider } from 'styled-components'

<ThemeProvider theme={themeColors}>
  <Child />
</ThemeProvider>
```

### 3. 主题使用
```js
// 在样式组件中通过 props.theme 访问主题
export const ChildWrapper = styled.div
  .attrs(props => ({
    color: props.theme.primary,
    fontColor: props.theme.warn
  }))`
    background-color: ${props => props.color};
    color: ${props => props.fontColor};
  `
```

## 使用流程 🔄

1. **定义主题对象** - 创建包含主题色的配置对象
2. **提供主题** - 使用 `ThemeProvider` 包裹组件树
3. **使用主题** - 在样式组件中通过 `props.theme` 访问主题值

## 优势 🌟

### 统一管理
- 集中管理所有主题色值
- 便于主题切换和维护
- 确保设计一致性

### 类型安全
- 主题对象结构清晰
- 便于 IDE 智能提示
- 减少拼写错误

### 动态切换
- 支持运行时主题切换
- 实现暗黑模式等功能
- 提升用户体验

## 注意事项 ⚠️
- `ThemeProvider` 只能向下传递主题，不能向上
- 主题对象会被注入到所有子组件的 props.theme 中
- 建议将主题对象结构化，便于维护和扩展
