import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const settingsSlice = createSlice({
  name: 'settings',
  initialState: {
    language: 'en_us'
  },
  reducers: {
    setLanguage (state, action: PayloadAction<string>) {
      state.language = action.payload
    }
  }
})

export const { setLanguage } = settingsSlice.actions
export default settingsSlice.reducer
