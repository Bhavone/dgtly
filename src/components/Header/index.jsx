import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";

import { PopupButton } from "react-calendly";
import { scheduleLink } from "../../constant/scheduleLink";

import ScheduleCallButton from "../ScheduleCallButton";
import useScreenMobile from "../../hooks/useScreen";

// import websiteLogo from "../../assets/images/header/websiteLogo.svg";
import websiteLogo from "../../assets/images/header/LogoDGTLY.png";
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
    image: conversion,
    link: "/conversion",
  },
  {
    id: 2,
    navName: "App Growth Consulting",
    image: appGrowth,
    link: "/app-growth",
  },
  {
    id: 3,
    navName: "Digital strategy",
    image: digitalImage,
    link: "/digital",
  },
];

const Header = ({zIndexSetUp,setZIndexSetUp}) => {
  const isMobile = useScreenMobile({ size: 992 });
  const [menuOpen, setMenuOpen] = useState(false);
  const [onHover, setOnHover] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const navigate = useNavigate();
  // const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

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
      setTimeout(() => setIsVisible(false), 500);
    }
  }, [menuOpen]);

  // useEffect(() => {
  //   if (location.pathname === "/" && performance.navigation.type !== 1) {
  //     const aboutSection = document.getElementById("aboutUs");
  //     if (aboutSection) {
  //       aboutSection.scrollIntoView();
  //     }
  //   }
  // }, [location]);

  const handleAboutUs = (e) => {
    e.preventDefault();
    navigate("/");

    setTimeout(() => {
      const aboutSection = document.getElementById("aboutUs");
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  const handleAboutUsMobile = (e) => {
    e.preventDefault();
    navigate("/");
    setMenuOpen(false);

    setTimeout(() => {
      const aboutSection = document.getElementById("aboutUs");
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  const handleContactUsMobile = () => {
    navigate("/contact-us");
    window.scrollTo({ top: 0 });
    setMenuOpen(false);
  };

  return (
    <>
      <div className="container headerContainer" style={{zIndex: zIndexSetUp ? "3": ""}}>
        <div className="logoWrapper">
          <Link
            to="/"
            onClick={() => {
              window.scrollTo({ top: 0 });
            }}
          >
            <img className="websiteLogo" src={websiteLogo} alt="websiteLogo" />
          </Link>
        </div>
        {!isMobile && (
          <ul className="navContent">
            <Link to="/" onClick={handleAboutUs}>
              <li>About Us</li>
            </Link>

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
                      <Link
                        key={index}
                        to={item.link}
                        onClick={() => {
                          window.scrollTo({ top: 0 });
                        }}
                      >
                        <div className="navDetails">
                          <h5 className="navDetailslink">
                            <img src={item?.image} alt="" />
                            {item?.navName}
                          </h5>
                          <img src={rightArrow} alt="" />
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                ""
              )}
            </li>
            <Link to="/contact-us">
              <li>Contact Us </li>
            </Link>
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
          <div className="ButtonContainer">
            <ScheduleCallButton />

            <PopupButton
              url={scheduleLink}
              rootElement={document.getElementById("root")}
              text="Click here to schedule!"
              className="child"
            />
          </div>
        )}
      </div>

      {isMobile ? (
        <div className={`mobileNavOpen ${isVisible ? "show" : ""}`}>
          <ul className="navContent">
            <li onClick={handleAboutUsMobile}>About Us</li>

            {/* <li>About Us</li> */}
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
                      <Link key={index} to={item.link}>
                        <div
                          key={index}
                          className="navDetails"
                          onClick={() => {
                            setIsVisible(false);
                            setMenuOpen(false);
                            window.scrollTo({ top: 0 });
                          }}
                        >
                          <h5 className="navDetailslink">
                            <img src={item?.image} alt="" />
                            {item?.navName}
                          </h5>
                          <img src={rightArrow} alt="" />
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <li
              onClick={() => {
                handleContactUsMobile();
              }}
            >
              Contact Us{" "}
            </li>
          </ul>

          <div className="ButtonContainer">
            <ScheduleCallButton />

            <PopupButton
              url={scheduleLink}
              rootElement={document.getElementById("root")}
              text="Click here to schedule!"
              className="child"
            />
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Header;
