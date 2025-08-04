# 在 CSS Modules 中访问不存在的样式 🤔

本示例演示在使用 CSS Modules 时，访问未定义的样式类名会发生什么。

## 主要内容

- 通过 `styles.xxx` 访问 CSS 文件中**未定义**的类名时，返回值是 `undefined`
- 如果把这个 `undefined` 拼接到 `className`，最终渲染出来的 HTML 类名会包含 `undefined` 字符串
- 这不会报错，但会让元素多出一个无意义的类名，建议避免

## 小贴士

- ⚠️ 使用 CSS Modules 时，类名一定要和 CSS 文件中定义的保持一致，避免拼写错误
- 可以通过控制台打印 `styles`，辅助调试

---

写样式时多留心，避免"幽灵"类名出现！✨
