import React from "react";

const HeroSection = () => {
  return (
    <div style={styles.heroContainer}>
      <video autoPlay loop muted style={styles.heroVideo}>
        <source src="/public/intro.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

const styles = {
  heroContainer: {
    position: "relative",
    top: -79,
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
};

export default HeroSection;
