import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { RootState } from '../state'

export default function QuizzerHome (): React.ReactElement {
  const firstOpen = useSelector((s: RootState) => s.persist.firstOpen)
  const recentQuizzes = useSelector((s: RootState) => s.recents.recentQuiz)
  return (
    <div>
      <h1>
        quizzer - hello { firstOpen ? '' : 'again' }
      </h1>
      <h2>navigate</h2>
      <Link to='/select'>select quiz</Link>
      <h2>recent quizzes</h2>
      <div>
        <ul>
          {
            recentQuizzes.length > 0
              ? recentQuizzes.map((quiz) => (
                <li key={quiz}>
                  <Link to={`/quiz/${quiz}`}>{quiz}</Link>
                </li>
              ))
              : <li><p>no quizzes done recently :(</p></li>
          }
        </ul>
      </div>
    </div>
  )
}
