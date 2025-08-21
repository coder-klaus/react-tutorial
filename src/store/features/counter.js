import { createSlice } from '@reduxjs/toolkit'

// 通过 createSlice 创建一个 slice 对象
// 本质就是 传统 redux 一个模块需要 consts、actionCreators、reducer 三个文件，而 slice 可以将他们整合为一个文件
const counterSlice = createSlice({
  // 唯一标识符
  // 1. 在 DevTool 中方便调试
  // 2. name 和 reducers 中事件会整合为对应action type 「 例如：counter/increment 」
  name: 'counter',
  // 初始化状态
  initialState: { count: 0 },
  // 事件处理函数
  // 1. 每一个 函数，相等于之前reducer的每一个case语句被匹配后需要执行的函数
  // 2. 每一个函数，第一个参数为 state，第二个参数为 action
  reducers: {
    // 事件处理函数，参数为 state 和 action
    incrementAction: (state, action) => {
      // RTK 底层使用了 immer.js 库，所以可以直接修改 state
      state.count += action.payload?.step ?? 1
    },
    decrementAction: (state, action) => {
      state.count -= action.payload?.step ?? 1
    },
  },
})

// slice 是一个有 actions 和 reducer 组成的对象，需要分别导出以供使用
export default counterSlice.reducer
export const { incrementAction, decrementAction } = counterSlice.actions