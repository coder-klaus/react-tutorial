import { memo } from 'react'
import { AppWrapper } from './style'

const App = memo(() => {
  return (
    <AppWrapper>
      <section className="section">
        <h1 className="title">我是标题</h1>
        <p className="content">我是内容</p>
      </section>
      <div className="footer">版权声明</div>
    </AppWrapper>
  )
})

export default App