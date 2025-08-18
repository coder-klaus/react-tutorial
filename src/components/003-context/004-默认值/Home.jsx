import { memo } from 'react'
import ThemeContext from './context/ThemeContext'

const Home = memo(() => {
  return (
    <ThemeContext.Consumer>
      {
        themeCtx => {
          return (
            <div>
              <div>Home</div>
              { JSON.stringify(themeCtx, null, 2) }
            </div>
          )
        }
      }
    </ThemeContext.Consumer>
  )
})

export default Home