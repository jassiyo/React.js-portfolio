import React from 'react'
import {BsInstagram, BsFacebook, BsTwitter} from 'react-icons/bs'
import "./footer.css"
const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer-logo'>Jaskirat Singh</a>

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
        <a href='https://facebook.com'><BsFacebook /></a>
        <a href='https://instagram.com'><BsInstagram /></a>
        <a href='https://twitter.com'><BsTwitter /></a>
      </div>

      <div className='footer-copyright'>
        <small>&copy; Jaskirat Singh. All right reserved</small>
      </div>
    </footer>
  )
}

export default Footer