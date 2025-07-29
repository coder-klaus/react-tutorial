import React from 'react'
import ThemeContext from './context/ThemeContext'
import UserContext from './context/UserContext'
import ClassThemeUserInfo from './components/ClassThemeUserInfo'
import FunctionThemeUserInfo from './components/FunctionThemeUserInfo'
import ClassThemeUserInfoWithType from './components/ClassThemeUserInfoWithType'
import FunctionThemeUserInfoWithHook from './components/FunctionThemeUserInfoWithHook'

// 嵌套 Context.Provider，演示嵌套 context 的用法
export default function NestedContextExample() {
  return (
    // 最外层主题 Provider
    <ThemeContext.Provider value={{ color: 'green' }}>
      {/* 内层用户 Provider */}
      <UserContext.Provider value={{ name: '小明' }}>
        <h2>🌈 Context 的嵌套调用示例</h2>
        {/* 函数组件：同时使用主题和用户 context */}
        <FunctionThemeUserInfo />
        {/* 类组件：同时使用主题和用户 context */}
        <ClassThemeUserInfo />
        <hr />
        {/* 函数组件（useContext Hook）：同时使用主题和用户 context */}
        <FunctionThemeUserInfoWithHook />
        {/* 类组件（contextType）：同时使用主题和用户 context */}
        <ClassThemeUserInfoWithType />
      </UserContext.Provider>
    </ThemeContext.Provider>
  )
}
