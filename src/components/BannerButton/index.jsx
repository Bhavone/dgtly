import hamburger from "../../assets/images/banner/calendar.svg";

import "./bannerButton.scss";

const BannerButton = () => {
  return (
    <div className="container bannerButtonContainer">
      <img src={hamburger} alt="calender" />
      <div className="scheduleCallButton">Schedule a free call</div>
    </div>
  );
};

export default BannerButton;
