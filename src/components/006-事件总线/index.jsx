import { useEffect, useState } from 'react';
import emitter from './eventBus';
import Counter from './components/Counter';

const Index = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const handler = ({ step }) => setCount(count => count + step);

    emitter.on('add', handler);

    return () => {
      emitter.off('add', handler);
    };
  }, []);

  return (
    <div>
      <h2>计数器：{count}</h2>
      <Counter />
    </div>
  );
};

export default Index;
