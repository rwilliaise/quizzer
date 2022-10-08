import { useRouteError } from 'react-router'
import React from 'react'

export default function ErrorPage (): React.ReactElement {
  const err = useRouteError() as Error
  console.error(err)

  return (
    <div>
      <h1>
        oh no
      </h1>
      <p>something went very wrong behind the scenes</p>
      <p>refresh the page (your progress is probably saved!)</p>
      <p>
        what we think went wrong:
        <code>
          { err.message }
        </code>
      </p>
    </div>
  )
}
