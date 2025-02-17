import React from "react";
import EventInfoCard from "./EventInfoCard";
import SharkTank from "../assets/sharkTank.png";
const InsideComponent3 = () => {
  return (
    <><div style={styles.heroContainer}>
      <video autoPlay loop muted style={styles.heroVideo}>
        <source src="/13138099_1920_1080_30fps.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
    <EventInfoCard
        title="Shark Tank"
        image={SharkTank} // Replace with actual BGMI image URL
        description="Shark Tank is a high-stakes event where participants pitch unique products to a panel of 'investors.' It tests quick thinking, creativity, and entrepreneurial flair."
        details={[
          { label: "Prelims", value: "19th Feb (6pm - 9pm)" },
          { label: "Finals", value: "22nd Feb" },
          { label: "Venue", value: "Computer Center" },
          { label: "Team Size", value: "Two members per team" },
        ]}
        competitionRounds={[
          { label: "Round 1 - Rapid-Fire Duel", value: "" },
          { label: "1", value: "Green Signal: Highlight the product’s strengths." },
          { label: "2", value: "On Red Signal: Critique its weaknesses." },
          { label: "3", value: "Signals switch randomly" },
          { label: "4", value: "Top teams advance to Round 2." },
          { label: "Round 2 - Shark Tank Pitch", value: "" }, ,
          { label: "1", value: "The representative pitches a unique product." },
          { label: "2", value: "3 minutes for the pitch + 2 minutes for Q&A." },
          { label: "3", value: "The highest investment wins. Ties are resolved using Round 1 scores." },
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

export default InsideComponent3;
