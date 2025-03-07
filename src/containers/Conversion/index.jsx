import { conversionBanner } from "../../constant/banner";
import { conversionOptimisationData } from "../../constant/conversionOptimisation";
import { finTechClientData } from "../../constant/fintechClient";

import ConversionBanner from "../../components/conversionBanner";

import ConversionRate from "../../components/ConversionRate";
import FintechClient from "../../components/FintechClient";
import LetsTogether from "../../components/LetsTogether";

const Conversion = () => {
  return (
    <div className="container conversionContainer">
      <ConversionBanner
        cipData={conversionBanner?.cipData}
        heading={conversionBanner?.heading}
        subHeading={conversionBanner?.subHeading}
        detail={conversionBanner?.detail}
        bannerImage={conversionBanner?.bannerImage}
      />
      <ConversionRate
        ourService={conversionOptimisationData}
        className="conversionModifyOptimize"
      />
      <FintechClient finTechClient={finTechClientData} />
      <LetsTogether />
    </div>
  );
};

export default Conversion;
