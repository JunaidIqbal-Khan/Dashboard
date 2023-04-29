import React from 'react'
import { useContext, useRef, useState } from "react";
import "./feedBackFoam.css"
import emailjs from "@emailjs/browser";
function FeedBackFoam() {

    const form = useRef();
    const [done, setDone] = useState(false);
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm(
          "service_ta1e9jj",
          "template_t8oi4af",
          form.current,
          "VLwg1ltOWvnCYAiK_"
        )
        .then(
          (result) => {
            console.log(result.text);
            setDone(true);
            form.reset();
          },
          (error) => {
            console.log(error.text);
          }
        );
    };


  return (
    <div className='feedbackfoam'>
<h1 style={{marginLeft:"34px"}}>FeedBack Response</h1>
         <div className="feedback-form" id="contact">
      {/* left side copy and paste from work section */}
      {/* <div className="w-left">
        <div className="awesome">
        
          <span>Contact Us</span>
          <span>For Details</span>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
      </div> */}
      {/* right side form */}
      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="user_name"
            className="user input-field-style"
            placeholder="Name"
          />
          <input
            type="email"
            name="user_email"
            className="user input-field-style"
            placeholder="Email"
          />

         <textarea id="w3review" name="w3review" rows="4" cols="50">At w3schools.com you will learn how to make a website. They offer free tutorials in all web development technologies.</textarea>
          <input type="submit" value="Send" className="button submit " placeholder="Message"/>
          <span>{done && "Thanks for Contacting me"}</span>
          <div
            className="blur c-blur1"
            style={{ background: "var(--purple)" }}
          ></div>
        </form>
      </div>
    </div>
    </div>
  )
}

export default FeedBackFoam