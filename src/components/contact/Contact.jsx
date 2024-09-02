import React from "react";
import { useRef } from 'react';
import "./contact.css";
//! ICONS
import { MdOutlineMail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";

//?SERVICES
import emailjs from 'emailjs-com';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_e5d9f1j', 'service_e5d9f1j', form.current, {
        publicKey: '',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>wvelasquez.dev@gmail.com</h5>
            <a href="mailto:wvelasquez.dev@gmail.com" target="_blank">
              {" "}
              Send a message
            </a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>Whatsapp</h4>
            <h5>+584242118468</h5>
            <a
              href="https://api.whatsapp.com/send?phone=584242118468"
              target="_blank"
            >
              {" "}
              Send a message
            </a>
          </article>
        </div>

        {/* <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your full name"
            required
          />

          <input type="email" name="email" placeholder="Your email" required />

          <textarea
            name="message"
            rows={7}
            placeholder="Your Message"
          ></textarea>
          <button type="submit" className="btn btn-primary">
            {" "}
            Send Message
          </button>
        </form> */}
      </div>
    </section>
  );
}

export default Contact;
