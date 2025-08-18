import { memo } from 'react'
import TokenContext from './context/TokenContext'
import ThemeContext from './context/ThemeContext'

const Home = memo(() => {
  return (
    <>
      <h2>Home</h2>
      {/* 消费者嵌套消费数据ß */}
      <TokenContext.Consumer>
        {
          // 为了区分，参数使用 上下文名称 + Ctx 后缀
          tokenCtx => {
            return (
              <ThemeContext.Consumer>
                {
                  themeCtx => {
                    return (
                      <div>
                        <h2>Home</h2>
                        <p>color: {themeCtx.color}</p>
                        <p>size: {themeCtx.size}</p>
                        <p>token: {tokenCtx.token}</p>
                      </div>
                    )
                  }
                }
              </ThemeContext.Consumer>
            )
          }
        }
      </TokenContext.Consumer>
    </>
  )
})

export default Home