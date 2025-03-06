import { PopupButton } from "react-calendly";
import { scheduleLink } from "../../constant/scheduleLink";

import FadeUp from "../../hooks/FadeUp";
import useScreenMobile from "../../hooks/useScreen";
import BannerButton from "../BannerButton";

import "./letsTogether.scss";

const LetsTogether = ({
  // eslint-disable-next-line
  title = "Let's work together.",
  // eslint-disable-next-line
  isInitialContentNeed = true,
  // eslint-disable-next-line
  isDigitalContentNeed = false,
}) => {
  const isMobile = useScreenMobile({ size: 992 });

  return isMobile ? (
    <>
      <div className="container letsTogetherContainerMobile">
        <div className="letsContent">
          <FadeUp>
            <h4 className="commonHeading letsHeading">{title}</h4>
          </FadeUp>

          {isInitialContentNeed && (
            <p className="letsDetail">Fast Track Your Design Led Innovation</p>
          )}

          {isDigitalContentNeed && (
            <>
              <p className="letsDetail">
                From{" "}
                <span className="highLight">
                  design sprints to marketing execution,
                </span>{" "}
                we help you build, launch, and scale your product{" "}
                <span className="highLight">with a high-impact strategy.</span>
              </p>
              <p className="letsDetail">
                <span className="highLight">
                  Let’s turn your vision into a successful launch.
                </span>{" "}
                Get in touch today!
              </p>
            </>
          )}
          {/* <p className="letsDetail">Fast Track Your Design Led Innovation</p> */}
        </div>
      </div>
      <div className="letsButton">
        {/* <img className="backgroundImage" src={letsBackground} alt="" /> */}
        <div className="ButtonContainer">
          <BannerButton />

          <PopupButton
            url={scheduleLink}
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
            {title}
            {/* {heading} */}
          </h4>
        </FadeUp>
        {isInitialContentNeed && (
          <p className="letsDetail">Fast Track Your Design Led Innovation</p>
        )}

        {isDigitalContentNeed && (
          <>
            <p className="letsDetail">
              From{" "}
              <span className="highLight">
                design sprints to marketing execution,
              </span>{" "}
              we help you build, launch, and scale your product{" "}
              <span className="highLight">with a high-impact strategy.</span>
            </p>
            <p className="letsDetail">
              <span className="highLight">
                Let’s turn your vision into a successful launch.
              </span>
              Get in touch today!
            </p>
          </>
        )}
      </div>
      <div className="ButtonContainer">
        <BannerButton />

        <PopupButton
          url={scheduleLink}
          rootElement={document.getElementById("root")}
          text="Click here to schedule!"
          className="child"
        />
      </div>
    </div>
  );
};

export default LetsTogether;
