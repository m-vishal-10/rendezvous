import React from "react";
import "../InsidePage.css";
// import Technical from './Technical.jpg'
const InsideComponent5 = () => {
  return (
    <div className="event-container">
      <div className="event-header">
        {/* <h1 className="event-title">BGMI Tournament</h1> */}
        <div className="flex justify-center items-center h-screen">
          <h2 class="img-effect">
            <a
              href="https://fontmeme.com/squid-game-font/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://fontmeme.com/permalink/250215/2f7604c26bd8a8e135cdff843dd2379b.png"
                alt="squid-game-font"
                style={{ border: "0" }}
              />
            </a>
          </h2>
        </div>
        <p className="event-description">
          Step into the world of cricket management with the IPL Mock Auction!
          Assemble your dream team by bidding on players, balancing your budget,
          and outwitting your opponents. The stakes are high, and only the best
          strategist will claim victory. Are you ready to take on the challenge?
        </p>
      </div>

      <div className="cards-container">
        {/* Event Details Card */}
        <div className="card">
          <h2 className="card-title">Event Details</h2>
          <p>To be Announced.....</p>
        </div>

        {/* Image Card */}
        <div className="card event-poster">
          {/* <h2 className="card-title">IPL Auction</h2> */}
          {/* <img src="https://res.cloudinary.com/dgpoevb0p/image/upload/v1739609419/azootigwgmt7bfsskizb.jpg" alt="BGMI Tournament" className="event-image event-post" /> */}
        </div>

        {/* Competition Rounds Card */}
        <div className="card">
          <h2 className="card-title">Competition Rounds</h2>
          <ul className="competition-rules">
            <li>
              <span className="highlight">Round 1 - Online Prelims:</span>
              <p>
                A 25-question IPL Quiz with a 30-minute time limit. The top 10
                teams will qualify for the next round.
              </p>
            </li>
            {/* <li>
              <span className="highlight">Platform:</span> Mobile only
              (Android/iOS)
            </li>
            <li>No cheating, hacking, or third-party software allowed</li> */}
            <li>
              <span className="highlight">
                Round 2 - Team Selection & Auction:
              </span>
              <p>
                Each team will randomly select an IPL franchise. Teams will then
                build a squad of 11 players, consisting of 4 foreign players and
                7 Indian players. Budget: ₹70 crores.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default InsideComponent5;
