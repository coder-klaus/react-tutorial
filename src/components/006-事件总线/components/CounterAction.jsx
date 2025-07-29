import React from 'react';
import emitter from '../eventBus';

const CounterAction = () => {
  // 可以依次传递参数 如 emitter.emit('change', arg1, arg2)
  // 也可以将这些参数整合到一个对象中统一管理，也便于后期维护，这个参数一般被称之为payload
  const changeCount = step => emitter.emit('add', { step });

  return (
    <>
      <button onClick={() => changeCount(5)}>加5</button>
      <button onClick={() => changeCount(-5)}>减5</button>
    </>
  );
};

export default CounterAction;