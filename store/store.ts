import { configureStore } from '@reduxjs/toolkit'
import cityReducer from '../slices/citySlice'
import showDropdownReducer from '../slices/showDropdownSlice'

const store = configureStore({
  reducer: {
    city: cityReducer,
    showDropdown: showDropdownReducer,
  }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store