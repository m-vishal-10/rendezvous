import React from "react";
import EventInfoCard from "./EventInfoCard";
import pixelPlayground from "../assets/pixel.jpg";  
const InsideComponent4 = () => {
  return (
    <><div style={styles.heroContainer}>
      <video autoPlay loop muted style={styles.heroVideo}>
        <source src="/13138099_1920_1080_30fps.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
    <EventInfoCard
        title="Pixel Playground(UI)"
        image={pixelPlayground} // Replace with actual BGMI image URL
        description="Pixel Playground is a design competition challenging your skills in logo creation and UI/UX design. Test your creativity, problem-solving, and speed to create stunning visuals!"
        details={[
          { label: "Prelims", value: "19th Feb (6pm - 9pm)" },
          { label: "Finals", value: "22nd Feb" },
          { label: "Venue", value: "Computer Center" },
          { label: "Team Size", value: "Two members per team" },
        ]}
        competitionRounds={[
          { label: "Round 1 - Logo Quiz Challenge", value: "" },
          { label: "1", value: "A 5-minute quiz consisting of 15 questions." },
          { label: "2", value: "Related to logos, branding, and design principles." },
          { label: "Round 2 - Design Battle", value: "" },
          { label: "Challenge 1: Logo creation", value: "" },
          { label: "1", value: "Create a unique logo for a fictional company or product." },
          { label: "Challenge 2: UI Design", value: "" },
          { label: "1", value: "Create a intuitive and creative user interface for the given application." },
          { label: "2", value: "40 minutes to complete both challenges." },
          { label: "3", value: "Final evaluation based on judging criteria." },
        ]} /></>
  );
};

const styles = {
  heroContainer: {
    position: "fixed",
    top: 0,
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

export default InsideComponent4;
