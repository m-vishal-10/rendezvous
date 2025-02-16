import React from "react";

const EventInfoCard = ({ title, image, details, competitionRounds }) => {
  const styles = {
    container: {
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "2rem",
      color: "#fff",
      paddingBottom: "8rem",
    },
    header: {
      textAlign: "center",
      marginBottom: "3rem",
    },
    title: {
      fontSize: "2.5rem",
      textTransform: "uppercase",
      letterSpacing: "2px",
      textShadow: "0 0 20px rgba(255, 255, 255, 0.5)",
    },
    cardsContainer: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "2rem",
      marginTop: "3rem",
    },
    card: {
      background: "linear-gradient(145deg, #1a1a1a 0%, #0d0d0d 100%)",
      border: "2px solid #fff",
      borderRadius: "15px",
      padding: "2rem",
      transition: "all 0.3s ease-out",
      height: "100%",
    },
    imageCard: {
      
      backgroundImage: `url(${image})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      borderRadius: "15px",
    },
    listItem: {
      marginBottom: "1rem",
      paddingLeft: "1.5rem",
      position: "relative",
    },
    highlight: {
      fontWeight: "bold",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>{title}</h1>
      </div>
      <div style={styles.cardsContainer}>
        <div style={styles.card}>
          <h2>Event Details</h2>
          <ul>
            <li><span>Yet to be anounced</span></li>
            {/* {details.map((item, index) => (
              <li key={index} style={styles.listItem}>
                <span style={styles.highlight}>{item.label}:</span> {item.value}
              </li>
            ))} */}
          </ul>
        </div>
        <div style={{ ...styles.card, ...styles.imageCard }}></div>
        <div style={styles.card}>
          <h2>Competition Rounds</h2>
          <ul>
            {competitionRounds.map((item, index) => (
              <li key={index} style={styles.listItem}>
                <span style={styles.highlight}>{item.label}:</span> {item.value}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EventInfoCard;
