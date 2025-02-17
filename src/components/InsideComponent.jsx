import React from "react";
import EventInfoCard from "./EventInfoCard";
import PaperImage from "../assets/paperPresentation.png"
const InsideComponent = () => {
  return (
    <><div style={styles.heroContainer}>
      <video autoPlay loop muted style={styles.heroVideo}>
        <source src="/13138099_1920_1080_30fps.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
    <EventInfoCard
        title="Paper Presentation"
        image={PaperImage} // Replace with actual BGMI image URL
        description="Showcase your research and innovation at the Paper Presentation Challenge! Present groundbreaking ideas, cutting-edge solutions, or revolutionary technologies to an esteemed panel of judges."
        details={[
          { label: "Prelims", value: "19th Feb (6pm - 9pm)" },
          { label: "Finals", value: "22nd Feb" },
          { label: "Venue", value: "Computer Center" },
          { label: "Team Size", value: "Two members per team" },
        ]}
        competitionRounds={[
          { label: "Round 1 - Abstract Submission", value: "" },
          { label: "1", value: "Submit a 250–300-word abstract summarizing your research." },
          { label: "2", value: "Evaluated on originality, clarity, and relevance." },
          { label: "3", value: "All abstracts will be verified." },
          { label: "Round 2 - Final Presentation", value: "" },
          { label: "1", value: "10-minute presentation + 5-minute Q&A session." },
          { label: "2", value: "Must cover problem statement, methodology, findings, and impact." },
          { label: "3", value: "Use PowerPoint, visual aids, or demonstrations for clarity." },
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

export default InsideComponent;
