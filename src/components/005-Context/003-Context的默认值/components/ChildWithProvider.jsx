import { memo, useContext } from 'react'
import ThemeContext from '../context/ThemeContext'

const ChildWithProvider = memo(() => {
  const themeCtx = useContext(ThemeContext)

  return (
    <div>color: { themeCtx?.color ? themeCtx.color : String(themeCtx) }</div>
  )
})

export default ChildWithProvider