import React, { PureComponent } from 'react'
import { UserContext, ThemeContext } from '../context'

class ClassThemeUserInfo extends PureComponent {
  render() {
    return (
      // 需要消费多个 context的时候，需要嵌套调用
      <ThemeContext.Consumer>
        {themeValue => (
          <UserContext.Consumer>
            {userValue => (
              <div>
                {/* 如果多个 context 提供了同名的状态，则后边的会覆盖之前的同名状态 */}
                👤 当前用户（类组件）：<span style={{ color: themeValue.color }}>{userValue.name}</span> <br />
                🎨 当前主题色：<span style={{ color: themeValue.color }}>{themeValue.color}</span>
              </div>
            )}
          </UserContext.Consumer>
        )}
      </ThemeContext.Consumer>
    )
  }
}

export default ClassThemeUserInfo