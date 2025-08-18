import React from 'react';

// 1. 创建Context对象
//  + 命名使用 大驼峰
//  + 以 Context 结尾
//  + 上下文对象一般都放在 src/context 目录下统一管理
const ThemeContext = React.createContext();

export default ThemeContext;