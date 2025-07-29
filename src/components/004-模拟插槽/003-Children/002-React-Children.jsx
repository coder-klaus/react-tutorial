import { PureComponent, Children } from 'react'

// 添加空行，便于区分
function br(num = 1) {
  console.log('\n'.repeat(num))
}

/**
 * 简明演示 React.Children 的常用方法用法
 * - Children.count
 * - Children.toArray
 * - Children.map
 * - Children.forEach
 * - Children.only
 */
function Child(props) {
  const title = props.children ?
   props.children.length > 1 ? '示例2：只有一个子元素 🟢' : '示例3：有多个子元素 🟡'
   : '示例1：没有子元素 🚫'

  console.group(`---------------${title} 开始-------------------`)

  // 1️⃣ count => 统计子元素个数
  console.log('Children.count 统计子元素个数：', Children.count(props.children))

  br()

  // 2️⃣ toArray => 无论 props.children 对应值类型是什么，统一转数组
  const arr = Children.toArray(props.children)
  console.log('Children.toArray 结果：', arr)

  br()

  // 3️⃣ map => 功能类似于数组中的map方法
  // ⚠️
  // 1. 第二个回调中只有 item 和 index 两个参数，并不存在第三方参数 arr
  // 2. 如果没有子元素，map方法将直接返回 undefined
  const mapped = Children.map(props.children, (child, idx) => {
    return (
      <div>
        <span style={{ color: '#4caf50' }}>🌈第{idx + 1}个子元素：</span>
        {child}
      </div>
    )
  })
  console.log('Children.map 处理后的新数组：', mapped)

  br()

  // 4️⃣ forEach => 功能类似于数组中的forEach方法
  // ⚠️
  // 1. 第二个回调中只有 item 和 index 两个参数，并不存在第三方参数 arr
  // 2. 如果没有子元素，静默失效
  console.log('Children.forEach 遍历所有子元素：')
  Children.forEach(props.children, (child, idx) => {
    console.log(`第${idx + 1}个子元素:`, child)
  })

  br()

  // 5️⃣ only => 确保 props.children 有且只能有一个子元素，如果不是，直接报错
  try {
    const onlyChild = Children.only(props.children)
    console.log('Children.only 结果：', onlyChild)
  } catch (e) {
    console.error('Children.only 报错：', e.message)
  }


  console.groupEnd()
  br(3)
}

export class Cpn extends PureComponent {
  render() {
    return (
      <>
        <h2 style={{ color: '#1976d2', background: '#e3f2fd', padding: '8px 16px', borderRadius: 6 }}>
          打开控制台，查看示例结果 🚀
        </h2>

        {/* 示例1：没有子元素 🚫 */}
        <Child />

        {/* 示例2：只有一个子元素 🟢 */}
        <Child>
          <div>只有一个子元素：Hello World 🌍</div>
        </Child>

        {/* 示例3：有多个子元素 🟡 */}
        <Child>
          <div>第一个子元素：Hello World 🌍</div>
          <div>第二个子元素：Hello React ⚛️</div>
        </Child>
      </>
    )
  }
}

export default Cpn