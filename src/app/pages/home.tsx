import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../state'
import { Link } from 'react-router-dom'

export default function QuizzerHome (): React.ReactElement {
  const firstOpen = useSelector((s: RootState) => s.persist.firstOpen)
  return (
    <div>
      <h1 className='font-bold text-xl'>
        hello { firstOpen ? '' : 'again' }
      </h1>
      <div className='px-4'>
        <h2 className='font-bold text-lg'>navigate</h2>
        <Link to='/select'>select</Link>
      </div>
    </div>
  )
}
