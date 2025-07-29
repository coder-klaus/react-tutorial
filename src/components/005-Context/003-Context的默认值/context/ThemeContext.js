import { createContext } from 'react'

// createContext 的参数用于指定 context 的默认值
// 只有当组件没有被 Provider 包裹时，才会使用这个默认值
// 如果组件被 Provider 包裹，则会使用 Provider 的 value 属性值，默认值不会生效
const ThemeContext = createContext({
  color: 'blue',
})

export default ThemeContext

