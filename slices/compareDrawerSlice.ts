import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store/store'

export const compareCardsSlice = createSlice({
  name: 'compareCards',
  initialState: {
    // Default cards being show on page load
    showDrawer: false,
  },
  reducers: {
    changeDrawerState: (state, action: PayloadAction<boolean>) => {
      state.showDrawer = action.payload
    }
  },
})

export const { changeDrawerState } = compareCardsSlice.actions
export default compareCardsSlice.reducer
// Other code such as selectors can use the imported `RootState` type
export const selectShowDrawer = (state: RootState) => state.changeDrawerState.showDrawer
