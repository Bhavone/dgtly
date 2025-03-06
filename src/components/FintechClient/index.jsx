/* eslint-disable react/prop-types */

import FadeUp from "../../hooks/FadeUp";

import star from "../../assets/images/aboutUs/star.svg";

import "./fintechClient.scss";

const FintechClient = ({ finTechClient, minHeight }) => {
  return (
    <div className="container fintechClientContainer">
      <FadeUp>
        <h4 className="commonHeading ">{finTechClient?.title}</h4>
      </FadeUp>
      <div className="cardsContainer">
        {finTechClient?.steps?.map((item, index) => (
          <div
            key={index}
            className={`cardContent ${minHeight ? "cardMinHeight" : ""}`}
          >
            <img src={item?.image} alt="" />
            <p className="cardHeading">{item?.heading}</p>
            {item?.list && (
              <div className="listContainer">
                {item.list.map((point, i) => (
                  <div key={i} className="listItem">
                    <img src={star} alt="star icon" />
                    <FadeUp>
                      <div>{point}</div>
                    </FadeUp>
                  </div>
                ))}
              </div>
            )}
            <FadeUp>
              <p className="cardDetail">{item?.detail}</p>
              {item.detail2 ? (
                <p className="cardDetail">{item?.detail2}</p>
              ) : (
                ""
              )}
            </FadeUp>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FintechClient;
