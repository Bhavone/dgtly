import HeroImageLaptop from "../../../assets/images/herosection/herosec.png";
import HeroImageMobile from "../../../assets/images/herosection/herosecMobile.png";
import line from "../../../assets/images/herosection/line.svg";
import dgtly from "../../../assets/images/herosection/dgtly.svg"; // Updated path
import googlepartner from "../../../assets/images/herosection/googlepartner.svg"; // Updated path
import logodgtly from "../../../assets/images/herosection/LogoDGTLY.svg"; // Updated path
import "./winning.scss";
import FadeUp from "../../../hooks/FadeUp";
// import useScreenMobile from "../../../hooks/useScreen";

const Winning = () => {
  return (
    <div>
      <section className="container heroSection">
        <div className="heroContainer">
          <div className="heroSectiontext">
            <button type="button" className="button">
              <div className="buttonText">
                <FadeUp>
                  <p>APAC FRIENDLY WEBINAR</p>
                </FadeUp>
              </div>
            </button>
            <div className="subHeading">
              <div className="subHeading1">
                <FadeUp>
                  <p className="p1">WINNING USERS ON MOBILE</p>
                </FadeUp>
                <FadeUp>
                  <p className="p2">( WEB & APP BEST PRACTICES )</p>
                </FadeUp>
              </div>
              <div className="herosecImages">
                <img src={dgtly} alt="Dgtly" />
                <img src={line} alt="" />
                <img src={googlepartner} alt="Google Partner" />
                <img src={line} alt="" />
                <img src={logodgtly} alt="Logo Dgtly" />
              </div>
            </div>
          </div>
          <div className="heroSectionImageForLaptop">
            <img src={HeroImageLaptop} alt="" />
          </div>
          <div className="heroSectionImageForMobile">
            <img src={HeroImageMobile} alt="" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Winning;
