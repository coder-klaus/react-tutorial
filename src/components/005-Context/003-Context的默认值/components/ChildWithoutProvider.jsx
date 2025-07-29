import { memo, useContext } from 'react'
import ThemeContext from '../context/ThemeContext'

const ChildWithoutProvider = memo(() => {
  const themeCtx = useContext(ThemeContext)

  return (
    <div style={{ color: themeCtx.color }}>color: { themeCtx.color }</div>
  )
})

export default ChildWithoutProvider