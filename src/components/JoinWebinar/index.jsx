import { useNavigate } from "react-router-dom";
import calenderImage from "../../assets/images/herosection/calendar.svg";
import "./joinWebinar.scss";

const JoinWebinar = () => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate("/contact-us");
  };
  return (
    <div className="container webinarContainer" onClick={handleRedirect}>
      <img src={calenderImage} alt="" />
      <p>Watch our latest webinar</p>
    </div>
  );
};

export default JoinWebinar;
