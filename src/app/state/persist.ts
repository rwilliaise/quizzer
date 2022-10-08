import { store } from '.'
import throttle from 'lodash.throttle'
import { createSlice } from '@reduxjs/toolkit'

const persistState = createSlice({
  name: 'persist',
  initialState: {
    firstOpen: true
  },
  reducers: {
    save (state) {
      state.firstOpen = false
    }
  }
})

export const { save } = persistState.actions
export default persistState.reducer

export const STORAGE_KEY = '__redux_state'

export function saveState (): void {
  store.dispatch(save())

  const currState = store.getState()
  const str = JSON.stringify(currState)

  localStorage.setItem(STORAGE_KEY, str)
}

export function loadState (): object | undefined {
  const stored = localStorage.getItem(STORAGE_KEY)

  if (stored !== null) {
    console.log(stored)
    return JSON.parse(stored)
  } else {
    return undefined
  }
}

export function bind (): void {
  store.subscribe(throttle(saveState, 1000))
}

window.onunload = () => saveState()
