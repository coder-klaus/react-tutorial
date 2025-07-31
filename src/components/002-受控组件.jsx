import { PureComponent } from 'react';

class App extends PureComponent {
  state = {
    username: 'Klaus'
  }

  handleChange = (event) => {
    this.setState({ username: event.target.value });
    console.log(this.state.username);
  };

  render() {
    return (
      <>
        {/* 只有 value 但没有 onChange 时，该组件是受控组件，但是是只读受控组件 */}
        <input type="text" value={this.state.username} />
        {/* 可读可写的受控组件 */}
        <input type="text" value={this.state.username} onChange={this.handleChange} />
        <h1>{this.state.username}</h1>
      </>
    );
  }
}

export default App