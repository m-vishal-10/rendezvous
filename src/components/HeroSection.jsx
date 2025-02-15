import React from "react";

const HeroSection = () => {
  return (
    <div style={styles.heroContainer}>
      <video autoPlay loop muted style={styles.heroVideo}>
        <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div style={styles.heroContent}>
        <h1 style={styles.glow}>Welcome to Rendezvous 2K25</h1>
      </div>
    </div>
  );
};

const styles = {
  heroContainer: {
    position: "relative",
    width: "100%",
    height: "100vh",
    overflow: "hidden",
  },
  heroVideo: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    position: "absolute",
    top: 0,
    left: 0,
  },
  heroContent: {
    position: "relative",
    zIndex: 1,
    textAlign: "center",
    color: "white",
    top: "50%",
    transform: "translateY(-50%)",
  },
  glow: {
    fontSize: "80px",
    color: "white",
    textShadow: "0 0 20px #ff4da6, 0 0 30px #e60073",
  },
};

export default HeroSection;
