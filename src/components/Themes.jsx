import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Themes = () => {
  const navigate = useNavigate();
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1200
  );

  useEffect(() => {
    // Animation for cards
    const cards = document.querySelectorAll(".event-card");
    cards.forEach((card, index) => {
      card.style.opacity = "0";
      card.style.transform = "translateY(50px)";
      setTimeout(() => {
        card.style.transition = "all 0.8s ease";
        card.style.opacity = "1";
        card.style.transform = "translateY(0)";
      }, index * 300);
    });

    // Window resize handler for responsiveness
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Dynamically calculate styles based on screen width
  const getCardWidth = () => {
    if (windowWidth <= 480) return "90%";
    if (windowWidth <= 768) return "80%";
    if (windowWidth <= 1024) return "45%";
    return "40%";
  };

  const getFontSize = (base, medium, small) => {
    if (windowWidth <= 480) return small;
    if (windowWidth <= 768) return medium;
    return base;
  };

  // Dynamic styles
  const dynamicStyles = {
    cardContainer: {
      display: "flex",
      flexDirection: windowWidth <= 768 ? "column" : "row",
      alignItems: "center",
      gap: windowWidth <= 768 ? "30px" : "40px",
      justifyContent: "center",
      width: "100%",
    },
    eventCard: {
      position: "relative",
      background: "linear-gradient(145deg, #1a1a1a 0%, #0d0d0d 100%)",
      border: "2px solid #fff",
      borderRadius: "15px",
      overflow: "hidden",
      boxShadow: "0 0 10px rgb(255, 255, 255)",
      width: getCardWidth(),
      height: windowWidth <= 768 ? "300px" : "400px",
      textAlign: "center",
      padding: windowWidth <= 480 ? "15px" : "20px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    cardTitle: {
      fontSize: getFontSize("2rem", "1.5rem", "1.2rem"),
      color: "#fff",
      textTransform: "uppercase",
      marginBottom: "10px",
      textShadow: "0 0 10px rgb(255, 255, 255)",
    },
    cardText: {
      fontSize: getFontSize("1rem", "0.9rem", "0.8rem"),
      color: "#ccc",
      marginBottom: "15px",
    },
    button: {
      fontSize: getFontSize("20px", "16px", "14px"),
      padding: getFontSize("10px 20px", "8px 16px", "6px 12px"),
      border: "none",
      backgroundColor: "white",
      color: "black",
      cursor: "pointer",
      borderRadius: "5px",
      transition: "background 0.3s",
      zIndex: "2",
    },
    title: {
      marginTop: "30px",
      fontSize: getFontSize("60px", "40px", "30px"),
      fontWeight: "bold",
      textAlign: "center",
      textShadow: "0 0 10px rgb(255, 255, 255)",
    },
  };

  return (
    <div style={styles.parentContainer}>
      <h1 style={dynamicStyles.title} className="glow">Themes</h1>
      <div style={styles.container}>
        <div style={dynamicStyles.cardContainer}>
          {/* Technical Event Card */}
          <div style={dynamicStyles.eventCard} className="event-card">
            <video autoPlay loop muted style={styles.videoBackground}>
              <source src="/tech.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div style={styles.overlay}></div>
            <div style={styles.cardBody}>
              <h3 style={dynamicStyles.cardTitle}>Technical</h3>
              <p style={dynamicStyles.cardText}>
                Enter the arena of coding challenges, hackathons, and technical warfare
              </p>
              <button style={dynamicStyles.button} onClick={() => navigate("/events")}>
                Know More
              </button>
            </div>
          </div>

          {/* Non-Technical Event Card */}
          <div style={dynamicStyles.eventCard} className="event-card">
            <video autoPlay loop muted style={styles.videoBackground}>
              <source src="/nonTech.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div style={styles.overlay}></div>
            <div style={styles.cardBody}>
              <h3 style={dynamicStyles.cardTitle}>Non-Technical</h3>
              <p style={dynamicStyles.cardText}>
                Survive the games of strategy, culture, and creative challenges
              </p>
              <button style={dynamicStyles.button} onClick={() => navigate("/events?section=non-technical")}>
                Know More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Static styles that don't need to be responsive
const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "70vh",
    padding: "20px",
    width: "100%",
  },
  videoBackground: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    zIndex: "-1",
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0, 0, 0, 0.5)", // Dark overlay for readability
    zIndex: "0",
  },
  cardBody: {
    position: "relative",
    zIndex: "1", // Ensure text appears above the video
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  parentContainer: {
    marginTop: "75px",
    textAlign: "center",
    zIndex: "1",
    width: "100%",
  },
};

export default Themes;