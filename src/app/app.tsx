import React from 'react'
import { Provider } from 'react-redux'
import { Route, Routes } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import QuizzerError from './error'
import QuizzerRouteError from './pages/error'
import QuizzerHome from './pages/home'
import QuizzerRoot from './pages/root'
import QuizzerSelect from './pages/select'
import QuizzerSetSelect from './pages/setselect'
import { store } from './state'

const ON_GITHUB = window.location.host.endsWith('.github.io')

export default function QuizzerApp (): React.ReactElement {
  return (
      <QuizzerError>
        <Provider store={store}>
          <React.StrictMode>
            <BrowserRouter basename={ON_GITHUB ? '/quizzer' : undefined}>
              <Routes>
                <Route path='/' element={ <QuizzerRoot /> } errorElement={ <QuizzerRouteError /> }>
                  <Route index element={ <QuizzerHome/> } />
                  <Route path='/select' element={ <QuizzerSelect /> } >
                    <Route index element={ <QuizzerSetSelect /> } />
                    { /* <Route path=':set' element={ <QuizzerSet /> } /> */ }
                  </Route>
                  <Route path='*' element={ <QuizzerRouteError status={404} statusText='Not Found' /> } />
                </Route>
              </Routes>
            </BrowserRouter>
          </React.StrictMode>
        </Provider>
      </QuizzerError>
  )
}
