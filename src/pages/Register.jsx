import React, { useEffect } from 'react';

const Register = () => {
  useEffect(() => {
    window.open("https://forms.gle/ZocDn7UHb3veda6Q7", "_blank");
  }, []);

  return (
    <><div style={styles.heroContainer}>
      <video autoPlay loop muted style={styles.heroVideo}>
        <source src="/13138099_1920_1080_30fps.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
    <div style={{ textAlign: "center", color: "white", padding: "20px",marginBottom:"325px",margintop:"100px"}}>
        <h1>Registration Form Opened in a New Tab</h1>
        <p>If it didn’t open, <a href="https://forms.gle/ZocDn7UHb3veda6Q7" target="_blank" rel="noopener noreferrer">click here</a>.</p>
      </div></>
  );
};
const styles = {
  heroContainer: {
    position: "fixed",
    top: 30,
    zIndex: -1,
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

export default Register;
