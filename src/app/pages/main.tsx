import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../state'
import Test from '../../sets/chapter_6_1/tts/atama.mp3'

console.log(Test)

export default function QuizzerHome (): React.ReactElement {
  const firstOpen = useSelector((s: RootState) => s.persist.firstOpen)
  return (
    <div>
      <h1>
        quizzer - hello { firstOpen ? '' : 'again' }
      </h1>
      <h2>navigate</h2>
    </div>
  )
}
