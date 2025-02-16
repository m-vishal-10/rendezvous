import React from "react";

const HeroSection = () => {
  return (
    <div style={styles.heroContainer}>
      <video autoPlay loop muted style={styles.heroVideo}>
        <source src="/public/13138099_1920_1080_30fps.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

const styles = {
  heroContainer: {
    position: "absolute",
    top: 0,
    zIndex: 1,
    width: "100%",
    height: "100%",
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
