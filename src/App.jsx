import { Route, Routes } from "react-router-dom";

import Home from "./containers/Home";
import AppGrowth from "./containers/AppGrowth";
import Conversion from "./containers/Conversion";
import Header from "./components/Header";
import Footer from "./components/Footer";

import "./styles/common.scss";
import Digital from "./containers/Digital";
import ContactUs from "./containers/ContactUs";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/conversion" element={<Conversion />} />
        <Route path="/app-growth" element={<AppGrowth />} />
        <Route path="/digital" element={<Digital />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
