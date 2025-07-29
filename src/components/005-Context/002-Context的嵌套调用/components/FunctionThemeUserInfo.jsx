import React from 'react'
import { ThemeContext, UserContext } from '../context'

function FunctionThemeUserInfo() {
  return (
    // 函数组件使用多个上下文对象时，也是通过嵌套调用的方式来使用
    <ThemeContext.Consumer>
      {themeValue => (
        <UserContext.Consumer>
          {userValue => (
            <div>
              👤 当前用户（函数组件）：<span style={{ color: themeValue.color }}>{userValue.name}</span> <br />
              🎨 当前主题色（函数组件）：<span style={{ color: themeValue.color }}>{themeValue.color}</span>
            </div>
          )}
        </UserContext.Consumer>
      )}
    </ThemeContext.Consumer>
  )
}

export default FunctionThemeUserInfo