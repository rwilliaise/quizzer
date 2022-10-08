import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const recentsSlice = createSlice({
  name: 'recents',
  initialState: {
    recentQuiz: [] as string[]
  },
  reducers: {
    addQuiz (state, action: PayloadAction<string>) {
      state.recentQuiz.push(action.payload)
      if (state.recentQuiz.length > 5) {
        state.recentQuiz.shift()
      }
    }
  }
})

export const { addQuiz } = recentsSlice.actions
export default recentsSlice.reducer
