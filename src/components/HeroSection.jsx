import React from "react";

const HeroSection = () => {
  return (
    <div style={styles.heroContainer}>
        <video autoPlay loop muted style={styles.heroVideo}>
          <source src="/13138099_1920_1080_30fps.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
    </div>
  );
};

const styles = {
  // heroContainer: {
  //   position: "absolute",
  //   top: 0,
  //   zIndex: 1,
  //   width: "100%",
  //   height: "100%",
  //   overflow: "hidden",
  // },
  // heroVideo: {
  //   width: "100%",
  //   height: "100%",
  //   objectFit: "cover",
  //   position: "absolute",
  //   top: 0,
  //   left: 0,
  // },
  heroContainer: {
    position: "fixed",
    top: 0,
    zIndex: 0,
    height: "100%",
    width: "100%",
    display: "flex", // Assuming `items-center` refers to flex centering
    alignItems: "center",
    paddingLeft: "1.25rem", // px-5 (5 * 4px = 20px)
    paddingRight: "1.25rem",
    paddingTop: "6rem", // py-24 (24 * 4px = 96px)
    paddingBottom: "6rem",
<<<<<<< Updated upstream
    // background:
    //   "radial-gradient(125% 125% at 50% 10%, #000 40%, #63e 100%)",
=======
    background:
      "/starBackground.mp4",
>>>>>>> Stashed changes
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

export default HeroSection;
