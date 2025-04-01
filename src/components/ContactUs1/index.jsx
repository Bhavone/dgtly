import React from 'react'
import Cross from "../../assets/images/herosection/cross.svg"
import "./contactus.scss"
const ContactUs1 = () => {
  return (
    <>
       <section className="container contactUs">
        <div className="contact">
            <div className="heading">
                <p>Please provide us your details and we will reach out to you with a calendar invite to book your spot</p>
                <img src={Cross} alt="" />
            </div>
            <div className="contactForm">
                <div className="form-group">
                    <label htmlFor="fullName" className="text">Full Name<span className="clr">*</span></label>
                    <input type="text" className="inputBox" placeholder="Enter Your Full Name" required/>
                </div>
                <div className="form-group">
                    <label htmlFor="company" className="text">Company<span className="clr">*</span></label>
                    <input type="text" className="inputBox" placeholder="Enter Your Company Name" required/>
                </div>
                <div className="form-group">
                    <label htmlFor="websiteorappLink" className="text">Website or App Link<span className="clr">*</span></label>
                    <input type="url" className="inputBox" placeholder="Enter your web or app URL or link" required/>
                </div>
                <div className="form-group">
                    <label htmlFor="message" className="text">Any additional info or message</label>
                    <textarea className="textArea" placeholder="Please enter a message here"></textarea>
                </div>
            </div>
            <button type="submit" className="button">
                <div className="buttonText">Submit</div>
            </button>
        </div>
       </section>
    </>
  )
}

export default ContactUs1