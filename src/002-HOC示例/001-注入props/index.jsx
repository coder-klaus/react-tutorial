import { PureComponent } from 'react'
import ClassCpn from './components/ClassCpn'
import FunCpn from './components/FunCpn'

export class App extends PureComponent {
  render() {
    return (
      <>
        <ClassCpn type="class" />
        <hr />
        <FunCpn type="function" />
      </>
    )
  }
}

export default App