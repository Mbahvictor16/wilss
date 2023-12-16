import React from 'react'
import {FaGithub} from "react-icons/fa"
import { Link } from 'react-router-dom'

const Footer: React.FC = () => {
  return (
    <footer className='bg-slate-900 w-full text-white p-10'>
      <div role='navigation' className='ml-4'>
        
        <h1 className='text-2xl'>Owner</h1>
        <ul className='list-none'>
          <li className='my-4'>
            <Link to="">
              <span className='flex items-center'>
              <FaGithub size="1.5em"/>&nbsp;&nbsp;<span>Ifeanyi Mbah.</span>
              </span>
            </Link>
          </li>
        </ul>

      </div>
      <div className='my-5'>
        <Link to="https://onma.onrender.com" className='text-slate-900 bg-white px-4 py-2 rounded-full text-center mx-auto block w-fit'>
          View on Github
        </Link> 

        <span className='block mx-auto w-fit mt-5'>
          &copy;2023
        </span>
      </div>
    </footer>
  )
}

export default Footer