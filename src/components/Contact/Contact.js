import React from 'react'
import {HiOutlineMail} from "react-icons"

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contactContainer'>
        <div className='contactOptions'>
          <article className='contactOption'>
            <h4>Email</h4>
            <h5>jaskirathsingh2@gmail.com</h5>
            <a href='jaskirathsingh2@gmail.com'> Send a message  </a>
          </article>
        </div>
        {/* End of Contact option */}
        <form action=''></form>
      </div>
    </section>
  )
}

export default Contact