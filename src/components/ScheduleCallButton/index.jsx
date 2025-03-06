import "./scheduleCallButton.scss";

// eslint-disable-next-line react/prop-types
const ScheduleCallButton = ({ onclick = () => {} }) => {
  return (
    <div className="container buttonContainer" onClick={onclick}>
      <div className="scheduleCallButton">Schedule a free call</div>
    </div>
  );
};

export default ScheduleCallButton;
