import Modal from "../Modal/Modal";
import Cross from "../../assets/images/herosection/cross.svg";
import "./contactus.scss";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
const ContactUs1 = ({ isModalOpen, handleCloseModal }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",

    company: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  // Handle form data changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Validate the form
  const validateForm = () => {
    let formErrors = {};
    let isValid = true;

    // Check for required fields
    if (!formData.name) {
      formErrors.name = "Full Name is required.";
      isValid = false;
    }
    
    if (!formData.email) {
      formErrors.email = "Email is required.";
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      formErrors.email = "Please enter a valid email address.";
      isValid = false;
    }


    setErrors(formErrors);
    return isValid;
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      setLoading(true);
      const scriptURL = "https://script.google.com/macros/s/AKfycbzfbknOUj6qwoPUS_hQl0xZxlHOErXiuWP3RqKtjlRssQtng8j67Zq9R3ZkG-znLJI/exec";

      const formBody = new URLSearchParams(formData).toString();

      try {
        const response = await fetch(scriptURL, {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: formBody,
        });

        if (response.ok) {
          alert("Data stored successfully!");
          setFormData({ name: "", email: "", company: "",message: "" }); 
        } else {
          alert("Error storing data.");
        }
        setLoading(false);
      } catch (error) {
        console.error("Error:", error);

        console.log("Form data submitted:", formData);
        handleCloseModal();
      }
    }
  };
  return (
    <Modal isOpen={isModalOpen} handleClose={handleCloseModal}>
      <section className="container contactUs">
        <form onSubmit={handleSubmit} noValidate>
          <div className="contact">
            <div className="heading">
              <p>
                Please provide us your details and we will reach out to you with
                a calendar invite to book your spot
              </p>
              <img src={Cross} alt="close" onClick={handleCloseModal} />
            </div>
            <div className="contactForm">
              <div className="form-group">
                <label htmlFor="name" className="text">
                  Full Name<span className="clr">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  className="inputBox"
                  placeholder="Enter Your Full Name"
                  value={formData.name}
                  onChange={handleChange}
                />
                {errors.name && <span className="error">{errors.name}</span>}
              </div>
              <div className="form-group">
                <label htmlFor="email" className="text">
                  Email<span className="clr">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  className="inputBox"
                  placeholder="Enter Your Company Name"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && (
                  <span className="error">{errors.email}</span>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="company" className="text">
                  Company
                </label>
                <input
                  type="text"
                  name="company"
                  className="inputBox"
                  placeholder="Enter your web or app URL or link"
                  value={formData.company}
                  onChange={handleChange}
                />
                {errors.company && (
                  <span className="error">{errors.company}</span>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="message" className="text">
                  Any additional info or message
                </label>
                <textarea
                  name="message"
                  className="textArea"
                  placeholder="Please enter a message here"
                  value={formData.message}
                  onChange={handleChange}
                />
                {errors.message && (
                  <span className="error">{errors.message}</span>
                )}
              </div>
            </div>
            <button type="submit" className="button">
              <div className="buttonText">{loading ? "Loading...":"Submit"}</div>
            </button>
          </div>
        </form>
      </section>
    </Modal>
  );
};
export default ContactUs1;
