import React from "react";
import { Link } from "react-router-dom";

const styles = {
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "15px 30px",
    backgroundColor: "transparent",
    position: "fixed",
    width: "100%",
    top: 0,
    left: 0,
    zIndex: 1000,
    boxSizing: "border-box",
  },
  logo: {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#fff",
    textDecoration: "none",
    flexShrink: 0,
  },
  nav: {
    display: "flex",
    gap: "20px",
    flexWrap: "wrap",
    justifyContent: "flex-end",
  },
  link: {
    color: "#fff",
    textDecoration: "none",
    fontSize: "18px",
    fontWeight: "500",
    whiteSpace: "nowrap",
  },
  contentSpacer: {
    marginTop: "80px", // Adjust this value based on header height
  },
};

const Header = () => {
  return (
    <>
      <header style={styles.header}>
        <Link to="/home" style={styles.logo}><img src="/public/logo3.png" alt="logo" style={{width:"250px", height:"50px"}}/></Link>
        <nav style={styles.nav}>
          <Link to="/home" style={styles.link}>Home</Link>
          <Link to="/events" style={styles.link}>Events</Link>
          <Link to="/about" style={styles.link}>About</Link>
          <Link to="/register" style={styles.link}>Register</Link>
        </nav>
      </header>
      <div style={styles.contentSpacer}></div>
    </>
  );
};

export default Header;
