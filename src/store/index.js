import { configureStore, createSlice } from '@reduxjs/toolkit'

//this is where logic of application goes 
//create sort of an object with operations
const counterSlice = createSlice({
  name: 'counter',
  initialState: { counter: 0},
  reducers: {
    increment(state, action) {
      state.counter++
    },
    decrement(state, action) {
      state.counter --
    },
    addBy(state, action) {
      state.counter += action.payload
    }
  }
})

export const actions = counterSlice.actions
const store = configureStore({
  reducer: counterSlice.reducer
})

export default store