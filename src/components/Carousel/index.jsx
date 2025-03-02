import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
  Autoplay
} from "swiper/modules";
import FadeUp from "../../hooks/FadeUp";

import profilePhoto from "../../assets/images/ourService/profileImage.svg";
import arrowImage from "../../assets/images/ourService/credilinq.svg";

import rightArrow from "../../assets/images/ourService/rightArrow.svg";
import leftArrow from "../../assets/images/ourService/leftArrow.svg";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./carousel.scss";

const feedBackData = [
  {
    id: 1,
    name: "Shabnam Mansukhani",
    designation: "CMO, CrediLinq.AI",
    profileImage: profilePhoto,
    brandImage: arrowImage,
    heading: "3X increase in online leads",
    feedback:
      "DGTLY played a pivotal role in transforming CrediLinq’s direct-to-consumer (B2C) user journey. Previously, our conversion strategy was heavily reliant on our B2B approach rather than optimizing our online platform. Through design thinking workshops, mixed-method research, and comprehensive market and competitor insights, DGTLY successfully reimagined and evangelized a fully optimized user journey. As a result, we achieved a 3X increase in leads through our digital platform. Their team brings a wealth of cross-domain expertise, and we highly recommend them for businesses looking to drive digital transformation. We look forward to continued collaboration on future initiatives."
  }
];

const Carousel = () => {
  return (
    <div className="container carouselContainer">
      <h3 className="commonHeading">Client Feedback</h3>

      <div className="customNavContainer">
        <div className="swiper-button-prev">
          <img src={leftArrow} alt="Previous" />
        </div>
        <div className="swiper-button-next">
          <img src={rightArrow} alt="Next" />
        </div>
      </div>

      <Swiper
        loop={true}
        cssMode={true}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }}
        pagination={{
          clickable: true
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: false
        }}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
        className="mySwiper"
      >
        {feedBackData.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="carouselDetailContainer">
              <FadeUp>
                <h3 className="carouselHeading">{item?.heading}</h3>
              </FadeUp>
              <FadeUp>
                <h6 className="carouselDetail">{item.feedback}</h6>
              </FadeUp>

              <div className="carouselProfile">
                <div className="profileContainer">
                  <img
                    className="profileImage"
                    src={item.profileImage}
                    alt={item.name}
                  />
                  <div className="profileNameContainer">
                    <FadeUp>
                      <p className="profileName">{item.name}</p>
                    </FadeUp>
                    <FadeUp>
                      <span className="profileDesigination">
                        {item.designation}
                      </span>
                    </FadeUp>
                  </div>
                </div>
                <img src={item.brandImage} className="brandImage" alt="Brand" />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
