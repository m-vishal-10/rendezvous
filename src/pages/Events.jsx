import React from 'react';
import { useNavigate } from "react-router-dom";
import '../Events.css';


import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useRef } from "react";

const Events = () => {
  const navigate = useNavigate();
  const nonTechnicalRef = useRef(null);

  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    if (params.get("section") === "non-technical" && nonTechnicalRef.current) {
      const navbarHeight = 175; // Adjust this based on your navbar height
      const elementPosition = nonTechnicalRef.current.getBoundingClientRect().top + window.scrollY;
      
      window.scrollTo({
        top: elementPosition - navbarHeight,
        behavior: "smooth",
      });
    }
  }, [location]);


  const technicalEvents = [
    {
      title: "Paper Presentation",
      description: "Showcase your research and innovation at the Paper Presentation Challenge! Present groundbreaking ideas, cutting-edge solutions, or revolutionary technologies to an esteemed panel of judges.",
      video: "/Paperpresentation.mp4", // Updated path
      navigatePath: "/inside"
    },
    {
      title: "Battle of Coders",
      description: "Battle it out in an intense coding competition where only the strongest algorithms survive.",
      video: "/battleofcoders.mp4", // Updated path
      navigatePath: "/inside2"
    },
    {
      title: "Shark Tank",
      description: "Shark Tank is a high-stakes event where participants pitch unique products to a panel of 'investors.' It tests quick thinking, creativity, and entrepreneurial flair.",
      video: "/244006_medium.mp4", // Updated path
      navigatePath: "/inside3"
    },
    {
      title: "Pixel Playground (UI)",
      description: "Pixel Playground is a design competition challenging your skills in logo creation and UI/UX design. Test your creativity, problem-solving, and speed to create stunning visuals!",
      video: "/pixelplayground.mp4", // Updated path
      navigatePath: "/inside4"
    },
  ];

  const nonTechnicalEvents = [
    {
      title: "IPL Auction",
      description: "Enter the IPL Mock Auction, where you bid on players, balance your budget, and outsmart rivals. Only the best strategist will emerge victorious!",
      video: "/ipl.mp4", // Updated path
      navigatePath: "/inside5"
    },
    {
      title: "Squid Verse",
      description: "Enter the fun game where we will simulate the squid game, Play interesting events and win the contest to get amazing rewards",
      video: "/Clash of Clans.mp4", // Updated path
      navigatePath: "/inside6"
    },
  ];

  const createEventCard = (event) => {
    return (
      <div style={styles.eventCard} key={event.title}>
        <video
          autoPlay
          loop
          muted
          playsInline
          style={styles.videoBackground}
          aria-label={`Background video for ${event.title}`} // Accessibility
        >
          <source src={event.video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div style={styles.eventContent}>
          <h3 style={styles.eventTitle}>{event.title}</h3>
          <p style={styles.eventDescription}>{event.description}</p>
          <button style={styles.button} onClick={() => navigate(event.navigatePath)}>
            Know More
          </button>
        </div>
      </div>
    );
  };

  return (
  <>
  {/* Background Video */}
  <div style={styles.heroContainer}>
        <video autoPlay loop muted style={styles.heroVideo}>
          <source src="/13138099_1920_1080_30fps.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
    </div>
    <div style={styles.eventsContainer}>
      {/* Move Headers Above the Hero Video */}
      <h2 style={styles.sectionTitle}>Technical Events</h2>
      <div style={styles.eventsGrid}>
        {technicalEvents.map((event) => createEventCard(event))}
      </div>

      <h2 style={styles.sectionTitle} ref={nonTechnicalRef}>Non-Technical Events</h2>
      <div style={styles.eventsGrid}>
        {nonTechnicalEvents.map((event) => createEventCard(event))}
      </div>
    </div>
  </>
);

};

