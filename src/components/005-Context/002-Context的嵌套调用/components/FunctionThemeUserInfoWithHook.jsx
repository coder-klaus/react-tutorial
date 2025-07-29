import React, { useContext } from 'react'
import { ThemeContext, UserContext } from '../context'

function FunctionThemeUserInfoWithHook() {
  // useContext 是使用上下文对象的 hook api，避免了之前的嵌套调用，简化了上下文对象的使用
  const themeValue = useContext(ThemeContext)
  const userValue = useContext(UserContext)

  return (
    <div>
      👤 当前用户（函数组件）：<span style={{ color: themeValue.color }}>{userValue.name}</span> <br />
      🎨 当前主题色（函数组件）：<span style={{ color: themeValue.color }}>{themeValue.color}</span>
    </div>
  )
}

export default FunctionThemeUserInfoWithHook