import React, { PureComponent } from 'react'
// 导入样式组件
import AppWrapper from './style.js'

export class App extends PureComponent {
  render() {
    return (
      <AppWrapper>
				<h2 className="title">title</h2>
				<p className="content">content</p>
			</AppWrapper>
    )
  }
}

export default App