import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../state'
import { Link } from 'react-router-dom'
import set from '../../sets/index.json'

const SET_LOCALIZATION = '__loc'

export default function QuizzerHome (): React.ReactElement {
  const firstOpen = useSelector((s: RootState) => s.persist.firstOpen)
  const sets = Object.entries(set.set)
  return (
    <div>
      <h1 className='font-bold text-xl'>
        hello { firstOpen ? '' : 'again' }
      </h1>
      <div className='px-4'>
        <h2 className='font-bold text-lg'>navigate</h2>
        {
          sets.map(([id, obj]) => (
            <p className='pl-4' key={id}>
              <Link className='hover:underline hover:underline-offset-4 text-blue-900' to={`/select/${id}`}>
                { obj[SET_LOCALIZATION].en_us }
              </Link>
            </p>
          ))
        }
      </div>
    </div>
  )
}
