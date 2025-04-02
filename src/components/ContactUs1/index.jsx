import Modal from "../Modal/Modal";
import Cross from "../../assets/images/herosection/cross.svg";
import "./contactus.scss";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
const ContactUs1 = ({ isModalOpen, handleCloseModal }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    company: "",
    websiteorappLink: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    fullName: "",
    company: "",
    websiteorappLink: "",
    message: "",
  });

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
    if (!formData.fullName) {
      formErrors.fullName = "Full Name is required.";
      isValid = false;
    }
    if (!formData.company) {
      formErrors.company = "Company Name is required.";
      isValid = false;
    }
    if (!formData.websiteorappLink) {
      formErrors.websiteorappLink = "Website or App Link is required.";
      isValid = false;
    } else if (
      !/^(ftp|http|https):\/\/[^ "]+$/.test(formData.websiteorappLink)
    ) {
      formErrors.websiteorappLink = "Please enter a valid URL.";
      isValid = false;
    }
    // Optional: Additional validation for the message field (can be empty)
    if (formData.message && formData.message.length < 10) {
      formErrors.message = "Message should be at least 10 characters long.";
      isValid = false;
    }

    setErrors(formErrors);
    return isValid;
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form data submitted:", formData);
      handleCloseModal();
    }
  };

  return (
    <Modal isOpen={isModalOpen} handleClose={handleCloseModal}>
      <section className="container contactUs">
        <form onSubmit={handleSubmit}>
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
                <label htmlFor="fullName" className="text">
                  Full Name<span className="clr">*</span>
                </label>
                <input
                  type="text"
                  name="fullName"
                  className="inputBox"
                  placeholder="Enter Your Full Name"
                  value={formData.fullName}
                  onChange={handleChange}
                />
                {errors.fullName && (
                  <span className="error">{errors.fullName}</span>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="company" className="text">
                  Company<span className="clr">*</span>
                </label>
                <input
                  type="text"
                  name="company"
                  className="inputBox"
                  placeholder="Enter Your Company Name"
                  value={formData.company}
                  onChange={handleChange}
                />
                {errors.company && (
                  <span className="error">{errors.company}</span>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="websiteorappLink" className="text">
                  Website or App Link<span className="clr">*</span>
                </label>
                <input
                  type="url"
                  name="websiteorappLink"
                  className="inputBox"
                  placeholder="Enter your web or app URL or link"
                  value={formData.websiteorappLink}
                  onChange={handleChange}
                />
                {errors.websiteorappLink && (
                  <span className="error">{errors.websiteorappLink}</span>
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
              <div className="buttonText">Submit</div>
            </button>
          </div>
        </form>
      </section>
    </Modal>
  );
};

export default ContactUs1;
