import React from 'react';
// 👇 需要切换示例时，只需修改下方 import 的注释即可！
// import Child from './components/001-类组件'
import Child from './components/002-类组件(完整写法)'
// import Child from './components/003-函数组件'

const App = () => {
  return (
    <div>
      {/* 单标签必须严格闭合 */}
      <Child />
    </div>
  );
};

export default App;

