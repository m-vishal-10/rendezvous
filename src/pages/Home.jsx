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

      <div style={styles.imageContainer}>
        <img
          src="/squid3.png" // Replace with the path to your PNG image
          alt="Background"
          style={styles.image}
        />
      </div>
      <Welcome /> 
      <CountdownTimer />
      <Themes />
      <RegisterCard />
    </>
  );
};

const styles = {
  imageContainer: {
    position: "relative", 
    zIndex: 10,
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%", // Adjust width
    objectFit: "cover",
    borderRadius: "10px", // Optional rounded corners
  },
};

export default Home;
