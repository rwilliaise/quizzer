import React from 'react'
import { Provider } from 'react-redux'
import { Route, Routes } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import QuizzerError from './error'
import QuizzerHome from './pages/main'
import { store } from './state'

const ON_GITHUB = window.location.host.endsWith('.github.io')

export default function QuizzerApp (): React.ReactElement {
  return (
      <QuizzerError>
        <Provider store={store}>
          <React.StrictMode>
            <BrowserRouter basename={ON_GITHUB ? '/quizzer' : undefined}>
              <Routes>
                <Route path='/' errorElement={ <QuizzerError /> } element={ <QuizzerHome/> }>
                </Route>
              </Routes>
            </BrowserRouter>
          </React.StrictMode>
        </Provider>
      </QuizzerError>
  )
}
