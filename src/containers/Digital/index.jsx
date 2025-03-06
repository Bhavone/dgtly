import ConversionBanner from "../../components/conversionBanner";
import LetsTogether from "../../components/LetsTogether";
import { digitalBanner } from "../../constant/banner";

const Digital = () => {
  return (
    <>
      <ConversionBanner
        heading={digitalBanner?.heading}
        bannerImage={digitalBanner?.bannerImage}
      />
       
      <LetsTogether
        title={"Ready to Launch with Confidence?"}
        isInitialContentNeed={false}
        isDigitalContentNeed={true}
      />
    </>
  );
};

export default Digital;
