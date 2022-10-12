import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import StyleIcon from '@mui/icons-material/Style'
import QuizIcon from '@mui/icons-material/Quiz'
import set from '../../sets/index.json'

interface QuizzerSetData {
  category: string
}

export function QuizzerSetSelect ({ set, category, name }: { set: string, category: string, name: string }): React.ReactElement {
  return (
    <div className='flex items-center justify-between m-4 px-4 py-2 border-y border-slate-200'>
      <div className='flex flex-col'>
        <p className='font-semibold'>
          { name }
        </p>
        <p>
          hello gamers, it is gaming time
        </p>
      </div>
      <div className='flex flex-col'>
        <Link to={`/flash/${category}/${set}`} className='rounded-md py-2 px-3 bg-teal-600 hover:bg-teal-700 text-white font-semibold text-sm my-1'><StyleIcon className='mr-2'/>Flashcards</Link>
        <Link to={`/quiz/${category}/${set}`} className='rounded-md py-2 px-3 bg-rose-600 hover:bg-rose-700 text-white font-semibold text-sm my-1'><QuizIcon className='mr-2'/> Quiz</Link>
      </div>
    </div>
  )
}

export function QuizzerSet (): React.ReactElement {
  const { category } = useLoaderData() as QuizzerSetData
  const categoryTable = set.set[category as keyof typeof set.set]
  const entries = Object.entries(categoryTable)

  return (
    <div className='pl-4'>
      <p className='font-semibold text-xl'>{ categoryTable.__loc.en_us }</p>
      {
        entries.map(([id, obj]) => (
          id === '__loc'
            ? <React.Fragment key={id}></React.Fragment>
            : (
                <QuizzerSetSelect key={id} set={id} category={category} name={obj.en_us} />
              )
        ))
      }
    </div>
  )
}
