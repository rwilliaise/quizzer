
import React from 'react'

interface QuizzerErrorState {
  error: Error | null
  errorInfo: React.ErrorInfo | null
}

export default class QuizzerError extends React.Component<React.PropsWithChildren, QuizzerErrorState> {
  constructor (props: React.PropsWithChildren) {
    super(props)
    this.state = { error: null, errorInfo: null }
  }

  override componentDidCatch (error: Error, errorInfo: React.ErrorInfo): void {
    this.setState({
      error,
      errorInfo
    })
  }

  render (): React.ReactNode {
    if (this.state.error !== null) {
      return (
        <>
          <p>quizzer encountered an error.</p>
          <p style={{ whiteSpace: 'pre-wrap' }}>
            <code>{this.state.errorInfo?.componentStack}</code>
          </p>
        </>

      )
    }
    return this.props.children
  }
}
