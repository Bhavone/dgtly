/* eslint-disable react/prop-types */

import { useState } from "react";
import FadeUp from "../../hooks/FadeUp";

import star from "../../assets/images/aboutUs/star.svg";

import "./digitalThreeStep.scss";

const DigitalStep = ({
  ourService,
  minHeight,
  modifyClass = "",
  modifyHeight,
}) => {
  const [hoverStates, setHoverStates] = useState({});

  const handleMouseEnter = (id) => {
    setHoverStates((prev) => ({ ...prev, [id]: true }));
  };

  const handleMouseLeave = (id) => {
    setHoverStates((prev) => ({ ...prev, [id]: false }));
  };

  return (
    <div className={`container digitalThreeStepContainer ${modifyClass}`}>
      <FadeUp>
        <h4
          className={`commonHeading ${!minHeight ? "conversionHeading" : ""}`}
        >
          {ourService?.title}
        </h4>
      </FadeUp>
      <div className="cardsContainer">
        {ourService?.step?.map((item, index) => (
          <div className="cardWrapper" key={index}>
            <div
              className="card"
              onMouseEnter={() => handleMouseEnter(item.id)}
              onMouseLeave={() => handleMouseLeave(item.id)}
              style={{
                background: hoverStates[item.id] ? "#ECF2FA" : "",
                minHeight: modifyHeight ? "686px" : "",
              }}
            >
              <div className="cardDetailContainer">
                <div className="imageWrapper">
                  <img
                    src={hoverStates[item.id] ? item.gif : item.image}
                    alt="cardImage"
                    className="cardImage"
                  />
                </div>
                <div className="cardContent">
                  <div
                    className={`cardHeadingContainer ${minHeight ? "cardDetailMinHeight" : ""}`}
                  >
                    <FadeUp>
                      <h5 className="cardHeading">{item.heading}</h5>
                    </FadeUp>
                    <p className="cardDetail ">{item?.detail1}</p>
                    <div className="subHeadingBenefit">
                      {item?.list.map((item, index) => (
                        <FadeUp key={index}>
                          <p>
                            <img src={star} alt="" />
                            {item}
                          </p>
                        </FadeUp>
                      ))}
                    </div>
                    <div>
                      <p className="cardDetail ">{item?.detail2}</p>
                      <p className="cardDetail ">{item?.detail3}</p>
                      <p className="cardDetail cardDetailSecond">
                        {item?.detail4}
                      </p>
                    </div>
                  </div>
                  <div className="subHeadingContainer">
                    <FadeUp>
                      <h5
                        className="cardHeading"
                        style={{ paddingBottom: item?.space ? "33px" : "" }}
                      >
                        {item.subHeading}
                      </h5>
                    </FadeUp>
                    <div className="subHeadingBenefit">
                      {item?.list.map((item, index) => (
                        <FadeUp key={index}>
                          <p>
                            <img src={star} alt="" />
                            {item}
                          </p>
                        </FadeUp>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DigitalStep;
