import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { delay } from '../../utils/delay'

export const incrementAsyncAction = createAsyncThunk('counter/incrementAsync', async ({ step = 1 }, { dispatch }) => {
  await delay(1000)
  dispatch(incrementAction({ step }))
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
})

export default counterSlice.reducer
export const { incrementAction, decrementAction } = counterSlice.actions