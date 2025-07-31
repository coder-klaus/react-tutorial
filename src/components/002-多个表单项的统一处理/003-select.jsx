import { PureComponent } from 'react'

/**
 * 本示例演示了 select 的单选和多选用法 🎉
 */
export class App extends PureComponent {
  state = {
    // 单选时 value 为字符串，多选时 value 为数组
    city: '', // 单选
    fruits: [] // 多选
  }

  handleChange = (event) => {
    const { name, value, multiple, selectedOptions } = event.target

    // 对于 select 元素，存在如下两个 伪数组属性, 它们的类型都是 HTMLCollection
    // 1. selectedOptions：所有已选 option 的集合
    // 2. options：所有 option 的集合
    //    + 存在属性selectedIndex 表示当前选中项的索引
    //      - 单选时，selectedIndex 为选中项的索引
    //      - 多选时，selectedIndex 为第一个被选中 option 的索引
    console.log(event.target.selectedOptions)
    console.log(event.target.options)

    if (multiple) {
      // 多选
      // Array.from 的第二个参数 就是 map方法
      const values = Array.from(selectedOptions, option => option.value)
      this.setState({ [name]: values })
    } else {
      // 单选
      this.setState({ [name]: value })
    }
  }

  render() {
    const { city, fruits } = this.state
    return (
      <div>
        <h2>select 单选示例 🏙️</h2>
        {/* select 的 value 属性等于选中 option 的 value 值 */}
        <select
          name="city"
          value={city}
          onChange={this.handleChange}
        >
          <option value="">请选择城市</option>
          <option value="beijing">北京</option>
          <option value="shanghai">上海</option>
          <option value="guangzhou">广州</option>
        </select>
        <p>当前选择城市：{city ? city : '未选择 😅'}</p>

        <hr />

        <h2>select 多选示例 🍎🍌🍇</h2>
        <select
          name="fruits"
          multiple
          value={fruits}
          onChange={this.handleChange}
          style={{ width: 200, height: 100 }}
        >
          <option value="apple">苹果</option>
          <option value="banana">香蕉</option>
          <option value="grape">葡萄</option>
          <option value="orange">橙子</option>
        </select>
        <p>
          已选择水果：
          {fruits.length > 0 ? fruits.join('、') : '暂无选择 🍃'}
        </p>
      </div>
    )
  }
}

export default App