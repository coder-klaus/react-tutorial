import { memo } from 'react'
// 样式对象一般命名为 xxxStyles 或 直接使用 styles，以示区分
import styles from './style.module.css'

// 样式会被编译为样式对象 => 其中 key 是类名，value 是编译后的值
console.log(styles)
/*
  1. 类名会被编译为唯一哈希值，实现样式名本地私有化
     + 编译后的类名格式类似于 _<类名>_<哈希值>_<数字>

  2. CSS Modules 只会本地化 class 和 id 选择器，标签选择器（如 div、span）不会被本地化

  所以编译后的 styles 对象如下：
  {
    profile: '_profile_n6vdn_1',
    'user-name': '_user-name_n6vdn_5',
    content: '_content_n6vdn_9',
    footer: '_footer_n6vdn_1'
  }

  ⚠️:
  因为类名定义时使用的是 .user-name，所以编译后的类名是 _user-name_n6vdn_5
  这也就意味着 在 JS 中，需要使用 styles['user-name'] 来访问这个类名，不能通过 styles.userName 来访问
  即 CSS Modules 并不会进行样式类名的转换

  因此如果使用 CSS Modules时，推荐使用类选择器定义样式，并且类选择器推荐使用小驼峰命名法
*/

const App = memo(() => {
  return (
    <>
      <div className={styles.profile}>
        <span className={styles['user-name']}>Hello</span>
        <span>World</span>
      </div>
      <p className={styles.content}>content</p>
      {/* 只是将 类名和id名 本地化了一下，该怎么用还是怎么用 */}
      <div id={styles.footer}>footer</div>
    </>
  )
})

export default App