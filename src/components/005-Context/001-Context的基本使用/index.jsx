import { PureComponent } from 'react'
import ThemeContext from './context/ThemeContext'
import ClassContextConsumer from './components/ClassContextConsumer'
import ClassContextType from './components/ClassContextType'
import FunctionContextConsumer from './components/FunctionContextConsumer'

export class ContextDemoApp extends PureComponent {
  render() {
    return (
      <>
        {/*
          1. ThemeContext 是一个上下文对象，所以以 Context 作为命名后缀，以便区分
          2. ThemeContext 作为上下文对象，提供两个组件
             + Provider组件 => 共享数据的生产者
               + 通过 value属性提供共享数据
               + 共享数据一般为对象类型，以便于同时提供多个共享数据
             + Consumer组件 => 共享数据的消费者
        */}
        <ThemeContext.Provider value={{ color: 'red' }}>
          <ClassContextConsumer />
          <hr />
          <ClassContextType />
          <hr />
          <FunctionContextConsumer />
        </ThemeContext.Provider>
      </>
    )
  }
}

export default ContextDemoApp