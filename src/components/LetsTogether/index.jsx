import { PopupButton } from "react-calendly";
import FadeUp from "../../hooks/FadeUp";
import useScreenMobile from "../../hooks/useScreen";
import BannerButton from "../BannerButton";

import "./letsTogether.scss";

const LetsTogether = () => {
  const isMobile = useScreenMobile({ size: 992 });

  return isMobile ? (
    <>
      <div className="container letsTogetherContainerMobile">
        <div className="letsContent">
          <FadeUp>
            <h4 className="commonHeading letsHeading">
              Let&apos;s work together.
            </h4>
          </FadeUp>

          {/* <p className="letsDetail">Fast Track Your Design Led Innovation</p> */}
        </div>
      </div>
      <div className="letsButton">
        {/* <img className="backgroundImage" src={letsBackground} alt="" /> */}
        <div className="ButtonContainer">
          <BannerButton />

          <PopupButton
            url="https://calendly.com/tanejbhavna/new-meeting"
            rootElement={document.getElementById("root")}
            text="Click here to schedule!"
            className="child"
          />
        </div>
      </div>
    </>
  ) : (
    <div className="container letsTogetherContainer">
      <div className="letsContent">
        <FadeUp>
          <h4 className="commonHeading letsHeading">
            Let&apos;s work together.
          </h4>
        </FadeUp>
        {/* <p className="letsDetail">Fast Track Your Design Led Innovation</p> */}
      </div>
      <div className="ButtonContainer">
        <BannerButton />

        <PopupButton
          url="https://calendly.com/tanejbhavna/new-meeting"
          rootElement={document.getElementById("root")}
          text="Click here to schedule!"
          className="child"
        />
      </div>
    </div>
  );
};

export default LetsTogether;
