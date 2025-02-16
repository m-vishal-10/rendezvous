import { useNavigate, useLocation } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (path) => {
    if (location.pathname !== path) {
      navigate(path, { replace: true }); // Replaces instead of adding duplicate history entries
    }
  };

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
      cursor: "pointer", // Makes it behave like a link
    },
    contentSpacer: {
      marginTop: "80px",
    },
  };

  return (
    <>
      <header style={styles.header}>
        <img
          src="/logo3.png"
          alt="logo"
          style={{ width: "250px", height: "50px", cursor: "pointer" }}
          onClick={() => handleNavigation("/home")}
        />
        <nav style={styles.nav}>
          <span style={styles.link} onClick={() => handleNavigation("/home")}>
            Home
          </span>
          <span style={styles.link} onClick={() => handleNavigation("/events")}>
            Events
          </span>
          <span style={styles.link} onClick={() => handleNavigation("/about")}>
            About
          </span>
          <span style={styles.link} onClick={() => handleNavigation("/register")}>
            Register
          </span>
        </nav>
      </header>
      <div style={styles.contentSpacer}></div>
    </>
  );
};

export default Header;
