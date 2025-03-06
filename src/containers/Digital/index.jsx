import ConversionBanner from "../../components/conversionBanner";
import DigitalThreeStep from "../../components/DigitalThreeStep";
import LetsTogether from "../../components/LetsTogether";
import { digitalBanner } from "../../constant/banner";
import { digitalOptimisationData } from "../../constant/conversionOptimisation";

const Digital = () => {
  return (
    <>
      <ConversionBanner
        heading={digitalBanner?.heading}
        bannerImage={digitalBanner?.bannerImage}
      />
      <DigitalThreeStep ourService={digitalOptimisationData} />
      <LetsTogether
        title={"Ready to Launch with Confidence?"}
        isInitialContentNeed={false}
        isDigitalContentNeed={true}
      />
    </>
  );
};

export default Digital;
