import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { delay } from '../../utils/delay'

// createAsyncThunk 创建一个异步action
// 参数一 => 异步action的名称 => 为了和RTK默认生成的action名称保持一致，推荐使用 <模块名>/<事件名称> 的形式进行命名
// 参数二 => 异步action的回调函数
//    回调函数的参数如下:
//     + 第一个参数 => 调用异步action时传入的参数
//     + 第二个参数 => 配置对象
//         + dispatch => 获取 dispatch 方法
//         + getState => 获取 store 中的 state
export const incrementAsyncAction = createAsyncThunk('counter/incrementAsync', async ({ step = 1 }, { dispatch }) => {
  await delay(1000)
  // 异步结束, 调用同步action
  dispatch(incrementAction({ step }))
})

export const decrementAsyncAction = createAsyncThunk('counter/decrementAsync',  async (...args) => {
  await delay(1000)
  // 返回值 就是 decrementAsyncAction.fulfilled 对应 action.payload 值
  return args
})

const counterSlice = createSlice({
  name: 'counter',
  initialState: { count: 0 },
  reducers: {
    incrementAction: (state, action) => {
      state.count += action.payload?.step ?? 1
    },
    decrementAction: (state, action) => {
      state.count -= action.payload?.step ?? 1
    },
  },
  // 之前存在 类似于 [caseName]: (state, action) => {} 的形式 => 已经被废弃
  // 替代的是 => builder.addCase(actionName, (state, action) => {})
  extraReducers(builder) {
    /*
      异步action存在三个状态
      + pending => 异步执行中
      + fulfilled => 异步执行成功
      + rejected => 异步执行失败
      每个状态对应的action回调函数中，都会自动传入两个参数
      + state => 当前的state对象
         + 是通过 immer.js 库创建的对象，所以可以直接修改 state 对象的值
         + immer.js 底层会自动生成当前状态的快照副本，并修改对应状态的值
      + action => 异步action的返回值
        + 如果是 pending 状态，则 action 中不存在 payload 属性
        + 如果是 rejected 状态，则 action 中还包含 error => 记录着错误信息
    */
    builder
      // action.type => counter/decrementAsync/pending
      .addCase(decrementAsyncAction.pending, () => {
        console.log('decrementAsyncAction.pending')
      })
      // action.type => counter/decrementAsync/fulfilled
      .addCase(decrementAsyncAction.fulfilled, (state, action) => {
        console.log('decrementAsyncAction.fulfilled')
        console.log(action)
        state.count -= action.payload.step
      })
      // action.type => counter/decrementAsync/rejected
      .addCase(decrementAsyncAction.rejected, () => {
        console.log('decrementAsyncAction.rejected')
      })
  }
})

export default counterSlice.reducer
export const { incrementAction, decrementAction } = counterSlice.actions