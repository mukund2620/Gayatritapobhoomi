import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {FaPlaceOfWorship} from 'react-icons/fa'
import {BiBookAlt} from 'react-icons/bi'
import {HiUserGroup} from 'react-icons/hi'
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : '' }><AiOutlineHome/></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><FaPlaceOfWorship/></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav==='#experience' ? 'active' : ''}><HiUserGroup/></a>
     
    </nav>
  )
}

export default Nav
