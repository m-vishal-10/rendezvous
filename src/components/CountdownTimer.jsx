import React, { useState, useEffect } from "react";

const CountdownTimer = () => {
  const targetDate = new Date("March 17, 2025 00:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

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
    
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    window.addEventListener("resize", handleResize);
    
    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Responsive styling based on screen width
  const isMobile = windowWidth < 768;

  const styles = {
    container: {
      textAlign: "center",
      marginTop: "30px",
      zIndex: "1",
      padding: isMobile ? "40px" : 0,
    },
    timer: {
      fontSize: isMobile ? "24px" : "36px",
      fontWeight: "bold",
      color: "#fff",
      letterSpacing: isMobile ? "1px" : "2px",
      padding: "10px",
      display: "flex",
      justifyContent: "center",
      flexWrap: isMobile ? "wrap" : "nowrap",
    },
    timeSection: {
      display: "flex",
      flexDirection: "column",
      margin: isMobile ? "0 5px" : "0 10px",
    },
    timeValue: {
      fontSize: isMobile ? "28px" : "36px",
    },
    timeLabel: {
      fontSize: isMobile ? "14px" : "18px",
      color: "#ccc",
      marginTop: "5px",
    },
    divider: {
      alignSelf: "center",
      fontSize: isMobile ? "24px" : "36px",
      margin: isMobile ? "0 5px" : "0 10px",
      color: "#fff",
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.timer}>
        <div style={styles.timeSection}>
          <div style={styles.timeValue}>{timeLeft.days}</div>
          <div style={styles.timeLabel}>Days</div>
        </div>
        
        <div style={styles.divider}>|</div>
        
        <div style={styles.timeSection}>
          <div style={styles.timeValue}>{timeLeft.hours}</div>
          <div style={styles.timeLabel}>Hours</div>
        </div>
        
        <div style={styles.divider}>|</div>
        
        <div style={styles.timeSection}>
          <div style={styles.timeValue}>{timeLeft.minutes}</div>
          <div style={styles.timeLabel}>Minutes</div>
        </div>
        
        <div style={styles.divider}>|</div>
        
        <div style={styles.timeSection}>
          <div style={styles.timeValue}>{timeLeft.seconds}</div>
          <div style={styles.timeLabel}>Seconds</div>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;