import { Link } from "react-router-dom";
import FadeUp from "../../hooks/FadeUp";

// import websiteLogo from "../../assets/images/header/websiteLogo.svg";
import websiteLogo from "../../assets/images/header/LogoDGTLY.png";
import linkedInFooter from "../../assets/images/aboutUs/linkedInFooter.svg";

import "./footer.scss";

const Footer = () => {
  return (
    <div className="container footerContainer">
      <div className="footerContent">
        <div className="footerData">
         <div className="logoWrapper">
                   <Link
                     to="/"
                     onClick={() => {
                       window.scrollTo({ top: 0 });
                     }}
                   >
                     <img className="websiteLogo" src={websiteLogo} alt="websiteLogo" />
                   </Link>
                 </div>

          {/* <p>Fast track your design innovation</p> */}
        </div>
        <Link
          to="https://www.linkedin.com/company/105938190"
          target="_blank"
          onClick={() => {
            window.scrollTo({ top: 0 });
          }}
        >
          <FadeUp>
            <h4 className="footerLinkedIn">
              <img src={linkedInFooter} alt="" />
              Follow on LinkedIn
            </h4>
          </FadeUp>
        </Link>
      </div>
      <FadeUp>
        <a href="mailto:info@dgtly.io" className="info">
          info@dgtly.io
        </a>
      </FadeUp>
    </div>
  );
};

export default Footer;
