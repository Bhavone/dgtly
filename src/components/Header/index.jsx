import { useState, useEffect } from "react";

import ScheduleCallButton from "../ScheduleCallButton";
import useScreenMobile from "../../hooks/useScreen";

import websiteLogo from "../../assets/images/header/websiteLogo.svg";
import dropDown from "../../assets/images/header/dropDownArrow.svg";
import hamburger from "../../assets/images/header/hamburger.svg";
import closeIcon from "../../assets/images/header/close.svg";
import digitalImage from "../../assets/images/header/digitalStrategyHeader.svg";
import appGrowth from "../../assets/images/header/appGrowthHeader.svg";
import conversion from "../../assets/images/header/conversionHeader.svg";
import rightArrow from "../../assets/images/header/rightArrow.svg";

import "./header.scss";

const navBar = [
  {
    id: 1,
    navName: "Conversion Rate Optimisation",
    image: conversion
  },
  {
    id: 2,
    navName: "App Growth Consulting",
    image: appGrowth
  },
  {
    id: 3,
    navName: "Digital strategy",
    image: digitalImage
  }
];

const Header = () => {
  const isMobile = useScreenMobile({ size: 700 });
  const [menuOpen, setMenuOpen] = useState(false);
  const [onHover, setOnHover] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
    return () => document.body.classList.remove("no-scroll");
  }, [menuOpen]);

  useEffect(() => {
    if (menuOpen) {
      setIsVisible(true);
    } else {
      setTimeout(() => setIsVisible(false), 500); // Matches transition time
    }
  }, [menuOpen]);

  return (
    <>
      <div className="container headerContainer">
        <div>
          <img className="websiteLogo" src={websiteLogo} alt="websiteLogo" />
        </div>
        {!isMobile && (
          <ul className="navContent">
            <li>About Us</li>
            <li
              onMouseEnter={() => {
                setOnHover(true);
              }}
              onMouseLeave={() => {
                setOnHover(false);
              }}
              style={{ position: "relative" }}
            >
              Services{" "}
              <img
                src={dropDown}
                alt="dropDownArrow"
                className={`dropdownArrow ${onHover ? "rotate" : ""}`}
              />
              {onHover ? (
                <div className="navWrapper">
                  <div
                    className="navHoverContent"
                    onMouseEnter={() => {
                      setOnHover(true);
                    }}
                    onMouseLeave={() => {
                      setOnHover(false);
                    }}
                  >
                    {navBar?.map((item, index) => (
                      <div key={index} className="navDetails">
                        <h5 className="navDetailslink">
                          <img src={item?.image} alt="" />
                          {item?.navName}
                        </h5>
                        <img src={rightArrow} alt="" />
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                ""
              )}
            </li>
            <li>Contact Us </li>
          </ul>
        )}

        {isMobile ? (
          <div
            onClick={() => {
              setMenuOpen(!menuOpen);
              setOnHover(false);
            }}
          >
            <img src={menuOpen ? closeIcon : hamburger} alt="menuIcon" />
          </div>
        ) : (
          <div>
            <ScheduleCallButton />
          </div>
        )}
      </div>

      {isMobile ? (
        <div className={`mobileNavOpen ${isVisible ? "show" : ""}`}>
          <ul className="navContent">
            <li>About Us</li>
            <div className="services">
              <li onClick={() => setOnHover(!onHover)}>
                Services
                <img
                  src={dropDown}
                  alt="dropDownArrow"
                  className={`dropdownArrow ${onHover ? "rotate" : ""}`}
                />
              </li>
              {onHover && (
                <div className={`navWrapper ${onHover ? "show" : ""}`}>
                  <div className="navHoverContent">
                    {navBar?.map((item, index) => (
                      <div key={index} className="navDetails">
                        <h5 className="navDetailslink">
                          <img src={item?.image} alt="" />
                          {item?.navName}
                        </h5>
                        <img src={rightArrow} alt="" />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <li>Contact Us </li>
          </ul>
          <ScheduleCallButton />
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Header;
