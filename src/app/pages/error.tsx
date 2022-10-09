import { useRouteError } from 'react-router'
import React from 'react'

export default function ErrorPage (): React.ReactElement {
  const err = useRouteError() as { status: number, statusText: string }

  return (
    <div>
      <h1>
        oh no - { err.status } { err.statusText }
      </h1>

      { (() => {
        if (err.status === 404) {
          return (
            <>
              <p>page not found</p>
              <p>try refreshing if it worked before, or the page may've been removed</p>
            </>
          )
        } else {
          return (
            <>
              <p>something went very wrong behind the scenes</p>
              <p>refresh the page (your progress is probably saved!)</p>
            </>
          )
        }
      })() }
    </div>
  )
}
