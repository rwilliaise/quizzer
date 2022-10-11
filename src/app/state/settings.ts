import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export const locales = [
  'en_us',
  'ja_jp'
]

console.log(navigator.language)

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
