import AboutUs from "../../components/AboutUs";
import Carousel from "../../components/Carousel";
import ExpertPartners from "../../components/ExpertPartners";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import HomeBanner from "../../components/HomeBanner";
import LetsTogether from "../../components/LetsTogether";
import OurService from "../../components/OurService";

const Home = () => {
  return (
    <>
      <Header />

      <HomeBanner />

      <OurService />
      <AboutUs />
      <ExpertPartners />
      <Carousel />
      <LetsTogether />
      <Footer />
    </>
  );
};

export default Home;
