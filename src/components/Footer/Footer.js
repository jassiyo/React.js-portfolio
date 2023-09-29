import React from 'react'

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer-logo'>EGATOR</a>

      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#expirence'>Exprieance</a></li>
        <li><a href='#services'>Services</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#testimonials'>Testimonials</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className='footer-socials'>
        <a href='https://facebook.com'>F</a>
        <a href='https://instagram.com'>I</a>
        <a href='https://twitter.com'>T</a>
      </div>
    </footer>
  )
}

export default Footer