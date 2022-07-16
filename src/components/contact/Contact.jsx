import React, { useRef } from 'react';
import './contact.css';
import { AiTwotoneMail, AiFillPhone } from 'react-icons/ai';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_m2wwhpk', 'template_4uuru7e', form.current, 'awJCuagL9U6wYO3--')

    e.target.reset();
  }
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <AiTwotoneMail className="contact__option-icon"/>
            <h4>Email</h4>
            <h5>dzheng3456@gmail.com</h5>
            <a href="mailto:dzheng3456@gmail.com">Send a message</a>
          </article>

          <article className="contact__option">
            <AiFillPhone className="contact__option-icon"/>
            <h4>SMS</h4>
            <h5>(917) 517-0812</h5>
            <a href="sms:+1917-517-0812">Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Full Name" required />
          <input type="email" name="email" placeholder="Your Email" required/>
          <textarea name="message" rows="7" placeholder="Your Message" required />
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact;