import "./scheduleCallButton.scss";

// eslint-disable-next-line react/prop-types
const ScheduleCallButton = ({ onclick = () => {} ,buttonText="Schedule a free call"}) => {
  return (
    <div className="container buttonContainer" onClick={onclick}>
      <div className="scheduleCallButton">{buttonText}</div>
    </div>
  );
};

export default ScheduleCallButton;
