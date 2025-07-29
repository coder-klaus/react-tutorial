import React from 'react';
// 👇 需要切换示例时，只需修改下方 import 的注释即可！

// 组件初体验
// import Child from './components/001-组件初体验/001-类组件.jsx'
// import Child from './components/001-组件初体验/002-类组件(完整写法).jsx'
// import Child from './components/001-组件初体验/003-函数组件.jsx'

// 组件生命周期
// import Child from './components/002-组件生命周期/001-常用的生命周期钩子'
// import Child from './components/002-组件生命周期/002-不常见的生命周期钩子'

// 组件通信
// import Child from './components/003-组件通信/001-父子通信(基础款)'
// import Child from './components/003-组件通信/002-父子通信(prop-types款)'

// 模拟插槽
// import Child from './components/004-模拟插槽/001-插槽(类Vue插槽形式)'
// import Child from './components/004-模拟插槽/002-插槽(以props形式)'
// import Child from './components/004-模拟插槽/003-Children/001-为什么要Children'
// import Child from './components/004-模拟插槽/003-Children/002-React-Children'
// import Child from './components/004-模拟插槽/004-作用域插槽'

// Context
// import Child from './components/005-Context/001-Context的基本使用'
// import Child from './components/005-Context/002-Context的嵌套调用'
// import Child from './components/005-Context/003-Context的默认值'

// 事件总线
import Child from './components/006-事件总线'

const App = () => {
  return (
    <div>
      {/* 单标签必须严格闭合 */}
      <Child />
    </div>
  );
};

export default App;

