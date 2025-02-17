import React from 'react';
import Schedule from '../components/Schedule';
import RegisterCard from '../components/RegisterCard';
import Welcome from '../components/Welcome';

const About = () => {
  return (
    <>
      {/* Background Video Container */}
      <div style={styles.heroContainer}>
        <video autoPlay loop muted style={styles.heroVideo}>
          <source src="/13138099_1920_1080_30fps.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Main Content */}
      <div style={styles.contentContainer}>
        <Welcome />
        <div style={styles.scheduleContainer}>
          <Schedule />
        </div>
        <RegisterCard />
      </div>
    </>
  );
};

export default About;

const styles = {
  heroContainer: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: -1, // Moves the video to the background
  },
  heroVideo: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    position: "absolute",
    top: 0,
    left: 0,
  },
  contentContainer: {
    position: "relative",
    zIndex: 2, // Ensures all content is above the video
    color: "white",
    textAlign: "center",
    padding: "50px 0", // Adjust spacing if needed
  },
  scheduleContainer: {
    zIndex: 3, // Ensures Schedule stays visible
    position: "relative",
    padding: "20px",
    borderRadius: "10px",
  },
};
