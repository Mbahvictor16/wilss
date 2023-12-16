import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar: React.FC = () => {
  const styles = {
    color: "white",
    backgroundColor: "#ff0000",
    borderRadius: "25px",
    padding: "6px 8px"
  }
  
  return (
    <nav className='lg:ml-8 overflow-x-auto xl:overflow-hidden py-5 scroll-px-8'>
        <ul className='flex lg:ml-6 ml-1 md:justify-center'>
            <li className='mx-6'>
              <NavLink to="/" className="hover:text-red-500" 
              style={({isActive}) => isActive ? styles : undefined}>Sources</NavLink>
            </li>
            <li className='mx-6'>
              <NavLink to="/category/general" className="hover:text-red-500" 
              style={({isActive}) => isActive ? styles : undefined}>General</NavLink>
            </li>
            <li className='mx-6'>
              <NavLink to="/category/politics" className="hover:text-red-500" 
              style={({isActive}) => isActive ? styles : undefined}>Politics</NavLink>
            </li>
            <li className='mx-6'>
              <NavLink to="/category/sport" className="hover:text-red-500" 
              style={({isActive}) => isActive ? styles : undefined}>Sport</NavLink>
            </li>
            <li className='mx-6'>
              <NavLink to="/category/technology" className="hover:text-red-500" 
              style={({isActive}) => isActive ? styles : undefined}>Technology</NavLink>
            </li>
            <li className='mx-6 pr-4'>
              <NavLink to="/category/entertainment" className="hover:text-red-500" 
              style={({isActive}) => isActive ? styles : undefined}>Entertainment</NavLink>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar