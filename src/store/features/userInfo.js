import { createSlice } from '@reduxjs/toolkit'

const userInfoSlice = createSlice({
  name: 'userInfo',
  initialState: { name: '', age: 0 },
  reducers: {
    setUserInfoAction: (state, action) => {
      state.name = action.payload.name
      state.age = action.payload.age
    },
    setUserInfoNameAction: (state, action) => {
      state.name = action.payload
    },
    setUserInfoAgeAction: (state, action) => {
      state.age = action.payload
    },
  },
})

export default userInfoSlice.reducer
export const { setUserInfoAction, setUserInfoNameAction, setUserInfoAgeAction } = userInfoSlice.actions