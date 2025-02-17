import React from "react";
import EventInfoCard from "./EventInfoCard";
import SquidVerse from "../assets/squidverse.png"
const InsideComponent6 = () => {
  return (
    <EventInfoCard
      title="Squid Verse"
      image={SquidVerse} // Replace with actual BGMI image URL
      description="Test your gaming knowledge and strategy by identifying characters from games, cartoons, and anime. Lead your Clash of Clans clan in battles, judged on attack execution and defense!"
      details={[
        { label: "Prelims", value: "19th Feb (6pm - 9pm)" },
        { label: "Finals", value: "22nd Feb" },
        { label: "Venue", value: "Computer Center" },
        { label: "Team Size", value: "Two members per team" },
      ]}
      competitionRounds={[
        { label: "Round 1 - Character Hunt", value: "Gaming, Cartoon & Anime Edition" },
        { label: "1", value: "Each participant gets 30-60 seconds to identify as many characters as possible." },
        { label: "2", value: "The images will be randomly." },
        { label: "3", value: "The top scorers will advance to the next round." },
        { label: "Round 2 - Clash of Clans", value: "Clan Battle" },
        { label: "1", value: "Participants must bring their own Clash of Clans clan." },
        { label: "2", value: "Battles will be judged on attack strategies, base defense, and overall performance." },
        { label: "3", value: "Friendly challenges and war tactics will determine the top players." },
      ]
}
    />
  );
};

export default InsideComponent6;
