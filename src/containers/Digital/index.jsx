import ConversionBanner from "../../components/conversionBanner";
import LetsTogether from "../../components/LetsTogether";
import { digitalBanner } from "../../constant/banner";
import DigitalThreeSteps from "../../components/duplicate";

const Digital = () => {
  return (
    <>
      <ConversionBanner
        modifyClass="digitalBanner"
        cipData={digitalBanner?.cipData}
        heading={digitalBanner?.heading}
        bannerImage={digitalBanner?.bannerImage}
      />
      <DigitalThreeSteps />
      <LetsTogether
        title={"Ready to Launch with Confidence?"}
        isInitialContentNeed={false}
        isDigitalContentNeed={true}
      />
    </>
  );
};

export default Digital;
