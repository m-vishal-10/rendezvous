import React from "react";
import { useNavigate } from "react-router-dom";

const RegisterCard = () => {
    const navigate = useNavigate();
  return (
    <div style={styles.container}>
      <h1 style={styles.title} className="glow">Register</h1>
      <p style={styles.description}>
        Hurry up! Event closes on March 15th, 2025 at 12pm. Reserve your spot at the symposium! Register now.
      </p>
      <button style={styles.button} onClick={() => navigate("/register")}>Register Now</button>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    color: "white",
    padding: "40px",
    borderRadius: "10px",
    maxWidth: "600px",
    margin: "50px auto",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
    zIndex: "1", //CHANGED
  },
  title: {
    fontSize: "60px",
    fontWeight: "bold",
    textAlign: "center",
    textShadow: "0 0 10px rgb(255, 255, 255)"   
  },
  description: {
    fontSize: "18px",
    margin: "20px 0",
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
  },
};

export default RegisterCard;
