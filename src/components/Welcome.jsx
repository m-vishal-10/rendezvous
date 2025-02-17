import React from "react";

const Welcome = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title} className="glow">Welcome to Rendezvous 2K25</h1>
      <p style={styles.description}>
      Welcome to Rendezvous 2K25 an National Level Symposium ,where innovation meets inspiration! Join us for a fusion of technical excitement and non-technical excitement, presented by the R.M.D Engineering College Department of Computer Science and Engineering.
      </p>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    color: "white",
    padding: "20px",
    zIndex: "1" //CHANGED  
  },
  title: {
    fontSize: "80px",
    fontWeight: "bold",
    textAlign: "center",
    textShadow: "0 0 10px rgb(255, 255, 255)"
  },
  description: {
    fontSize: "20px",
    maxWidth: "800px",
    margin: "0 auto"
  },
};

export default Welcome;
