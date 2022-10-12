import React from 'react'
import { Provider } from 'react-redux'
import { createRoutesFromElements, Route, RouterProvider } from 'react-router'
import { createBrowserRouter } from 'react-router-dom'
import QuizzerError from './error'
import QuizzerRouteError from './pages/error'
import QuizzerHome from './pages/home'
import QuizzerRoot from './pages/root'
import QuizzerSelect from './pages/select'
import { QuizzerSet } from './pages/set'
import { store } from './state'

const ON_GITHUB = window.location.host.endsWith('.github.io')

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={ <QuizzerRoot /> } errorElement={ <QuizzerRouteError /> }>
      <Route index element={ <QuizzerHome/> } />
      <Route path='/select' element={ <QuizzerSelect /> } >
        <Route
          path=':category'
          element={ <QuizzerSet /> }
          loader={({ params }) => {
            const category = params.category
            if (category === undefined) {
              /* eslint-disable-next-line @typescript-eslint/no-throw-literal */
              throw new Response('Not Found', { status: 404 })
            }
            return { category }
          }}
        />
      </Route>
      <Route path='*' element={ <QuizzerRouteError status={404} statusText='Not Found' /> } />
    </Route>
  ),
  { basename: ON_GITHUB ? '/quizzer' : '/' }
)

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
