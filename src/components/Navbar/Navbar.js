import './navbar.css'
import React from 'react'
import { BsJournal } from 'react-icons/bs'
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai'
import { RiServiceLine, RiContactsLine } from 'react-icons/ri'
import { useState } from 'react' 

const Navbar = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav className='navContainer'>
      <a href='#' onClick={() => setActiveNav('#')} className= { activeNav === "#" ? 'active' : '' }> <AiOutlineHome /> </a>
      <a href='#about' onClick={() => setActiveNav('#about')} className={ activeNav === "#about" ? 'active' : '' }  > <AiOutlineUser /> </a>
      <a href='#expirence' onClick={() => setActiveNav('#expirence')} className= { activeNav === "#expirence" ? 'active' : '' }> <BsJournal /> </a>
      <a href='#service' onClick={() => setActiveNav('#service')} className= { activeNav === "#service" ? 'active' : '' }> <RiServiceLine /> </a>
      <a href='#contact' onClick={() => setActiveNav('#contact')} className= { activeNav === "#contact" ? 'active' : '' }> <RiContactsLine /> </a>
      
    </nav>
  )
}

export default Navbar