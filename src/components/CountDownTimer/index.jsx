import React, { useState, useEffect } from "react";
import "./CountdownTimer.scss"; 

const CountDownTimer = () => {
  const [time, setTime] = useState(getCurrentTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getCurrentTime());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  function getCurrentTime() {
    const now = new Date();
    return {
      days: now.getDate(),
      hours: now.getHours(),
      minutes: now.getMinutes(),
      seconds: now.getSeconds(),
    };
  }

  return (
    <div className="countdown-timer">
      <div className="time-box">
        <p className="number">{time.days}</p>
        <p className="label">Days</p>
      </div>
      <div className="divider">|</div>
      <div className="time-box">
        <p className="number">{time.hours}</p>
        <p className="label">Hours</p>
      </div>
      <div className="divider">|</div>
      <div className="time-box">
        <p className="number">{time.minutes}</p>
        <p className="label">Minutes</p>
      </div>
      <div className="divider">|</div>
      <div className="time-box">
        <p className="number">{time.seconds}</p>
        <p className="label">Seconds</p>
      </div>
    </div>
  );
};

export default CountDownTimer;
