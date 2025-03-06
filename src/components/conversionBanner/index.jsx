/* eslint-disable react/prop-types */
import useScreenMobile from "../../hooks/useScreen";

import "./conversionBanner.scss";

const ConversionBanner = ({
  heading,
  subHeading,
  detail,
  bannerImage,
  headingOverRide,
}) => {
  const isMobile = useScreenMobile({ size: 992 });
  return (
    <div className="container conversionBannerContainer">
      <div className="bannerContent">
        <h3
          className="bannerHeading"
          style={{
            maxWidth: headingOverRide ? (isMobile ? "96%" : "76%") : "",
          }}
        >
          {heading}
        </h3>
        <p className="bannerSubHeading">{subHeading}</p>

        <p className="bannerDetail">{detail}</p>
      </div>
      <div className="bannerImageContainer">
        <img
          className="bannerImage"
          src={isMobile ? bannerImage : bannerImage}
          alt="homeBanner"
        />
      </div>
    </div>
  );
};

export default ConversionBanner;
