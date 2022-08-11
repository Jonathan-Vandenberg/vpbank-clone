import { configureStore } from '@reduxjs/toolkit'
import cardIdReducer from '../slices/cardIdSlice'
import compareCardsReducer from '../slices/compareDrawerSlice'

const store = configureStore({
  reducer: {
    cardId: cardIdReducer,
    changeDrawerState: compareCardsReducer,
  }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store