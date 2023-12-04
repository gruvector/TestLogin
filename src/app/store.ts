import { configureStore } from '@reduxjs/toolkit'
import selectSlice from './reducers/selectSlice'


const store = configureStore({
  reducer: {
    select:  selectSlice,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
export default store;