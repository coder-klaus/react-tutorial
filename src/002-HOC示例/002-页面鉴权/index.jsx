import { PureComponent } from 'react'
import Cart from './components/Cart'
import { getRandomToken } from './utils/getRandomToken'

export class App extends PureComponent {
  state = {
    isLogin: false
  }

  toggleLogin = () => {
    const hasToken = !!localStorage.getItem('x-token')

    if (!hasToken) {
      // 随机生成一个简单的jwt字符串并存储到localStorage中
      const randomJwt = getRandomToken()
      localStorage.setItem('x-token', randomJwt)
    } else {
      localStorage.removeItem('x-token')
    }

    this.setState({
      isLogin: !hasToken
    })
  }

  render() {
    return (
      <>
        <button onClick={() => this.toggleLogin()}>
          {this.state.isLogin ? '退出登录' : '登录'}
        </button>
        <Cart />
      </>
    )
  }
}

export default App