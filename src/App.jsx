import { Route, Routes, useLocation, useNavigate } from "react-router-dom";

import Home from "./containers/Home";
import AppGrowth from "./containers/AppGrowth";
import Conversion from "./containers/Conversion";
import Header from "./components/Header";
import Footer from "./components/Footer";

import "./styles/common.scss";
import Digital from "./containers/Digital";
import ContactUs from "./containers/ContactUs";
import Webinar from "./containers/Webinar";
import SlotBooking from "./containers/Webinar/SlotBooking";
import { useEffect, useState } from "react";

const App = () => {
  const location = useLocation();
  const [zIndexSetUp, setZIndexSetUp] = useState(false);

  function RedirectFrom404() {
    const navigate = useNavigate();
  
    useEffect(() => {
      const redirectPath = sessionStorage.getItem('redirect-path');
      if (redirectPath) {
        sessionStorage.removeItem('redirect-path');
        navigate(redirectPath);
      }
    }, [navigate]);
  
    return null;
  }
  return (
    <>
      <Header zIndexSetUp={zIndexSetUp} setZIndexSetUp={setZIndexSetUp}/>
      <Routes>
        <RedirectFrom404 />
        <Route path="/" element={<Home />} />
        <Route path="/conversion" element={<Conversion />} />
        <Route path="/app-growth" element={<AppGrowth />} />
        <Route path="/digital" element={<Digital />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/webinar" element={<Webinar zIndexSetUp={zIndexSetUp} setZIndexSetUp={setZIndexSetUp}/>} />
      </Routes>
      {location.pathname === "/webinar" && <SlotBooking modClass={"stickeySlotBooking"}/>}

      <Footer />
    </>
  );
};

export default App;
