import React from 'react';
import CountdownTimer from '../components/CountdownTimer';
import Welcome from '../components/Welcome';
import Themes from '../components/Themes';
import RegisterCard from '../components/RegisterCard';
import HeroSection from '../components/HeroSection';

const Home = () => {
  return (
    <>
      <HeroSection />

      {/* Video Section (Placed Above Background Video) */}
      <div style={styles.videoContainer}>
      <video autoPlay loop muted style={styles.video}>
          <source src="/backnew.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <Welcome /> 
      <CountdownTimer />
      <Themes />
      <RegisterCard />
    </>
  );
};

const styles = {
  videoContainer: {
    position: "relative", 
    zIndex: 10, // Higher than the background video in Welcome
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.7)", // Slight overlay for visibility
    marginBottom:"300px",
    marginTop:"40px",
  },
  video: {
    
    width: "100%", // Adjust width
    maxHeight: "600px",
    objectFit: "cover",
    borderRadius: "10px", // Optional rounded corners
  },
};

export default Home;