// Define all styles as a const object
const styles = {
  // heroContainer: {
  //   position: "fixed",
  //   top: 0,
  //   zIndex: 0,
  //   height: "100%",
  //   width: "100%",
  //   display: "flex", // Assuming `items-center` refers to flex centering
  //   alignItems: "center",
  //   paddingLeft: "1.25rem", // px-5 (5 * 4px = 20px)
  //   paddingRight: "1.25rem",
  //   paddingTop: "6rem", // py-24 (24 * 4px = 96px)
  //   paddingBottom: "6rem",
  //   // background:
  //   //   "radial-gradient(125% 125% at 50% 10%, #000 40%, #63e 100%)",
  // },
  eventsContainer: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "2rem",
    position: "relative",
    zIndex: 2,
  },
  sectionTitle: {
    fontFamily: "'Black Han Sans', sans-serif",
    color: "#fff",
    fontSize: "3.5rem",
    textAlign: "center",
    textTransform: "uppercase",
    margin: "2rem 0",
    textShadow: "0 0 20px rgba(255, 255, 255, 0.5)",
    letterSpacing: "4px",
    zIndex: 3,
    position: "relative",
  },
  eventsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "2rem",
    marginBottom: "15rem",
  },
  videoBackground: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: "15px",
    zIndex: -1,
    opacity:"0.4",
  },
  eventCard: {
    backgroundSize: "100% 100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    backgroundBlendMode: "overlay",
    border: "2px solid #fff",
    borderRadius: "15px",
    overflow: "hidden",
    transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
    position: "relative",
    transformOrigin: "center",
    transform: "translateY(0)",
  
    height: "400px",
    width: "100%",
    ":hover": {
      transform: "translateY(-30px)",
      boxShadow:
        "0 0 20px rgba(255, 255, 255, 0.4), 0 0 40px rgba(255, 255, 255, 0.3), 0 0 60px rgba(255, 255, 255, 0.2)",
    },
  },
  eventContent: {
    padding: "1.5rem",
    textAlign: "center",
    transform: "translateY(0)",
    transition: "transform 0.5s ease",
    ":hover": {
      transform: "translateY(-5px)",
    },
  },
  eventTitle: {
    fontFamily: "'Black Han Sans', sans-serif",
    color: "#fff",
    fontSize: "1.8rem",
    marginBottom: "4rem",
    textTransform: "uppercase",
    letterSpacing: "2px",
  },
  eventDescription: {
    color: "#fff",
    marginBottom: "1.5rem",
    fontSize: "1rem",
    lineHeight: "1.5",
    opacity: 0.9,
  },
  button: {
    fontSize: "20px",
    padding: "10px 20px",
    border: "none",
    backgroundColor: "white",
    color: "black",
    cursor: "pointer",
    borderRadius: "5px",
    transition: "background 0.3s",
    zIndex: 15,
    position: "relative",
    pointerEvents: "auto",
    ":hover": {
      backgroundColor: "#fff",
      color: "#000",
      boxShadow: "0 0 20px rgba(255, 255, 255, 0.5)",
      transform: "scale(1.05)",
    },
  },
  
  // heroContainer: {
  //   position: "absolute",
  //   top: 0,
  //   zIndex: 1,
  //   width: "100%",
  //   height: "100%",
  //   overflow: "hidden",
  // },
  // heroVideo: {
  //   width: "100%",
  //   height: "100%",
  //   objectFit: "cover",
  //   position: "absolute",
  //   top: 0,
  //   left: 0,
  // },
  heroContainer: {
    position: "fixed",
    top: 0,
    zIndex: 0,
    height: "100%",
    width: "100%",
    display: "flex", // Assuming `items-center` refers to flex centering
    alignItems: "center",
    paddingLeft: "1.25rem", // px-5 (5 * 4px = 20px)
    paddingRight: "1.25rem",
    paddingTop: "6rem", // py-24 (24 * 4px = 96px)
    paddingBottom: "6rem",
    // background:
    //   "radial-gradient(125% 125% at 50% 10%, #000 40%, #63e 100%)",
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

export default Events;