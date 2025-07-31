import { PureComponent } from 'react';

/**
 * 这个组件演示了如何在类组件中统一处理单选和多选的 checkbox 📝
 */
class CheckboxDemo extends PureComponent {
  state = {
    // 文本输入框
    username: '',
    // 单选 checkbox
    isAgree: false,
    // 多选 checkbox
    hobbies: []
  };

  hobbyOptions = [
    { label: '足球', value: 'football' },
    { label: '篮球', value: 'basketball' },
    { label: '羽毛球', value: 'badminton' }
  ]

  /**
   * 统一处理文本输入框和 checkbox 的变化事件
   * 根据不同类型的表单项，自动更新对应的 state
   */
  handleInputChange = (event) => {
    const { name, checked, type, value } = event.target;

    this.setState({
      // checkbox的选中状态由checked属性控制，而非value
      [name]: type === 'checkbox' ? checked : value
    });
  };

  // 处理多选 checkbox 的变化
  handleHobbyChange = (event) => {
    const { value, checked } = event.target;
    const { hobbies } = this.state;

    if (checked) {
      // 选中时添加到数组
      this.setState({
        hobbies: [...hobbies, value]
      });
    } else {
      // 取消选中时从数组移除
      this.setState({
        hobbies: hobbies.filter(hobby => hobby !== value)
      });
    }
  };

  render() {
    const { username, isAgree, hobbies } = this.state;

    return (
      <div>
        <label htmlFor="username">
          用户名: <input type="text" id="username" name="username" onChange={this.handleInputChange} />
        </label>
        <p>用户名：{username}</p>

        <hr />

        <h2>单选 Checkbox 示例（同意协议）☑️</h2>
        <label htmlFor="agree">
          <input
            type="checkbox"
            id="agree"
            // name 用于更新 state 所以需要和 state 中对应的 key 保持一致
            name="isAgree"
            checked={isAgree}
            onChange={this.handleInputChange}
          />
          我已阅读并同意协议
        </label>
        <p>当前状态：{isAgree ? '已同意 👍' : '未同意 ❌'}</p>

        <hr />

        <h2>多选 Checkbox 示例（兴趣爱好）🎯</h2>
        {this.hobbyOptions.map(hobby => (
          <label key={hobby.value} style={{ marginRight: 12 }}>
            <input
              type="checkbox"
              value={hobby.value}
              checked={hobbies.includes(hobby.value)}
              onChange={this.handleHobbyChange}
            />
            {hobby.label}
          </label>
        ))}
        <p>已选择的爱好：{hobbies.length > 0 ? hobbies.join('、') : '暂无 😅'}</p>
      </div>
    );
  }
}

export default CheckboxDemo;
