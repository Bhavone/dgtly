/* eslint-disable react/prop-types */
import useScreenMobile from "../../hooks/useScreen";

import "./conversionBanner.scss";

const ConversionBanner = ({
  cipData,
  heading,
  subHeading,
  detail,
  bannerImage,
  headingOverRide,
  modifyClass =""
}) => {
  const isMobile = useScreenMobile({ size: 992 });
  return (
    <div className={`container conversionBannerContainer ${modifyClass}`}>
      <div className="bannerContent">
        <div className="bannerCip">
          <p className="bannerCipContent">{cipData}</p>
        </div>
        <h3
          className="bannerHeading"
          style={{
            maxWidth: headingOverRide ? (isMobile ? "96%" : "76%") : "",
          }}
        >
          {heading}
        </h3>
        <div className="bannerData">
          <p className="bannerSubHeading">{subHeading}</p>

          <p className="bannerDetail">{detail}</p>
        </div>
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
