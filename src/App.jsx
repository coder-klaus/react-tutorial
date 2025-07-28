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
import Child from './components/003-组件通信/001-父子通信(基础款)'

const App = () => {
  return (
    <div>
      {/* 单标签必须严格闭合 */}
      <Child />
    </div>
  );
};

export default App;

