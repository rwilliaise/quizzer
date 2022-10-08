import { configureStore } from '@reduxjs/toolkit'
import persist, { bind, loadState } from './persist'
import recents from './recents'
import settings from './settings'

export const store = configureStore({
  reducer: {
    persist,
    recents,
    settings
  },
  preloadedState: loadState()
})

export type RootState = ReturnType<typeof store.getState>

bind()
