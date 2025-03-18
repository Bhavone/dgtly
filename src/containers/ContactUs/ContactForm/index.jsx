
import { useState } from "react";

import emailjs from "@emailjs/browser";

import successIcon from "../../../assets/images/contactUs/successIcon.svg";

import "./contactForm.scss";
import ScheduleCallButton from "../../../components/ScheduleCallButton";

const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const ContactForm = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const [isSubmit, setIsSubmit] = useState(false);

  const handleGoBack = () => {
    setIsSubmit(false);
  }
  const validateField = (name, value) => {
    let error = "";

    switch (name) {
      case "name":
        if (!value.trim()) {
          error = "Full Name is required";
        }
        break;

      case "email":
        if (!value.trim()) {
          error = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(value)) {
          error = "Enter a valid email address";
        }
        break;

      case "phoneNumber":
        if (!value.trim()) {
          error = "Phone Number is required";
        } else if (!/^\d{10}$/.test(value)) {
          error = "Enter a valid 10-digit phone number";
        }
        break;

      case "message":
        if (!value.trim()) {
          error = "Message cannot be empty";
        }
        break;

      default:
        break;
    }

    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: validateField(name, value),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = {};
    Object.keys(formData).forEach((field) => {
      newErrors[field] = validateField(field, formData[field]);
    });

    setErrors(newErrors);

    if (Object.values(newErrors).every((error) => !error)) {
      const templateParams = {
        from_name: formData.name,
        name: formData.name,
        email: formData.email,
        phoneNumber: formData.phoneNumber,
        message: formData.message,
      };
      emailjs
      .send(
    
        serviceId,         
        templateId,
        templateParams,
        publicKey
      )
      .then(
        () => {
          setIsSubmit(true);
          setFormData({ name: "", email: "", phoneNumber: "", message: "" });
          console.log("Form submitted successfully!");
          setErrors({});
        },
      
      ) .catch(error=>{
        console.log("email error", error)

      });


      setFormData({
        name: "",
        email: "",
        phoneNumber: "",
        message: "",
      });
      setErrors({});
    }
  };

  return (
    <>
      <div className="container contactFormSection">
        <div className="container contactFormContainer">
          <div className="contactContent">
            <h1 className="contactHeader">Contact Us</h1>
            <p className="contactDescription">
              <span className="highlight">
                Let’s turn your vision into a successful launch.
              </span>{" "}
              Get in touch today!
            </p>
          </div>
          <div className="formSection">
            {
              isSubmit ? (
                <div className="submitMsg">
                <div className="submitMsgContainer">
                  <div className="imgSection">
                    <img src={successIcon} alt="Submit" />
                  </div>
                  <div className="message">
                    <h4 className="thankYou">Thank You!</h4>
                    <p className="thankText">
                      Your form has been submitted successfully. Our team will
                      respond to your inquiry shortly.
                    </p>
                  </div>
                  <div className="goBack">
                  <ScheduleCallButton buttonText="Go Back" onclick={handleGoBack}/>
                  </div>
                </div>
              </div>
              ) : (
                <form className="form" onSubmit={handleSubmit} noValidate>
                <div className="dataSection">
                  <div className="field">
                    <label htmlFor="name">Full Name*</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="name"
                      required
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                    {errors.name && <p className="error">{errors.name}</p>}
                  </div>
                  <div className="field">
                    <label htmlFor="email">Email Id*</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="email"
                      placeholder="xyz@example.com"
                      required
                      value={formData.email}
                      onChange={handleChange}
                    />
                    {errors.email && <p className="error">{errors.email}</p>}
                  </div>
                  <div className="field">
                    <label htmlFor="phoneNumber">Phone Number*</label>
                    <input
                      type="text"
                      id="phoneNumber"
                      name="phoneNumber"
                      className="phoneNumber"
                      placeholder="Enter your mobile number"
                      required
                      value={formData.phoneNumber}
                      onChange={handleChange}
                    />
                    {errors.phoneNumber && (
                      <p className="error">{errors.phoneNumber}</p>
                    )}
                  </div>
                  <div className="field message">
                    <label htmlFor="message">Message*</label>
                    <textarea
                      type="text"
                      id="message"
                      name="message"
                      className="message"
                      placeholder="Please enter a message here"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={3}
                    />
                    {errors.message && <p className="error">{errors.message}</p>}
                  </div>
                </div>
                <div className="submitSection">
                  <button type="submit" className="submitButton">
                    Submit
                  </button>
                </div>
              </form>
              )
            }
           
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
