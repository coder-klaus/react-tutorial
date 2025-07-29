import React, { PureComponent } from 'react'
import { UserContext, ThemeContext } from '../context'

class ClassThemeUserInfoWithType extends PureComponent {
  // 类组件可以通过 contextType 指定一个上下文对象，但一次只能指定一个
  static contextType = UserContext

  render() {
    return (
      <ThemeContext.Consumer>
        {themeValue => (
          <div>
            👤 当前用户（类组件）：<span style={{ color: themeValue.color }}>{this.context.name}</span> <br />
            🎨 当前主题色：<span style={{ color: themeValue.color }}>{themeValue.color}</span>
          </div>
        )}
      </ThemeContext.Consumer>
    )
  }
}

export default ClassThemeUserInfoWithType