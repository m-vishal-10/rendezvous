import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Themes = () => {
  const navigate = useNavigate();

  useEffect(() => {
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
  }, []);

  return (
    <div style={styles.parentContainer}>
      <h1 style={styles.title} className="glow">Themes</h1>
      <div style={styles.container}>
        <div style={styles.cardContainer}>
          {/* Technical Event Card */}
          <div style={styles.eventCard} className="event-card">
            <video autoPlay loop muted style={styles.videoBackground}>
              <source src="/tech.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div style={styles.overlay}></div>
            <div style={styles.cardBody}>
              <h3 style={styles.cardTitle}>Technical</h3>
              <p style={styles.cardText}>
                Enter the arena of coding challenges, hackathons, and technical warfare
              </p>
              <button style={styles.button} onClick={() => navigate("/events")}>
                Know More
              </button>
            </div>
          </div>

          {/* Non-Technical Event Card */}
          <div style={styles.eventCard} className="event-card">
            <video autoPlay loop muted style={styles.videoBackground}>
              <source src="/nonTech.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div style={styles.overlay}></div>
            <div style={styles.cardBody}>
              <h3 style={styles.cardTitle}>Non-Technical</h3>
              <p style={styles.cardText}>
                Survive the games of strategy, culture, and creative challenges
              </p>
              <button style={styles.button} onClick={() => navigate("/events")}>
                Know More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    padding: "20px",
  },
  cardContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "40px",
    flexWrap: "wrap", // Allow cards to wrap on smaller screens
    justifyContent: "center", // Center cards on smaller screens
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
  },
  cardTitle: {
    fontSize: "2rem",
    color: "#fff",
    textTransform: "uppercase",
    marginBottom: "10px",
    textShadow: "0 0 10px rgb(255, 255, 255)",
    // Responsive adjustments
    "@media (max-width: 768px)": {
      fontSize: "1.5rem",
    },
    "@media (max-width: 480px)": {
      fontSize: "1.2rem",
    },
  },
  cardText: {
    fontSize: "1rem",
    color: "#ccc",
    marginBottom: "15px",
    // Responsive adjustments
    "@media (max-width: 768px)": {
      fontSize: "0.9rem",
    },
    "@media (max-width: 480px)": {
      fontSize: "0.8rem",
    },
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
    zIndex: "2",
    // Responsive adjustments
    "@media (max-width: 768px)": {
      fontSize: "16px",
      padding: "8px 16px",
    },
    "@media (max-width: 480px)": {
      fontSize: "14px",
      padding: "6px 12px",
    },
  },
  title: {
    marginTop:"30px",
    fontSize: "60px",
    fontWeight: "bold",
    textAlign: "center",
    textShadow: "0 0 10px rgb(255, 255, 255)",
    // Responsive adjustments
    "@media (max-width: 768px)": {
      fontSize: "40px",
    },
    "@media (max-width: 480px)": {
      fontSize: "30px",
    },
  },
  parentContainer: {
    textAlign: "center",
    padding: "20px",
    zIndex: "1",
  },
};

export default Themes;