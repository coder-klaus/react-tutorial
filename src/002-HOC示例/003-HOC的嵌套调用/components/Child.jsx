import { memo } from 'react'
import { withContext, withRenderTime } from '../hoc'

const Child = memo(props => <div>theme: {props.theme}</div>)

// 为了方便 withRenderTime 获取实际是在检测那个组件的渲染时间，也为了方便 DevTools 的调试
Child.displayName = 'Child'

export default withRenderTime(withContext(Child))