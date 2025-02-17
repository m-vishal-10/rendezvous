import React from "react";
import EventInfoCard from "./EventInfoCard";
import SquidVerse from "../assets/squidverse.png"
const InsideComponent6 = () => {
  return (
    <><div style={styles.heroContainer}>
      <video autoPlay loop muted style={styles.heroVideo}>
        <source src="/13138099_1920_1080_30fps.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
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

export default InsideComponent6;
