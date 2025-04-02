import { PopupButton } from "react-calendly";
import { scheduleLink } from "../../constant/scheduleLink";

import BannerButton from "../BannerButton";
import useScreenMobile from "../../hooks/useScreen";

import homeBanner from "../../assets/images/banner/homeBanner.png";
import homeBannerMobile from "../../assets/images/banner/homeBannerMobile.png";

import "./homeBanner.scss";
import JoinWebinar from "../JoinWebinar";

const HomeBanner = () => {
  const isMobile = useScreenMobile({ size: 992 });
  return (
    <div className="container homeBannerContainer">
      <div className="bannerContent">
        <h3 className="bannerHeading">Maximize your digital success</h3>
        <p className="bannerDetail">
          Founded by an <strong>ex-Googler with 18+ years of experience</strong>
          , our company brings a wealth of expertise in{" "}
          <strong>digital transformation</strong>,{" "}
          <strong>user experience</strong>, and <strong>growth strategy</strong>
          . With best-in-class insights, cutting-edge strategy, UX/design, and
          data-driven growth consulting, we help businesses optimize their web
          and app experiences to drive high engagement, maximize conversions,
          and achieve sustainable ROI.
        </p>
        <div className="ButtonContainer">
          <BannerButton />

          <PopupButton
            url={scheduleLink}
            rootElement={document.getElementById("root")}
            text="Click here to schedule!"
            className="child"
          />

          <JoinWebinar />
        </div>
      </div>
      <div className="bannerImageContainer">
        <img
          className="bannerImage"
          src={isMobile ? homeBannerMobile : homeBanner}
          alt="homeBanner"
        />
      </div>
    </div>
  );
};

export default HomeBanner;
