import { Link } from "react-router-dom";

import anoshGupta from "../../assets/images/expertPartner/anoshGupta.png";
import ugurBilen from "../../assets/images/expertPartner/ugurBilen.png";
import linkedIn from "../../assets/images/aboutUs/linkedIn.svg";

import FadeUp from "../../hooks/FadeUp";

import "./expertPartners.scss";

const ourService = [
  {
    id: 1,
    image: anoshGupta,
    heading: "Anosh Gupta",
    detail:
      "Anosh is a seasoned digital marketeer with 18 years of experience in sales and partnerships, including a decade in Tech at Google and Amazon. Over the last few years Anosh has led Search and Display ads for Google South East Asia driving strong and quick AI adoption while being a strong advocate for using 1P data to sharpen delivery and experimenting consistently to drive media incrementality. He has also led strategy and execution of Google Marketing's on-stack media investment across India, Japan & AU/NZ. ",

    link: "https://www.linkedin.com/in/anoshgupta/"
  },
  {
    id: 2,
    image: ugurBilen,
    heading: "Ugur Bilen",
    detail:
      "Ugur is an experienced technology consultant with 15 years of expertise in digital marketing and analytics, conversion rate optimization and digital transformation. He has honed these skills at leading global technology and consulting firms, including Google and Accenture leading regional initiatives.  Adept at identifying customer needs and translating them into innovative solutions, Ugur brings a unique blend of technical expertise and business acumen to deliver impactful outcomes.",
    link: "https://www.linkedin.com/in/ugurbilen"
  }
];

const ExpertPartners = () => {
  return (
    <div className="container ourServiceContainer expertPartnersContainer">
      <FadeUp>
        <h4 className="commonHeading">Expert Partners</h4>
      </FadeUp>
      <div className="cardsContainer">
        {ourService.map((item, index) => (
          <div className="card" key={index}>
            <img className="expertImage" src={item?.image} alt="cardImage" />
            <div className="cardContent">
              <FadeUp>
                <h5 className="cardHeading expertHeading">
                  {item?.heading}
                  <Link to={item?.link} target="_blank">
                    <img className="linkedIn" src={linkedIn} alt="" />
                  </Link>
                </h5>
              </FadeUp>
              <FadeUp>
                <p className="cardDetail">{item?.detail}</p>
              </FadeUp>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExpertPartners;
