import React from 'react'
import {BsLinkedin, BsGithub, BsInstagram } from 'react-icons/bs'

const HeaderSocial = () => {
  return (
    <div className='header_socials'>
        <a href='https://www.linkedin.com/in/jaskirat-singh-96b2a61bb/' target='_blank'> <BsLinkedin /> </a>
        <a href='https://github.com/jassiyo' target='_blank'> <BsGithub /> </a>
        <a href='https://instagram.com' target='_blank'> < BsInstagram /> </a>
    </div>
  )
}

export default HeaderSocial