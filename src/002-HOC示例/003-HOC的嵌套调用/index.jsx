import { PureComponent } from 'react'
import Child from './components/Child'
import { ThemeContext } from './context/ThemeContext'

export class App extends PureComponent {
  render() {
    return (
      <ThemeContext.Provider value={{ theme: 'light' }}>
        <Child />
      </ThemeContext.Provider>
    )
  }
}

export default App