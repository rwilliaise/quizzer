
import React from 'react'
import { Outlet } from 'react-router'

export default function QuizzerSelect (): React.ReactElement {
  return (
    <div>
      <h1 className='font-bold text-2xl'>select</h1>
      <Outlet />
    </div>
  )
}
