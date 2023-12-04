import { createSlice } from '@reduxjs/toolkit'

interface signInState {
    inEmail: string,
    inPwd: string,
}

const initialState: signInState = {
    inEmail: '',
    inPwd: ''
}


const signInSlice = createSlice({
  name: 'signIn',
  initialState,
  reducers: {
    increment: (state) => {
      
    }
  },
})

export const { increment } = signInSlice.actions


export default signInSlice.reducer
