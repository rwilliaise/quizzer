import React from 'react'
import { Outlet } from 'react-router'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootState } from '../state'
import GitHub from '@mui/icons-material/GitHub'

const GOOFY_SAYINGS = [
  'to quiz, or not to quiz',
  'it\'s quizzing time',
  'study, quiz, study again, quiz again',
  'study corp will remember you',
  'Error: motto not found :(',
  'quizzer? more like... i forgot, sorry',
  'oh i remember you!',
  'not made with love',
  'predicted quiz score: 2',
  'quiz',
  '^W^\\^N^[^['
]

GOOFY_SAYINGS.push(
  `${GOOFY_SAYINGS.length + 1} mottos`
)

function SaveSizeText (): React.ReactElement {
  const store = useSelector((s: RootState) => s)
  const save = JSON.stringify(store)

  return <p className='text-sm font-light'>save size: {save.length} bytes</p>
}

export default function QuizzerRoot (): React.ReactElement {
  const random = GOOFY_SAYINGS[Math.floor(Math.random() * GOOFY_SAYINGS.length)]

  return (
    <div className='lg:mx-auto lg:max-w-6xl'>
      <div className='sticky top-4 z-20'>
        <div className='relative z-20 flex h-16 w-full items-center justify-between'>
          <div className='text-center flex flex-col h-full items-center'>
            <Link to='/'>
              <span className='m-auto text-2xl font-bold font-serif'>quizzer</span>
              <p className='text-gray text-sm font-light'>{ random }</p>
            </Link>
          </div>
          <div className='flex items-center flex-col'>
            <GitHub />
            <SaveSizeText />
          </div>
        </div>
      </div>
      <div className='pt-8 px-4'>
        <Outlet />
      </div>
    </div>
  )
}
