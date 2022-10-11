import React from 'react'
import { Link } from 'react-router-dom'
import set from '../../sets/index.json'

const SET_LOCALIZATION = '__loc'

export default function QuizzerSetSelect (): React.ReactElement {
  const sets = Object.entries(set.set)
  return (
    <div>

      {
        sets.map(([id, obj]) => (
          // ???
          <React.Fragment key={id}>
            <h2>{obj[SET_LOCALIZATION].en_us}</h2>
            <ul>
            {
              Object.entries(obj)
                .filter(([key]) => key !== SET_LOCALIZATION)
                .map(([key, cfg]) => (
                  <li key={key}><Link to={`/select/${key}`}>{cfg.en_us}</Link></li>
                ))
            }
            </ul>
          </React.Fragment>
        ))
      }
    </div>
  )
}
