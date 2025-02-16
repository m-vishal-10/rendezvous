import React from "react";
import EventInfoCard from "./EventInfoCard";

const InsideComponent = () => {
  return (
    <EventInfoCard
      title="Paper Presentation"
      image="/public/paperPresentation.png" // Replace with actual BGMI image URL
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
      ]}
    />
  );
};

export default InsideComponent;
