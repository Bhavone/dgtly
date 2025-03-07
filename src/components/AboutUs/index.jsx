import { Link } from "react-router-dom";
import FadeUp from "../../hooks/FadeUp";

import linkedIn from "../../assets/images/aboutUs/linkedIn.svg";
import useScreenMobile from "../../hooks/useScreen";
import aboutImage from "../../assets/images/aboutUs/aboutImage.png";
import star from "../../assets/images/aboutUs/star.svg";

import "./aboutUs.scss";

const certified = [
  "Certified in Design Thinking",
  "Startup Mentor",
  "UX Curriculum for Skills Ignition (Google led initiative)",
  "Industry Speaker Digital Marketing World Forum, Google UX days, Skills Ignition launch",
  "Guest lecturer on UX / Design Thinking General Assembly",
];

const AboutUs = () => {
  const isMobile = useScreenMobile({ size: 992 });
  return (
    <div className="container aboutContainer" id="aboutUs">
      {isMobile ? <h4 className="commonHeading">About Us</h4> : ""}
      <div className="aboutImageContainer">
        <img src={aboutImage} alt="" />
        <Link
          to="https://www.linkedin.com/in/bhavnaone/"
          target="_blank"
          onClick={() => {
            window.scrollTo({ top: 0 });
          }}
        >
          <img src={linkedIn} alt="" />
        </Link>
      </div>
      <div className="aboutDetail">
        {!isMobile && <h4 className="commonHeading">About Us</h4>}

        <FadeUp>
          <p className="aboutContent">
            DGTLY is a strategic consulting agency founded by Bhavna , a
            seasoned digital transformation leader with over{" "}
            <span className="highlight">18+ years or experience</span> at{" "}
            <span className="highlight">Google</span>,{" "}
            <span className="highlight">top consulting firms</span>, and{" "}
            <span className="highlight"> leading agencies</span>. Her expertise
            in driving digital innovation is complemented by a team or
            specialists in technical consulting, creative and performance
            marketing.
          </p>
        </FadeUp>
        <FadeUp>
          <p className="aboutContent">
            At DGTLY, we provide expert guidance in {""}
            <span className="highlight">
              conversion rate optimisation, growth consulting,
            </span>{" "}
            and <span className="highlight">digital strategy </span> across
            <span className="highlight"> diverse industries. </span> Whether
            you&apos;re a large to medium business looking to maximize user
            engagement and ROl or a startup seeking to build and scale your
            digital presence, we have the right expertise to help you succeed.
          </p>
        </FadeUp>

        <div className="certifiedContainer">
          {certified.map((item, index) => (
            <FadeUp key={index}>
              <p>
                <img src={star} alt="" />
                {item}
              </p>
            </FadeUp>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
