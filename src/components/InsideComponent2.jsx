import React from "react";
import EventInfoCard from "./EventInfoCard";
const InsideComponent2 = () => {
  return (
    <EventInfoCard
      title="Battle of Coders"
      image="/public/battleOfCoders.png" // Replace with actual BGMI image URL
      description="Battle of Coders (COC) is a team-based coding event where pairs compete in a Quiz Round and a Coding Round. Teams showcase problem-solving skills to win certificates."
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
      ]}
    />
  );
};

export default InsideComponent2;
