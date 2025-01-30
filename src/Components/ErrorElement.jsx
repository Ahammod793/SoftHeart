import React from 'react'
import { useRouteError } from 'react-router-dom'

export default function Error() {
    const Error= useRouteError()
  return (
    <div>
        <div className='text-center flex flex-col items-center pt-20'> 
            <h1 className='font-bold text-2xl text-secondary'>{Error.status}</h1><br />
            <h1 className='py-6 font-bold text-3xl text-secondary'>{Error.statusText}</h1>
            <h3>{Error.data}</h3>
        </div>
    </div>
  )
}
