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
        description="In Squid Verse, participants face off in a series of brain-bending challenges combining general knowledge and computer science trivia. Inspired by the competitive and thrilling atmosphere of Squid Game"
        details={[
          { label: "Prelims", value: "19th Feb (6pm - 9pm)" },
          { label: "Finals", value: "22nd Feb" },
          { label: "Venue", value: "Computer Center" },
          { label: "Team Size", value: "Two members per team" },
        ]}
        competitionRounds={[
          { label: "Round 1 - Marble Minds", value: "General Knowledge and computer science trivia" },
          { label: "1", value: "In a fast-paced quiz session, teams must answer correctly to steal marbles from their opponents. " },
          { label: "2", value: "Every incorrect or unanswered question results in a loss of marble" },
          { label: "3", value: "The top X% of teams move forward to the next round!" },
          { label: "Round 2 - Quiz-Tac-Toe", value: "Shutdown" },
          { label: "1", value: "XO Quiz Challenge is a unique blend of Tic-Tac-Toe and a rapid-response quiz." },
          { label: "2", value: "fastest correct response earns the right to place a token (X or O) on the Tic-Tac-Toe grid. " },
          { label: "3", value: "while the losing team hands over all their marbles to the winners." },
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
