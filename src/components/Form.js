import "./FormStyles.css";
import React from 'react'
import { AiFillGithub,AiFillLinkedin} from "react-icons/ai";
import { FaMailBulk, FaPhone } from 'react-icons/fa'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const Form = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_lyyi2ns', 'template_sjca6p1', form.current, 'XWyttvQ5D6WG0LQZD')
      .then((result) => {
          console.log(result.text);
          console.log("message send");
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <section className="form" id="form">
      <div className="form-intro">
        <h1>Get In Touch</h1>
      </div>
      <div className="form-container">
          <div className="form-icons">
            <div>
              <h4><AiFillGithub size={30} style={{color: "#fff", marginRight:"2rem"}}/><a href="https://github.com/SukhbirSR">Github</a> </h4>
            </div>
            <div>
              <h4><AiFillLinkedin size={30} style={{color: "#fff", marginRight:"2rem", marginTop:"1rem"}}/><a href="https://www.linkedin.com/in/sukhbir-singh-bbb476147/">Linkedin</a> </h4>
            </div>
            <div>
              {/* <h4><AiOutlineInstagram size={30} style={{color: "#fff", marginRight:"2rem"}}/> Instagram</h4> */}
            </div>
            <div>
              <h4><FaPhone size={30} style={{color:"#fff", marginRight:"2rem", marginTop:"1rem"}}/><a href="tel:+19053918813">+1 (905)-391-8813</a></h4>
            </div>
            <div>
              <h4> <FaMailBulk size={30} style={{color:"#fff", marginRight:"2rem", marginTop:"1rem"}}/> <a href="mailto:rs.sukhbirsingh@gmail.com"> rs.sukhbirsingh@gmail.com</a></h4>
            </div>
            
          </div>
          <div className="form-contact">
              <form ref={form} onSubmit={sendEmail}>
                  <label>Name</label>
                  <input type="text" name="user_name"></input>
                  <label>Email</label>
                  <input type="email" name="user_email"></input>
                  <label>Subject</label>
                  <input type="text" name="from_subject"></input>
                  <label>Message</label>
                  <textarea rows="6" placeholder="Type your message here" name="message"/>
                  <button className="btn" value="Send">Submit</button>
              </form>
            </div>
        </div>
    </section>
  )
}

export default Form;