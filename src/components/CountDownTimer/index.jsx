import { useState, useEffect } from "react";
import "./CountdownTimer.scss";

const CountDownTimer = () => {
  const targetDate = new Date(new Date().getFullYear(), 3, 25); // April 25 (Month is zero-based)

  const calculateTimeLeft = () => {
    const now = new Date();
    let difference = targetDate - now;

    if (difference < 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="countdown-timer">
      <div className="time-box">
        <p className="number">{timeLeft.days}</p>
        <p className="label">Days</p>
      </div>
      <div className="divider">|</div>
      <div className="time-box">
        <p className="number">{timeLeft.hours}</p>
        <p className="label">Hours</p>
      </div>
      <div className="divider">|</div>
      <div className="time-box">
        <p className="number">{timeLeft.minutes}</p>
        <p className="label">Minutes</p>
      </div>
      <div className="divider">|</div>
      <div className="time-box">
        <p className="number">{timeLeft.seconds}</p>
        <p className="label">Seconds</p>
      </div>
    </div>
  );
};

export default CountDownTimer;
