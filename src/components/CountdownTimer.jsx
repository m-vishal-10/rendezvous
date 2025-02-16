import React, { useState, useEffect } from "react";

const CountdownTimer = () => {
  const targetDate = new Date("March 17, 2025 00:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const now = new Date().getTime();
    const difference = targetDate - now;
    
    if (difference < 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((difference % (1000 * 60)) / 1000),
    };
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={styles.container}>
      <div style={styles.timer}>
        {timeLeft.days} &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; {timeLeft.hours} &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; {timeLeft.minutes} &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; {timeLeft.seconds}
      </div>
      <div style={styles.labels}>
        Days &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Hours &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Minutes &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Seconds
      </div>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    marginTop: "20px",
    zIndex: "1", //CHANGED
  },
  timer: {
    fontSize: "36px",
    fontWeight: "bold",
    color: "#fff",
    letterSpacing: "2px",
    padding: "10px",
  },
  labels: {
    fontSize: "20px",
    fontWeight: "500",
    color: "#ccc",
    marginTop: "5px",
  }
};

export default CountdownTimer;
        