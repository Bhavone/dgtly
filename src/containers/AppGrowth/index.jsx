import { appGrowthBanner } from "../../constant/banner";
import { ourServiceInclude } from "../../constant/ourServiceInclude";
import { retailClientData } from "../../constant/retailClient";

import ConversionBanner from "../../components/conversionBanner";

import ConversionRate from "../../components/ConversionRate";
import FintechClient from "../../components/FintechClient";
import LetsTogether from "../../components/LetsTogether";
import PartnerWithUs from "../../components/PartnerWithUs";

const AppGrowth = () => {
  return (
    <div className="container ">
      <ConversionBanner
        cipData={appGrowthBanner?.cipData}
        headingOverRide={true}
        heading={appGrowthBanner?.heading}
        subHeading={appGrowthBanner?.subHeading}
        detail={appGrowthBanner?.detail}
        bannerImage={appGrowthBanner?.bannerImage}
      />
      <ConversionRate
        minHeight={true}
        ourService={ourServiceInclude}
        className="conversionModify"
        modifyHeight={true}
      />
      <FintechClient minHeight={true} finTechClient={retailClientData} />
      <PartnerWithUs />
      <LetsTogether />
    </div>
  );
};

export default AppGrowth;
