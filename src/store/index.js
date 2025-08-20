// createStore 是最原生的写法，目前推荐使用 redux官方工具包 redux toolkit「 简写为 RTK 」来简化redux的时候
import { createStore } from 'redux'
import { reducer } from './reducer'

// 1. 通过 createStore 创建 store对象
//    + 参数为reducer函数
export default createStore(reducer)