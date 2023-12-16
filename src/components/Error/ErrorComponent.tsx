import React from 'react'
import { useLocation, useRouteError, Link } from 'react-router-dom'

const ErrorComponent: React.FC = () => {
  const error = useRouteError() as Error
  const location = useLocation()

  return (
    <div className='text-center mt-8'>
      <span className="text-2xl">Error : {error.message}</span>

      <div className='mt-2 py-4'>
        <Link to={location.state} className='bg-red-500 px-4 py-2 text-white text-lg font-bold rounded-full'>
          Refresh Page
        </Link>
      </div>

    </div>
  )
}

export default ErrorComponent