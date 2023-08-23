import React from 'react'
import { Searchbar } from './Searchbar'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'
import { useGlobalContext } from '../../Context'

export const Navbar = () => {
  const {isSidebar, toggleSidebar} = useGlobalContext()

  return (
    <>
      <nav className='navbar'>
        <div className="nav-center">
          <div className='nav-header'>
            <button className='nav-toggle' onClick={toggleSidebar}>
              <FaBars />
            </button>
            <Link to='/'>
              <img src='#' alt='Logo' />
            </Link>
          </div>
          <div className='links-container'>
            <ul className='nav-links'>
              <li>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/contact'>Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <aside className={`sidebar ${isSidebar && 'show-sidebar'}`}>
          <div className='sidebar-header'>
            <Link to='/'>
              <img src='#' alt='Logo' />
            </Link>
            <button className='close-btn' onClick={toggleSidebar}>
              <FaTimes />
            </button>
          </div>
          <ul className='links'>
            <li>
              <Link to='/'>Home</Link>
              <Link to='/about'>About</Link>
              <Link to='/contact'>Contact</Link>
            </li>
          </ul>
        </aside>
    </>
  )
}
