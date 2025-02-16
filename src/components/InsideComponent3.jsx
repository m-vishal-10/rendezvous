import React from "react";
import EventInfoCard from "./EventInfoCard";
const InsideComponent3 = () => {
  return (
    <EventInfoCard
      title="Shark Tank"
      image="/public/sharkTank.png" // Replace with actual BGMI image URL
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
        { label: "Round 2 - Shark Tank Pitch", value: "" },,
        { label: "1", value: "The representative pitches a unique product." },
        { label: "2", value: "3 minutes for the pitch + 2 minutes for Q&A." },
        { label: "3", value: "The highest investment wins. Ties are resolved using Round 1 scores." },
      ]
}
    />
  );
};

export default InsideComponent3;
