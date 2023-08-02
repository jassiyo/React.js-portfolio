import React from 'react'
import {GiCheckMark} from 'react-icons/gi'

const Service = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className='container serviceContainer'>
        <article className='service'>
          <div className='serviceHead'>
            <h3>UI/UX Design</h3>
          </div>
          <ul className='serviceList'>
            <li>
              <GiCheckMark className='serviceListIcon' />
              <p>qwertyuiopqjksblvalsinrgaoars</p>
            </li>
            <li>
              <GiCheckMark className='serviceListIcon' />
              <p>qwertyuiopqjksblvalsinrgaoars</p>
            </li>
            <li>
              <GiCheckMark className='serviceListIcon' />
              <p>qwertyuiopqjksblvalsinrgaoars</p>
            </li>
            <li>
              <GiCheckMark className='serviceListIcon' />
              <p>qwertyuiopqjksblvalsinrgaoars</p>
            </li>
            <li>
              <GiCheckMark className='serviceListIcon' />
              <p>qwertyuiopqjksblvalsinrgaoars</p>
            </li>
            <li>
              <GiCheckMark className='serviceListIcon' />
              <p>qwertyuiopqjksblvalsinrgaoars</p>
            </li>
            <li>
              <GiCheckMark className='serviceListIcon' />
              <p>qwertyuiopqjksblvalsinrgaoars</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Service