import React from 'react'
import { Searchbar } from './Searchbar'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className="nav-center">
        <Link to='/'>
          <h2 className='logo'>Logo</h2>
        </Link>
        <ul className='nav-links'>
          <li>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/contact'>Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
