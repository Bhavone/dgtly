import HeroImageLaptop from "../../../assets/images/herosection/herosec.png";
import HeroImageMobile from "../../../assets/images/herosection/herosecMobile.png";
import dgtly from "../../../assets/images/herosection/dgtly.svg"; // Updated path
import googlepartner from "../../../assets/images/herosection/googlepartner.svg"; // Updated path
import logodgtly from "../../../assets/images/herosection/LogoDGTLY.svg"; // Updated path
import "./winning.scss";
// import useScreenMobile from "../../../hooks/useScreen";

const Winning = () => {
  return (
    <div>
      <section className="container heroSection">
        <div className="heroContainer">
          <div className="heroSectiontext">
            <button type="button" className="button">
              <div className="buttonText">
                <p>APAC FRIENDLY WEBINAR</p>
              </div>
            </button>
            <div className="subHeading">
              <div className="subHeading1">
                <p className="p1">WINNING USERS ON MOBILE</p>
                <p className="p2">( WEB & APP BEST PRACTICES )</p>
              </div>
              <div className="herosecImages">
                <img src={dgtly} alt="Dgtly" />

                <img src={googlepartner} alt="Google Partner" />
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
