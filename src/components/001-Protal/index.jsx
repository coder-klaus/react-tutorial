import { PureComponent } from 'react'
import Model from './components/Model'

export class App extends PureComponent {
  render() {
    return (
      <>
       <Model>
         <p>这些内容会挂载到 body 的最后</p>
       </Model>
       <p>这些内容会挂载到 div#root 下</p>
      </>
    )
  }
}

export default App