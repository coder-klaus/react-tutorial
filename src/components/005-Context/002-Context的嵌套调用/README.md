## 示例目录结构说明

```shell
  002-Context的嵌套调用/
  ├── README.md
  ├── index.jsx # 项目入口文件
  ├── context/
  │   ├── ThemeContext.js
  │   ├── UserContext.js
  │   └── index.js # Context的统一暴露文件
  └── components/
      ├── ClassThemeUserInfo.jsx # 通过 Consumer组件 嵌套消费 上下文
      ├── FunctionThemeUserInfo.jsx # 通过 Consumer组件 嵌套消费 上下文
      ├── ClassThemeUserInfoWithType.jsx # 一个通过 Consumer组件，另一个通过 静态属性 contextType消费上下文组件
      └── FunctionThemeUserInfoWithHook.jsx # 通过 useContext api 简化 上下文对象在函数中的使用方式
```