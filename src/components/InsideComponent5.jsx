import React from "react";
import EventInfoCard from "./EventInfoCard";
const InsideComponent5 = () => {
  return (
    <EventInfoCard
      title="IPL Auction"
      image="/public/iplAuction.png" // Replace with actual BGMI image URL
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
      ]
}
    />
  );
};

export default InsideComponent5;
