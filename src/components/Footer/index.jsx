import { Link } from "react-router-dom";
import FadeUp from "../../hooks/FadeUp";

import websiteLogo from "../../assets/images/header/websiteLogo.svg";
import linkedInFooter from "../../assets/images/aboutUs/linkedInFooter.svg";

import "./footer.scss";

const Footer = () => {
  return (
    <div className="container footerContainer">
      <div className="footerContent">
        <div className="footerData">
          <img src={websiteLogo} alt="websiteLogo" />

          {/* <p>Fast track your design innovation</p> */}
        </div>
        <Link to="https://www.linkedin.com/company/105938190" target="_blank">
          <FadeUp>
            <h4 className="footerLinkedIn">
              <img src={linkedInFooter} alt="" />
              Follow on LinkedIn
            </h4>
          </FadeUp>
        </Link>
      </div>
      <FadeUp>
        <a href="mailto:info@dgtly.io"className="info">info@dgtly.io</a>
      </FadeUp>
    </div>
  );
};

export default Footer;
