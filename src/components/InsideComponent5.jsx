import React from "react";
import EventInfoCard from "./EventInfoCard";
import IPL from "../assets/2.png";
const InsideComponent5 = () => {
  return (
    <><div style={styles.heroContainer}>
      <video autoPlay loop muted style={styles.heroVideo}>
        <source src="/13138099_1920_1080_30fps.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
    <EventInfoCard
        title="IPL Auction"
        image={IPL} // Replace with actual BGMI image URL
        description="Enter the IPL Mock Auction, where you bid on players, balance your budget, and outsmart rivals. Only the best strategist will emerge victorious!"
        details={[
          { label: "Prelims", value: "19th Feb (6pm - 9pm)" },
          { label: "Finals", value: "22nd Feb" },
          { label: "Venue", value: "Computer Center" },
          { label: "Team Size", value: "Two members per team" },
        ]}
        competitionRounds={[
          { label: "Round 1 - Auction Phase 1", value: "35 minutes" },
          { label: "1", value: "Teams bid for 4 additional players." },
          { label: "Round 2 - Auction Phase 2 ", value: "35 minutes" },
          { label: "1", value: "Teams bid for the remaining 4 players." },
          { label: "2", value: "Teams are evaluated based on the strength and strategic composition of their final 11-player squad (based on the credit points allotted to respective players)." },
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

export default InsideComponent5;
