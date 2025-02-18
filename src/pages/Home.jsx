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

      {/* Image Section (Replaced the Video with PNG Image) */}
      <div style={styles.imageContainer}>
        <img
          src="/ren.png" // Replace with the path to your PNG image
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
    zIndex: 10, // Higher than the background in Welcome
    width: "100%",
<<<<<<< HEAD
    height: "100%",
=======
    height: "200vh",
>>>>>>> fa2dd544c7d1e078b64ab81995f691bbd4653c84
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.7)", // Slight overlay for visibility
<<<<<<< HEAD
<<<<<<< HEAD
    marginBottom: "300px",
=======
    marginBottom:"300px",
    marginTop:"40px",
>>>>>>> 2ab000bfd48616bec94c3c56e1dddd225e7781d8
=======
    marginBottom:"30vh",
>>>>>>> fa2dd544c7d1e078b64ab81995f691bbd4653c84
  },
  image: {
    width: "100%", // Adjust width
    maxHeight: "90vh",
    objectFit: "cover",
    borderRadius: "10px", // Optional rounded corners
  },
};

export default Home;
