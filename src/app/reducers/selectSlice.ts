import { createSlice } from '@reduxjs/toolkit'
// import type { RootState } from '../../app/store'

interface SelectState {
    value: number
  }
  
  // Define the initial state using that type
const initialState = {
    value: 0,
} as SelectState;

export const selectSlice = createSlice({
    name: 'select',
    initialState,
    reducers: {
        increment: (state) => {
            state.value === 1 ? state.value-- : state.value++;
        }
    },
    })

export const { increment } = selectSlice.actions

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched

export default selectSlice.reducer
