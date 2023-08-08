import React from 'react'
import "../Contact/contact.css"
import {HiOutlineMail} from "react-icons/hi"
import {BsWhatsapp} from "react-icons/bs"

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contactContainer'>
        <div className='contactOptions'>
          <article className='contactOption'>
            < HiOutlineMail className='contactOptionIcon' />
            <h4>Email</h4>
            <h5>jaskirathsingh2@gmail.com</h5>
            <a href='mailto:jaskirathsingh2@gmail.com'> Send a message  </a>
          </article>
         
          <article className='contactOption'>
            < BsWhatsapp className='contactOptionIcon' />
            <h4>Whatsapp</h4>
            <h5>+91-8800684439</h5>
            <a href='https://api.whatsapp.com/send?phone=+918800684439'> Send a message </a>
          </article>
        </div>
        {/* End of Contact option */}
        <form action=''>
          <input type='text' name='name' placeholder='Your full name' required/>
          <input type='email' name='email' placeholder='Your Email' required/>
          <textarea name='message' rows={7} placeholder='Your message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact