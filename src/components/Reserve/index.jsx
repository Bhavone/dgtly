import { useState } from "react";
import Calendar from "../../assets/images/herosection/calendar.svg";
import "./reserve.scss";
import ContactUs1 from "../ContactUs1";

const Reserve = ({zIndexSetUp ,setZIndexSetUp}) => {
  const [openContactForm, setOpenContactForm] = useState(false);
  console.log(openContactForm, "openContactForm");

  const handleCloseModal = () => {
    setOpenContactForm(false);
    console.log("hello");
    setZIndexSetUp(false);
  };
  return (
    <>
      <button
        type="button"
        className="button"
        onClick={() => {setOpenContactForm(true);setZIndexSetUp(true);}}
      >
        <img src={Calendar} alt="" />
        <p className="reserve">Reserve Your Spot & Start Converting More Users</p>
      </button>
      {openContactForm ? (
        <ContactUs1
          isModalOpen={openContactForm}
          handleCloseModal={handleCloseModal}
        />
      ) : (
        ""
      )}
    </>
  );
};

export default Reserve;
