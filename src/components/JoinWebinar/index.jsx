import { useNavigate } from "react-router-dom";
import calenderImage from "../../assets/images/herosection/calendar.svg";
import "./joinWebinar.scss";

const JoinWebinar = () => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate("/webinar");
  };
  return (
    <div className="container webinarContainer" onClick={handleRedirect}>
      <img src={calenderImage} alt="" />
      <p>Join our free CRO webinar</p>
    </div>
  );
};

export default JoinWebinar;
