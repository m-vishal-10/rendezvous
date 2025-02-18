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
    padding: "50px 0",
    boxShadow: "0 0 10px rgb(255, 255, 255)",
     // Adjust spacing if needed
  },
  scheduleContainer: {
    zIndex: 3, // Ensures Schedule stays visible
    position: "relative",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 0 10px rgb(255, 255, 255)",
  },
  eventCard: {
    position: "relative",
    background: "linear-gradient(145deg, #1a1a1a 0%, #0d0d0d 100%)",
    border: "2px solid #fff",
    borderRadius: "15px",
    overflow: "hidden",
    boxShadow: "0 0 10px rgb(255, 255, 255)",
    width: "500px", // Default width
    height: "400px", // Default height
    textAlign: "center",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    // Responsive adjustments
    "@media (max-width: 1200px)": {
      width: "400px",
      height: "350px",
    },
    "@media (max-width: 768px)": {
      width: "90%", // Reduce width to 90% of the parent container
      maxWidth: "400px", // Ensure it doesn't exceed 400px
      height: "300px",
    },
    "@media (max-width: 480px)": {
      width: "90%", // Reduce width to 90% of the parent container
      maxWidth: "350px", // Ensure it doesn't exceed 350px
      height: "250px",
    },
  },
};
