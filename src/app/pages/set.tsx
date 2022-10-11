import React from 'react'
import { Link } from 'react-router-dom'

interface QuizzerSetProps {
  set: string
}

export default function QuizzerSet ({ set }: QuizzerSetProps): React.ReactElement {
  return (
    <>
      <Link to={`/flash/${set}`} >flashcards</Link>
      <Link to={`/quiz/${set}`} >quiz</Link>
    </>
  )
}
