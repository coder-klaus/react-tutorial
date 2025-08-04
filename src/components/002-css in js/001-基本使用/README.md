# 样式组件嵌套 🎨

✨ 本示例演示如何在 CSS in JS 中使用多个样式组件进行嵌套，让组件结构更清晰。

## 主要思路

- 样式组件支持嵌套调用，可以组合多个样式组件
- 当内部样式复杂时，可以将内部元素单独抽取为样式组件
- 每个样式组件都有独立的样式作用域

## 代码结构

- `style.js`：定义多个样式组件（`AppWrapper`、`HeaderWrapper`、`ContentWrapper`、`FooterWrapper`）
- `index.jsx`：嵌套使用多个样式组件，构建清晰的组件结构

## 代码片段

```jsx
// index.jsx
<AppWrapper>
  <HeaderWrapper>title</HeaderWrapper>
  <ContentWrapper>content</ContentWrapper>
  <FooterWrapper>footer</FooterWrapper>
</AppWrapper>
```

```js
// style.js
export const AppWrapper = styled.div`
  border: 1px solid red;
  padding: 10px;
  // ... 其他样式
`

export const HeaderWrapper = styled.header`
  color: red;
`

export const ContentWrapper = styled.p`
  color: blue;
`

export const FooterWrapper = styled.footer`
  color: green;
`
```

## 小结

- 样式组件可以像普通 HTML 标签一样嵌套使用
- 推荐将复杂的内部元素单独抽取为样式组件
- 每个样式组件都有独立的样式隔离