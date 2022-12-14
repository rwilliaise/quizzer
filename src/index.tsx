
import React from 'react'
import { createRoot } from 'react-dom/client'
import QuizzerApp from './app/app'

import './styles.css'

const node = document.getElementById('app-mount')

if (node !== null) {
  const root = createRoot(node)
  root.render(<QuizzerApp/>)
}
