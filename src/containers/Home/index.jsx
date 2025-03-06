import AboutUs from "../../components/AboutUs";
import Carousel from "../../components/Carousel";
import ExpertPartners from "../../components/ExpertPartners";

import HomeBanner from "../../components/HomeBanner";
import LetsTogether from "../../components/LetsTogether";
import OurService from "../../components/OurService";

const Home = () => {
  return (
    <>
      <HomeBanner />

      <OurService />
      <AboutUs />
      <ExpertPartners />
      <Carousel />
      <LetsTogether />
    </>
  );
};

export default Home;
