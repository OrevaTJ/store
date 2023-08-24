import React from 'react'
import { Searchbar } from './Searchbar'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes, FaHome } from 'react-icons/fa'
import { FcAbout } from 'react-icons/fc'
import { GrContact } from 'react-icons/gr'
import { CgProfile } from 'react-icons/cg'
import { BsCart4 } from 'react-icons/bs'
import { useGlobalContext } from '../../Context'

export const Navbar = () => {
  const {isSidebar, toggleSidebar, addToCart} = useGlobalContext()

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
          <div className='nav-end'>
            <CgProfile />
            <div className='nav-cart'>
              <Link to='/cart'>
                {/* <h3>Cart</h3> */}
                {/* <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'>
                  <path d='M16 6v2h2l2 12H0L2 8h2V6a6 6 0 1 1 12 0zm-2 0a4 4 0 1 0-8 0v2h8V6zM4 10v2h2v-2H4zm10 0v2h2v-2h-2z' />
                </svg> */}
                <BsCart4 />
                <div className='amount-container'>
                  <p className='total-amount'>5</p>
                </div>
              </Link>
            </div>
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
              <Link to='/'>
              <FaHome />
                Home
              </Link>
              <Link to='/about'>
                <FcAbout />
                About
              </Link>
              <Link to='/contact'>
                <GrContact />
                Contact
              </Link>
            </li>
          </ul>
        </aside>
    </>
  )
}
