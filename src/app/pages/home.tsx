import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../state'
import { Link } from 'react-router-dom'

export default function QuizzerHome (): React.ReactElement {
  const firstOpen = useSelector((s: RootState) => s.persist.firstOpen)
  return (
    <div>
      <h1 className='bg-red-900 text-white'>
        quizzer - hello { firstOpen ? '' : 'again' }
      </h1>
      <h2>navigate</h2>
      <Link to='/select'>select</Link>
    </div>
  )
}
