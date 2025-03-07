/* eslint-disable react/prop-types */

import { useState } from "react";
import FadeUp from "../../hooks/FadeUp";

import star from "../../assets/images/aboutUs/star.svg";
import dataDriven from "../../assets/images/conversion/dataDriven.svg";
import dataDrivenGif from "../../assets/gifs/dataDriven.gif";
import market from "../../assets/images/digital/market.svg";
import marketGif from "../../assets/gifs/market.gif";
import growth from "../../assets/images/digital/growth.svg";
import growthGif from "../../assets/gifs/growth.gif";

import "./duplicate.scss";

const DigitalThreeSteps = ({ minHeight, modifyClass = "", modifyHeight }) => {
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
          Our 3-Step Product Launch & Growth Framework
        </h4>
      </FadeUp>
      <div className="cardsContainer">
        <div className="cardWrapper">
          <div
            className="card"
            onMouseEnter={() => handleMouseEnter(1)}
            onMouseLeave={() => handleMouseLeave(1)}
            style={{
              background: hoverStates[1] ? "#ECF2FA" : "",
              minHeight: modifyHeight ? "686px" : "",
            }}
          >
            <div className="cardDetailContainer">
              <div className="imageWrapper">
                <img
                  src={hoverStates[1] ? dataDrivenGif : dataDriven}
                  alt="cardImage"
                  className="cardImage"
                />
              </div>
              <div className="cardContent">
                <div
                  className={`cardHeadingContainer ${minHeight ? "cardDetailMinHeight" : ""}`}
                >
                  <FadeUp>
                    <h5 className="cardHeading">
                      Product Ideation & Human-Centered Design Sprint
                    </h5>
                  </FadeUp>
                  <p className="cardDetail ">
                    We collaborate with your team to{" "}
                    <span className="highlight">
                      rapidly prototype, test, and refine
                    </span>{" "}
                    your product using{" "}
                    <span className="highlight">
                      human-centered design principles.
                    </span>
                  </p>
                  <div className="subHeadingBenefit">
                    <FadeUp>
                      <div className="listWrapper">
                        <img src={star} alt="" />
                        <p>
                          <span className="highlight">
                            Customer Research & Persona Development
                          </span>{" "}
                          – Identify key user needs and pain points.
                        </p>
                      </div>
                    </FadeUp>
                    <FadeUp>
                      <div className="listWrapper">
                        <img src={star} alt="" />
                        <p>
                          <span className="highlight">
                            Rapid Prototyping & Usability Testing
                          </span>
                          – Build and test interactive mockups before
                          development
                        </p>
                      </div>
                    </FadeUp>
                    <FadeUp>
                      <div className="listWrapper">
                        <img src={star} alt="" />
                        <p>
                          <span className="highlight">
                            MVP Development Roadmap{" "}
                          </span>
                          –Define the core features to launch efficiently.
                        </p>
                      </div>
                    </FadeUp>
                  </div>
                  <div>
                    <p className="cardDetail "></p>
                    <p className="cardDetail "></p>
                    <p className="cardDetail cardDetailSecond"></p>
                  </div>
                </div>
                <div className="subHeadingContainer">
                  <FadeUp>
                    <h5
                      className="cardHeading"
                      //   style={{ paddingBottom: item?.space ? "33px" : "" }}
                    >
                      Why This Matters:
                    </h5>
                  </FadeUp>
                  <div className="subHeadingBenefit">
                    <FadeUp>
                      <div className="listWrapper">
                        <img src={star} alt="" />
                        <p>
                          Ensures you build{" "}
                          <span className="highlight">
                            what your users actually need.
                          </span>
                        </p>
                      </div>
                    </FadeUp>
                    <FadeUp>
                      <div className="listWrapper">
                        <img src={star} alt="" />
                        <p>
                          Saves time and resources by{" "}
                          <span className="highlight">
                            validating ideas before launch.
                          </span>
                        </p>
                      </div>
                    </FadeUp>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cardWrapper">
          <div
            className="card"
            onMouseEnter={() => handleMouseEnter(2)}
            onMouseLeave={() => handleMouseLeave(2)}
            style={{
              background: hoverStates[2] ? "#ECF2FA" : "",
              minHeight: modifyHeight ? "686px" : "",
            }}
          >
            <div className="cardDetailContainer">
              <div className="imageWrapper">
                <img
                  src={hoverStates[2] ? marketGif : market}
                  alt="cardImage"
                  className="cardImage"
                />
              </div>
              <div className="cardContent">
                <div
                  className={`cardHeadingContainer ${minHeight ? "cardDetailMinHeight" : ""}`}
                >
                  <FadeUp>
                    <h5 className="cardHeading">
                      Go-To-Market (GTM) & Marketing Strategy{" "}
                    </h5>
                  </FadeUp>
                  <p className="cardDetail ">
                    We create a{" "}
                    <span className="highlight">holistic launch plan</span> that
                    combines{" "}
                    <span className="highlight">
                      growth marketing, paid media, and organic strategies
                    </span>{" "}
                    to drive user acquisition{" "}
                  </p>
                  <div className="subHeadingBenefit">
                    <FadeUp>
                      <div className="listWrapper">
                        <img src={star} alt="" />
                        <p>
                          <span className="highlight">
                            Brand Positioning & Messaging{" "}
                          </span>
                          – Craft a compelling story that resonates with your
                          audience
                        </p>
                      </div>
                    </FadeUp>
                    <FadeUp>
                      <div className="listWrapper">
                        <img src={star} alt="" />
                        <p>
                          <span className="highlight">
                            Paid & Organic Marketing Strategy{" "}
                          </span>
                          – Set up performance-driven campaigns for maximum
                          reach.
                        </p>
                      </div>
                    </FadeUp>
                    <FadeUp>
                      <div className="listWrapper">
                        <img src={star} alt="" />
                        <p>
                          <span className="highlight">
                            App Store & Web Optimization
                          </span>{" "}
                          – Ensure high conversion rates from your landing pages
                          & app store listings
                        </p>
                      </div>
                    </FadeUp>
                  </div>
                  <div>
                    <p className="cardDetail "></p>
                    <p className="cardDetail "></p>
                    <p className="cardDetail cardDetailSecond"></p>
                  </div>
                </div>
                <div className="subHeadingContainer">
                  <FadeUp>
                    <h5
                      className="cardHeading"
                      //   style={{ paddingBottom: item?.space ? "33px" : "" }}
                    >
                      Why This Matters:
                    </h5>
                  </FadeUp>
                  <div className="subHeadingBenefit">
                    <FadeUp>
                      <div className="listWrapper">
                        <img src={star} alt="" />
                        <p>
                          Maximize your visibility and reach from the start.
                        </p>
                      </div>
                    </FadeUp>
                    <FadeUp>
                      <div className="listWrapper">
                        <img src={star} alt="" />
                        <p>
                          Drives targeted, high-intent users to your product.
                        </p>
                      </div>
                    </FadeUp>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cardWrapper">
          <div
            className="card"
            onMouseEnter={() => handleMouseEnter(3)}
            onMouseLeave={() => handleMouseLeave(3)}
            style={{
              background: hoverStates[3] ? "#ECF2FA" : "",
              minHeight: modifyHeight ? "686px" : "",
            }}
          >
            <div className="cardDetailContainer">
              <div className="imageWrapper">
                <img
                  src={hoverStates[3] ? growthGif : growth}
                  alt="cardImage"
                  className="cardImage"
                />
              </div>
              <div className="cardContent">
                <div
                  className={`cardHeadingContainer ${minHeight ? "cardDetailMinHeight" : ""}`}
                >
                  <FadeUp>
                    <h5 className="cardHeading">
                      Analytics, Growth, & Optimization{" "}
                    </h5>
                  </FadeUp>
                  <p className="cardDetail ">
                    A successful launch is only the beginning. We set up the
                    right tracking and analytics to ensure continuous
                    improvement.{" "}
                  </p>
                  <div className="subHeadingBenefit">
                    <FadeUp>
                      <div className="listWrapper">
                        <img src={star} alt="" />
                        <p>
                          <span className="highlight">
                            {" "}
                            Event Tracking & Conversion Analytics
                          </span>
                          – Implement{" "}
                          <span className="highlight">
                            Google Analytics, Firebase, or Adjust
                          </span>{" "}
                          for accurate performance tracking.
                        </p>
                      </div>
                    </FadeUp>
                    <FadeUp>
                      <div className="listWrapper">
                        <img src={star} alt="" />
                        <p>
                          <span className="highlight">A/B Testing & CRO</span> –
                          Optimize landing pages, onboarding, and purchase flows
                          for higher conversions.
                        </p>
                      </div>
                    </FadeUp>
                    <FadeUp>
                      <div className="listWrapper">
                        <img src={star} alt="" />
                        <p>
                          <span className="highlight">
                            Growth & Monetization Strategy
                          </span>{" "}
                          –  Leverage retention loops, referral programs, and
                          pricing models to
                          <span className="highlight">
                            maximize lifetime value (LTV).
                          </span>
                        </p>
                      </div>
                    </FadeUp>
                  </div>
                  <div>
                    <p className="cardDetail "></p>
                    <p className="cardDetail "></p>
                    <p className="cardDetail cardDetailSecond"></p>
                  </div>
                </div>
                <div className="subHeadingContainer">
                  <FadeUp>
                    <h5
                      className="cardHeading"
                      //   style={{ paddingBottom: item?.space ? "33px" : "" }}
                    >
                      Why This Matters:
                    </h5>
                  </FadeUp>
                  <div className="subHeadingBenefit">
                    <FadeUp>
                      <div className="listWrapper">
                        <img src={star} alt="" />
                        <p>
                          Ensures{" "}
                          <span className="highlight">
                            every marketing dollar is optimized for ROI.
                          </span>
                        </p>
                      </div>
                    </FadeUp>
                    <FadeUp>
                      <div className="listWrapper">
                        <img src={star} alt="" />
                        <p>
                          Helps you scale with{" "}
                          <span className="highlight">
                            data-backed growth strategies.
                          </span>
                        </p>
                      </div>
                    </FadeUp>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DigitalThreeSteps;
