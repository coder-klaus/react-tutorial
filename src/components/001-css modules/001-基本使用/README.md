# CSS Modules 的基本使用 🎨

本示例演示如何在 React 项目中用 CSS Modules 实现样式的本地作用域隔离，避免样式冲突。

## 主要内容

- 通过 `import styles from './style.module.css'` 导入样式，样式会被编译为对象，key 为类名，value 为唯一哈希值
- 只对 **类选择器** 和 **id 选择器** 进行本地化，**标签选择器**（如 div、span）不会本地化
- 访问带中划线的类名需用 `styles['user-name']`，推荐用小驼峰命名法（如 `userName`）

## 快速上手

1. 导入样式
   ```js
   import styles from './style.module.css'
   ```

2. 使用样式
   ```jsx
   <div className={styles.profile}>
     <span className={styles['user-name']}>Hello</span>
   </div>
   <p className={styles.content}>content</p>
   <div id={styles.footer}>footer</div>
   ```

## 小贴士

- ⚠️ 不要用标签选择器，否则样式会全局生效，失去隔离效果
- 推荐始终用类选择器，并采用小驼峰命名法
- 样式只作用于当前组件，互不干扰

---

让你的样式更安全、更优雅，CSS Modules 让一切变得简单！🎉