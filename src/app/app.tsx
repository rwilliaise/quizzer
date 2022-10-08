import React from 'react'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router'
import QuizzerError from './error'
import { router } from './router'
import { store } from './state'

export default function QuizzerApp (): React.ReactElement {
  return (
      <QuizzerError>
        <Provider store={store}>
          <React.StrictMode>
            <RouterProvider router={router} />
          </React.StrictMode>
        </Provider>
      </QuizzerError>
  )
}
