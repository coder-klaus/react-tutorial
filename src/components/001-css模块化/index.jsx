import { memo } from 'react'
// 1. 在 Vite 项目中，只需使用 .module.css 文件后缀，即可自动启用 CSS Modules，无需额外配置。
// 2. CSS Modules 会将样式作为一个对象导出，需通过 import 语句引入。
//    + 通常建议将变量命名为 xxxStyle，以便与普通样式区分。
import profileStyle from './style.module.css'

// 1. CSS Modules 会对类名进行本地化转译，生成唯一的标识符，从而避免类名冲突和全局污染。
// 2. 只有类选择器会被本地化处理，其余选择器不会被转译。
// 3  转译后的类名通常类似于：_<类名>_<唯一标识符>_<数字>，确保样式唯一且不冲突。
// 4. CSS Modules 支持中划线命名（kebab-case），但此时导出的样式对象属性名也为中划线，需用中括号语法访问，不够方便。
//    + 建议使用小驼峰命名（camelCase），这样可以直接通过点语法访问样式对象属性，更简洁易用。
console.log(profileStyle)
/*
  {profile: '_profile_2x1bc_1', user-name: '_user-name_2x1bc_6', content: '_content_2x1bc_10'}
*/

const App = memo(() => {
  return (
    <div className={profileStyle.profile}>
      <h2 className={profileStyle['user-name']}>张三</h2>
      <p className={profileStyle.content}>这是一个个人简介</p>
    </div>
  )
})

export default App