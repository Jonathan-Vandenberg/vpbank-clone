import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store/store'

// Define a type for the slice state
interface showDropdownState {
  toggleDropdown: boolean
}

// Define the initial state using that type
const showDropdownState: showDropdownState = {
  toggleDropdown: false,
}

export const showDropdownSlice = createSlice({
  name: 'showDropdown',
  initialState: {
    value: false,
  },
  reducers: {
    hide: (state, action: PayloadAction<boolean>) => {
      state.value = action.payload
      console.log(action.payload)
    },
  },
})

export const { hide } = showDropdownSlice.actions
export default showDropdownSlice.reducer
// Other code such as selectors can use the imported `RootState` type
export const selectShowDropdown = (state: RootState) => state.showDropdown
