import React from "react";
import "../InsidePage.css";
// import Technical from './Technical.jpg'
const InsideComponent4 = () => {
  return (
    <div className="event-container">
      <div className="event-header">
        {/* <h1 className="event-title">BGMI Tournament</h1> */}
        <div className="flex justify-center items-center h-screen">
          <h2 class="img-effect">
          <a href="https://fontmeme.com/squid-game-font/"> 
            <img
              src="https://fontmeme.com/permalink/250215/69c3d65c4d96ffdb49ecefad86a33ec8.png"
              alt="squid-game-font"
              style={{ border: 0 }}
            />
          </a>
          </h2>
        </div>
        <p className="event-description">
          page4
        </p>
      </div>

      <div className="cards-container">
        {/* Event Details Card */}
        <div className="card">
          <h2 className="card-title">Event Details</h2>
          <ul className="event-details">
            <li>
              <span className="highlight">Prelims:</span> 19th Feb (6pm - 9pm)
            </li>
            <li>
              <span className="highlight">Finals:</span> 22nd Feb
            </li>
            <li>
              <span className="highlight">Venue:</span> Computer Center
            </li>
            <li>
              <span className="highlight">Team Size:</span> Two members per team
            </li>
          </ul>
        </div>

        {/* Image Card */}
        <div className="card">
          <h2 className="card-title">BGMI IMAGE</h2>
          <img src="...." alt="BGMI Tournament" className="event-image" />
        </div>

        {/* Competition Rounds Card */}
        <div className="card">
          <h2 className="card-title">Competition Rounds</h2>
          <ul className="competition-rules">
            <li>
              <span className="highlight">Round 1 - Online Prelims:</span> Duo
              Classic on Erangel & Miramar
            </li>
            <li>
              <span className="highlight">Platform:</span> Mobile only
              (Android/iOS)
            </li>
            <li>No cheating, hacking, or third-party software allowed</li>
            <li>
              <span className="highlight">Round 2 - Finals (Offline):</span> TDM
              Clash with 10 qualified teams
            </li>
            <li>Only M416 is allowed; no pistols, slides off</li>
            <li>Fair play and adherence to BGMI's Terms of Service required</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default InsideComponent4;
