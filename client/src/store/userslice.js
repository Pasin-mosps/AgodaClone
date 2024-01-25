import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: "Moss pasin",
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state) => {
      state.login = "moss login"
    },
    logout: (state) => {
      state.value = "moss logout"
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { login, logout, incrementByAmount } = userSlice.actions

export default userSlice.reducer