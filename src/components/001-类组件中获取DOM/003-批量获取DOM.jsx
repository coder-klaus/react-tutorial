import { PureComponent } from 'react'

export class App extends PureComponent {
  divRefs = []

  // 因为函数类型ref对应的函数可以自己实现
  // 因此函数类型ref可以用于批量获取DOM元素
  setDivRef = (el, index) => {
    this.divRefs[index] = el
  }

  handleClick = () => {
    console.log('批量获取到的 DOM 元素如下：', this.divRefs)
  }

  render() {
    return (
      <div>
        <h3>批量获取 DOM 元素示例 🚀</h3>
        {[1, 2, 3, 4, 5].map((item, index) => (
          <div
            key={index}
            ref={el => this.setDivRef(el, index)}
            style={{
              margin: '8px 0',
              padding: '8px',
              border: '1px solid #ccc'
            }}
          >
            第 {item} 个 DOM 元素
          </div>
        ))}
        <button onClick={this.handleClick}>批量获取DOM元素 😎</button>
      </div>
    )
  }
}

export default App
