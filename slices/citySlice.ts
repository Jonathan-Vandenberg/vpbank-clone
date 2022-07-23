import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store/store'

export const citySlice = createSlice({
  name: 'city',
  initialState: {
    value: 'Hanoi',
  },
  reducers: {
    cityValue: (state, action: PayloadAction<string>) => {
      state.value = action.payload
      console.log(action.payload)
    },
  },
})

export const { cityValue } = citySlice.actions
export default citySlice.reducer
// Other code such as selectors can use the imported `RootState` type
export const selectCity = (state: RootState) => state.city.value
