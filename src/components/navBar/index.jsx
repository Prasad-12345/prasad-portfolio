import React, { useState } from 'react'
import {FaReact, FaBars} from 'react-icons/fa'
import { HiX } from 'react-icons/hi'
import { Link } from 'react-router-dom'
import './style.scss'

const data = [
  {
    label : 'Home',
    to : '/'
  },
  {
    label : 'About Me',
    to : '/about'
  },
  {
    label : 'Skills',
    to : '/skills'
  },
  {
    label : 'Resume',
    to : '/resume'
  },
  {
    label : 'Portfolio',
    to : '/portfolio'
  },
  {
    label : 'Contact',
    to : '/contact'
  },
]

function NavBar() {
  const [toggleIcon, setToggleIcon] = useState(false)

  const handleToggleIcon = () => {
    setToggleIcon(!toggleIcon)
  }

  const handleSideBarItemClick = () => {
    setToggleIcon(!toggleIcon)
  }

  return (
    <div>
      <nav className='navbar'> 
        <div className='navbar_container'>
          <Link to={'/'} className='navbar_container_logo'>
            <FaReact size={30}/>
          </Link>
        </div>
        <ul className={`navbar_container_menu ${toggleIcon ? 'active' : ''}`}>
          {data.map((item, key) => (
            <li key={key} className='navbar_container_menu_item'>
              <Link to={item.to} className='navbar_container_menu_links' onClick={handleSideBarItemClick}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className='nav_icon' onClick={handleToggleIcon}>
          {
            toggleIcon ? <HiX size={30}/> : <FaBars size={30}/>
          }
        </div>
      </nav>
    </div>
  )
}

export default NavBar
