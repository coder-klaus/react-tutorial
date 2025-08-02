import { PureComponent } from 'react'

// 如果使用的是 Fragment的简写写法，React在编译组件时会自动插入 Fragment 的导入
// 所以如果使用短语法，无需显示导入 Fragment，但如果不是短语法，则必须显示导入

// 同样的，因为短语法依赖于 编译工具的编译「 如 @vitejs/plugin-react  」，
// 所以如果通过cdn引入react，则需要显示导入 Fragment，不能直接使用短语法

// import { Fragment } from 'react'

export class App extends PureComponent {
  state = {
    books: [
      {
        id: 1,
        title: 'React 学习手册',
        author: '张三'
      },
      {
        id: 2,
        title: 'JavaScript 基础',
        author: '李四'
      },
      {
        id: 3,
        title: 'Vue.js 入门',
        author: '王五'
      }
    ]
  }

  render() {
    return (
      // 外层 JSX元素 需要有且只有一个根元素
      <>
        <h2>书籍列表</h2>
        <ul>
          {
            this.state.books.map(book => (
              // 内部的 JSX元素 也要求有且只有一个根元素
              // JSX语法规则适用于每个JSX代码片段
              <li key={book.id}>
                <h3>{book.title}</h3>
                <p>{book.author}</p>
              </li>
            ))
          }
        </ul>
      </>
    )
  }
}

export default App