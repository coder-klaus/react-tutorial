import { memo } from 'react'
import ThemeContext from './context/ThemeContext'

const Profile = memo(() => {
  return (
    <ThemeContext.Consumer>
      {
        themeCtx => {
          return (
            <div>
              <h2>Profile</h2>
              { JSON.stringify(themeCtx, null, 2) }
            </div>
          )
        }
      }
    </ThemeContext.Consumer>
  )
})

export default Profile