import { useState } from "react";
import FadeUp from "../../hooks/FadeUp";

import digitalImage from "../../assets/images/ourService/digitalImage.svg";
import appGrowth from "../../assets/images/ourService/appGrowth.svg";
import conversion from "../../assets/images/ourService/conversion.svg";
import upArrow from "../../assets/images/ourService/upArrow.svg";

import digitalGif from "../../assets/gifs/digital.gif";
import appGif from "../../assets/gifs/app.gif";
import conversionGif from "../../assets/gifs/conversion.gif";

import "./ourService.scss";

const ourService = [
  {
    id: 1,
    image: conversion,
    heading: "Conversion Rate Optimisation",
    question: "Looking to increase conversion rates? ",
    detail:
      "We enhance your website user experience with insights, funnel analysis, speed and performance reviews, and accessibility audits—helping you 10X your conversions be it lead generation or purchase",
    gif: conversionGif
  },

  {
    id: 2,
    image: appGrowth,
    heading: "App Growth Consulting",
    question: "Looking to accelerate app growth?",

    detail:
      "Our data-driven approach combines market research, monetisation strategies, and expert audits to optimize user journeys, enhance App Store visibility, and create high-performing content—ensuring sustained success",
    gif: appGif
  },
  {
    id: 3,
    image: digitalImage,
    heading: "Digital Strategy",
    question: "Looking to launch your brand online? ",
    detail:
      "Leverage our human-centered design sprint to build your product together with a marketing and launch strategy to maximize ROI",

    gif: digitalGif
  }
];

const OurService = () => {
  const [hoverStates, setHoverStates] = useState({});

  const handleMouseEnter = (id) => {
    setHoverStates((prev) => ({ ...prev, [id]: true }));
  };

  const handleMouseLeave = (id) => {
    setHoverStates((prev) => ({ ...prev, [id]: false }));
  };

  return (
    <div className="container ourServiceContainer">
      <FadeUp>
        <h4 className="commonHeading">Our Services</h4>
      </FadeUp>
      <div className="cardsContainer">
        {ourService.map((item, index) => (
          <div className="cardWrapper" key={index}>
            <div
              className="card"
              onMouseEnter={() => handleMouseEnter(item.id)}
              onMouseLeave={() => handleMouseLeave(item.id)}
              style={{
                background: hoverStates[item.id] ? "#ECF2FA" : ""
              }}
            >
              <div className="cardDetailContainer">
                <img
                  src={hoverStates[item.id] ? item.gif : item.image}
                  alt="cardImage"
                  className="cardImage"
                />
                <div className="cardContent">
                  <div className="cardHeadingContainer">
                    <FadeUp>
                      <h5 className="cardHeading">{item.heading}</h5>
                    </FadeUp>
                    <FadeUp>
                      <p className="cardQuestion">{item?.question}</p>
                    </FadeUp>
                  </div>
                  <FadeUp>
                    <p
                      className="cardDetail"
                      style={{ paddingBottom: item.paddingBottom }}
                    >
                      {item.detail}
                    </p>
                  </FadeUp>
                </div>
              </div>
              <FadeUp>
                <p className="learnMore">
                  Learn more
                  <img src={upArrow} alt="" />
                </p>
              </FadeUp>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurService;
