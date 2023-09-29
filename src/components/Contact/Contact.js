import React from 'react'
import "../Contact/contact.css"
import {HiOutlineMail} from "react-icons/hi"
import {BsWhatsapp} from "react-icons/bs"
import {useRef} from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs.sendForm('service_toecz9w', 'template_oxr8189', form.current, 'IovJlq6uwUXt1uT7')
//       .then((result) => {
//           console.log(result.text);
//           e.target.reset(); // Reset the form after successful sending
//       })
//       .catch((error) => {
//           console.log(error.text);
//       });
// };

  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_toecz9w', 'template_oxr8189', form.current, '-IovJlq6uwUXt1uT7  ')
      // e.target.reset()
      // .then((result) => {
      //     console.log(result.text);
      // }, (error) => {
      //     console.log(error.text);
      // });
  };

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
        <form ref={form} onSubmit={sendEmail}>
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