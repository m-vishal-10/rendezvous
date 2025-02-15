import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Events from "../pages/Events";
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
    <div style={styles.container}>
      <div style={styles.cardContainer}>
        <div style={styles.eventCard} className="event-card">
          <img
            src="/api/placeholder/400/300"
            style={styles.cardImage}
            alt="Technical events"
          />
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

        <div style={styles.eventCard} className="event-card">
          <img
            src="/api/placeholder/400/300"
            style={styles.cardImage}
            alt="Non-technical events"
          />
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
  );
};

const showDetails = (eventType) => {
  const messages = {
    technical: "Welcome to the Technical Games. Do you accept the challenge?",
    "non-technical": "Welcome to the Non-Technical Games. Are you ready to play?",
  };
  alert(messages[eventType]);
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    backgroundColor: "#000",
    padding: "20px",
  },
  cardContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "40px",
  },
  eventCard: {
    background: "linear-gradient(145deg, #1a1a1a 0%, #0d0d0d 100%)",
    border: "2px solid #fff",
    borderRadius: "15px",
    transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
    overflow: "hidden",
    boxShadow: "0 0 10px rgb(255, 255, 255)",
    width: "500px",
    height: "400px",
    textAlign: "center",
    padding: "20px",
  },
  cardImage: {
    width: "100%",
    height: "250px",
    objectFit: "cover",
    borderBottom: "2px solidrgb(255, 255, 255)",
  },
  cardBody: {
    padding: "20px",
  },
  cardTitle: {
    fontSize: "2rem",
    color: "#fff",
    textTransform: "uppercase",
    marginBottom: "10px",
    textShadow: "0 0 10px rgb(255, 255, 255)",
  },
  cardText: {
    fontSize: "1rem",
    color: "#ccc",
    marginBottom: "15px",
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
    zIndex: 10, // Ensure the button is on top of other elements
    position: "relative", // Add position relative to ensure z-index works
  }
  ,
};

export default Themes;