import { createBrowserRouter } from 'react-router-dom'
import ErrorPage from './pages/error'
import QuizzerHome from './pages/main'
import React from 'react'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <QuizzerHome />,
    errorElement: <ErrorPage />
  }
])
