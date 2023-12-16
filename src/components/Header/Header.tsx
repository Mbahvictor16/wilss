import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <header className='mb-5 lg:h-[6.25rem] lg:flex lg:items-center lg:border-red-50 lg:border-b-2 lg:sticky lg:top-0'>
          <div className='flex justify-center py-4 border-b-2 border-red-100 lg:border-none'>
            <h1 
            className='text-red-500 text-2xl w-[6.625rem] lg:ml-[7.61rem] px-[0.62rem] lg:border-r-[0.1875rem]'>
              <b>
                <Link to="/" >
                 Wilss
                </Link>
              </b>
            </h1>

          </div>
          <Navbar />
      </header>
      <Outlet />
    </>
  )
}

export default Header