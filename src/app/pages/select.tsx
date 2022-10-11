
import React from 'react'
import { Outlet } from 'react-router'

export default function QuizzerSelect (): React.ReactElement {
  return (
    <div>
      <h1>select</h1>
      <Outlet />
    </div>
  )
}
