import React from "react";
import EventInfoCard from "./EventInfoCard";
import pixelPlayground from "../assets/pixelPlayground.png";  
const InsideComponent4 = () => {
  return (
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
        { label: "Round 2 - Design Showdown", value: "" },
        { label: "Challenge 1: Logo Creation", value: "" },
        { label: "1", value: "Create a unique logo for a fictional company or product." },
        { label: "Challenge 2: Static Dashboard Design", value: "" },
        { label: "1", value: "Create a static dashboard for a given application." },
        { label: "2", value: "40 minutes to complete both challenges." },
        { label: "3", value: "Final evaluation based on judging criteria." },
      ]
}
    />
  );
};

export default InsideComponent4;
