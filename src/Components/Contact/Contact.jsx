import React from 'react';
import { useState } from 'react';
import "./Contact.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mail_icon from "../../assets/mail_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import call_icon from "../../assets/call_icon.svg";

const Contact = () => {

 const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "3a3b2560-5547-4f3f-b470-5adaaf392e7c");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    setResult(data.success ? "Success!" : "Error");

    alert(data.success ? "Form Submitted Successfully!" : "Failed to Submit Form");
  };

  return (
    <div id='contact' className='contact'>
        
        <div className="contact-title">
            <h1>Get in Touch</h1>
            <img src= {theme_pattern} alt="" />
        </div>
    
        <div className="contact-section">
            
            <div className="contact-left">
                <h1> Let's Talk </h1>
                <p>I am Currently Ready to Work on Projects You May Want Me to Work on </p>

                <div className="contact-details">
                    
                    <div className="contact-detail">
                        <img src= {mail_icon} alt="" />
                        <p> Dontech909984@gmail.com </p>
                    </div>

                    <div className="contact-detail">
                         <img src= {call_icon} alt="" />
                         <p>+254 108 983 208</p>
                    </div>

                    <div className="contact-detail">
                          <img src= {location_icon} alt="" />
                          <p>Nairobi,Kenya</p>
                    </div>

                </div>

            </div>

           <form onSubmit={onSubmit}  className="contact-right">
                 <label htmlFor=""> Your Name </label>
                 <input type="text" placeholder='Enter Your Name' name='name'  />

                 <label htmlFor="">Your Email</label>
                 <input type="email" placeholder='Enter Your Email' name='email' />

                 <label htmlFor="">Write Your Message Here</label>
                 <textarea name="message" rows = "8" placeholder='Enter Your Message'></textarea>
                 
                 <button type='submit' className='contact-submit'>Submit Now</button>
           </form>

     </div>   

    </div>
  )
}

export default Contact;