import { useState } from "react";
import "./contact.scss";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { colors } from "@material-ui/core";

export default function Contact() {
  const [message, setMessage] = useState(false)
  const [buttonText, setButtonText] = useState("Connect")


    const form = useRef();
    const sendEmail = (e) => {
      e.preventDefault();
      setMessage(true);
      setButtonText("Sent ✅");
  
      emailjs.sendForm(
        'service_gl80lti', 
        'template_cluy8mb', form.current, 'JGN9rPMlvEC6-ckAO')
        .then((result) => {
            console.log(result.text);
            console.log("Thanks! Will get back to you soon:)")
        }, (error) => {
            console.log(error.text);
        });
    };
  

  return (
    <div className='contact' id="contact">
      <div className="left">
        <img src="assets/mypic4.png"/>
      </div>
      <div className="right">
          <h2>Connect With Me.</h2>
          <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      {/* <input type="submit" value="Send" /> */}
      <button type="submit" value="Send">{buttonText}</button>
      {message && <span style={{color:"green", marginLeft: "180px"}}>Thanks! Will get back to you soon.</span>}
    </form>
  
          {/* <form method="post"  action="https://wa.me/918777831265?text=Hey! Just had a look into your portfolio Website" onSubmit={handleSubmit}>
            <input type="email" placeholder="Your Email"></input>
            <input type="number" placeholder="Contact Number"></input>
            <textarea placeholder="What are you up to?"/>
            <button type="submit" value="Send Email">{buttonText}</button>
            {message && <span>Thanks! Will get back to you soon.</span>}
          </form> */}
        </div>
      </div>
  )
}
