import { createSlice, PayloadAction, TaskAbortError } from '@reduxjs/toolkit'
import type { RootState } from '../store/store'

interface CardIdState {
  cardId: string[] | undefined
}

export const cardIdSlice = createSlice({
  name: 'cardId',
  initialState: {
    // Default cards being show on page load
    cardId: [ "cl6yuqjs60041vo0giip2zhp5", "cl6yv8jlh0058vo0ghvqeu1hy", "cl6yvf2z80075vo0g4y9gu1k0"],
  },
  reducers: {
    addCard: (state: CardIdState, action: PayloadAction<string>) => {
      state.cardId?.includes(action.payload) ? null : state.cardId?.push(action.payload)
    },
    removeCard: (state, action: PayloadAction<string>) => {
      state.cardId = state.cardId.filter(card => card !== action.payload)
    }
  },
})

export const { addCard, removeCard } = cardIdSlice.actions
export default cardIdSlice.reducer
// Other code such as selectors can use the imported `RootState` type
export const selectCardId = (state: RootState) => state.cardId.cardId
