import React from "react";
import EventInfoCard from "./EventInfoCard";
import BattleOfCoders from "../assets/1.png";
const InsideComponent2 = () => {
  return (
    <><div style={styles.heroContainer}>
      <video autoPlay loop muted style={styles.heroVideo}>
        <source src="/13138099_1920_1080_30fps.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
    <EventInfoCard
        title="Battle of Coders"
        image={BattleOfCoders} // Replace with actual BGMI image URL
        description="Clash of Coders (COC) is a team-based coding event where pairs compete in a Quiz Round and a Coding Round. Teams showcase problem-solving skills to win certificates."
        details={[
          { label: "Prelims", value: "19th Feb (6pm - 9pm)" },
          { label: "Finals", value: "22nd Feb" },
          { label: "Venue", value: "Computer Center" },
          { label: "Team Size", value: "Two members per team" },
        ]}
        competitionRounds={[
          { label: "Round 1 - General Round", value: "Online quiz with MCQs, debugging, and code arrangement." },
          { label: "Selection Criteria", value: "Based on accuracy and speed." },
          { label: "Round 2 - Attacking Round", value: "Solve a coding challenge in a pair-programming format." },
          { label: "Selection Criteria", value: "Best and most efficient solution wins" },
          { label: "Fair Play", value: "Strict adherence to event rules." },
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

export default InsideComponent2;
