import React from "react";

const EventInfoCard = ({ title, image, details, competitionRounds }) => {
  // Added media query styles
  const styles = {
    container: {
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "1rem",
      color: "#fff",
      paddingBottom: "4rem",
    },
    header: {
      textAlign: "center",
      marginBottom: "2rem",
    },
    title: {
      fontSize: "2.5rem",
      textTransform: "uppercase",
      letterSpacing: "2px",
      textShadow: "0 0 20px rgba(255, 255, 255, 0.5)",
    },
    cardsContainer: {
      display: "grid",
      gridTemplateColumns: "1fr", // Default: 1 card per row
      gap: "2rem",
      marginTop: "2rem",
    },
    card: {
      border: "2px solid #fff",
      borderRadius: "15px",
      padding: "2rem",
      transition: "all 0.3s ease-out",
    },
    imageCard: {
      backgroundImage: `url(${image})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      borderRadius: "15px",
      height: "500px",
    },
    "@media (min-width: 768px)": {
      cardsContainer: {
        gridTemplateColumns: "repeat(2, 1fr)", // Large screens: 2 cards per row
      },
    },
  };
  

  // Use React's useEffect to apply media queries
  React.useEffect(() => {
    const handleResize = () => {
      const cardsContainer = document.getElementById('cardsContainer');
      if (cardsContainer) {
        if (window.innerWidth >= 768) {
          // Desktop: 3 columns
          cardsContainer.style.gridTemplateColumns = "repeat(3, 1fr)";
        } else {
          // Mobile: 1 column
          cardsContainer.style.gridTemplateColumns = "1fr";
        }
      }
    };

    // Initial call
    handleResize();
    
    // Add event listener for window resize
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>{title}</h1>
      </div>
      <div id="cardsContainer" style={styles.cardsContainer}>
        <div style={styles.card}>
          <h2>Event Details</h2>
          <ul>
            <li><span>Yet to be announced</span></li>
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