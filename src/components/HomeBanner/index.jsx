import BannerButton from "../BannerButton";
import useScreenMobile from "../../hooks/useScreen";

import homeBanner from "../../assets/images/banner/homeBanner.png";
import homeBannerMobile from "../../assets/images/banner/homeBannerMobile.png";

import "./homeBanner.scss";

const HomeBanner = () => {
  const isMobile = useScreenMobile({ size: 992 });
  return (
    <div className="container homeBannerContainer">
      <div className="bannerContent">
        <h3 className="bannerHeading">Maximize your digital success</h3>
        <p className="bannerDetail">
          With best-inclass insights, strategy, UX/design and growth consulting:
          optimize your web and app to drive high engagement and ROI.
        </p>

        <div>
          <BannerButton />
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
