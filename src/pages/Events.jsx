import React from 'react';
import '../Events.css'; // Ensure that this file doesn't have conflicting styles
import './InsidePage';
import { useNavigate } from "react-router-dom";
import Rimberio from '../assets/Rimberio.png'
const Events = () => {
  const navigate = useNavigate();
  const technicalEvents = [
    {
      title: "Clash of Coders",
      description: "Battle it out in an intense coding competition where only the strongest algorithms survive.",
      // image:Rimberio
      navigatePath:"/inside"
    },
    {
      title: "Hack Quest",
      description: "24-hour hackathon to build innovative solutions for real-world problems.",
      image: "/api/placeholder/400/300",
      navigatePath:"/inside2"
    },
    {
      title: "Hack Quest",
      description: "24-hour hackathon to build innovative solutions for real-world problems.",
      image: "/api/placeholder/400/300",
      navigatePath:"/inside3"
    },
    {
      title: "Hack Quest",
      description: "24-hour hackathon to build innovative solutions for real-world problems.",
      image: "/api/placeholder/400/300",
      navigatePath:"/inside4"
    }
  ];

  const nonTechnicalEvents = [
    {
      title: "Ipl Auction",
      description: "Test your konwledge about the palyers and strategy.",
      image: "/api/placeholder/400/300",
      navigatePath:"/inside5"
    },
    {
      title: "Clash Of Clans",
      description: "Showcase your talents in music, dance, and art with a competitive edge.",
      image: "/api/placeholder/400/300",
      navigatePath:"/inside6"
    }
  ];

  const showEventDetails = (eventTitle) => {
    alert(`Welcome to ${eventTitle}! Are you ready to play?`);
  };

  const createEventCard = (event) => {
    return (
      <div className="event-card" style={{ position: "relative", zIndex: 1 }}>
        {/* <img src={event.image} alt={event.title} className="event-image" style={{ position: "relative", zIndex: 0 }} /> */}
        <div className="event-content" style={{ position: "relative", zIndex: 2 }}>
          <h3 className="event-title">{event.title}</h3>
          <p className="event-description">{event.description}</p>
          <button style={styles.button} onClick={() => navigate(event.navigatePath)}>
            Know More
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="events-container">
      <h2 className="section-title">Technical Events</h2>
      <div className="events-grid" id="technical-events">
        {technicalEvents.map((event, index) => (
          <React.Fragment key={index}>
            {createEventCard(event)}
          </React.Fragment>
        ))}
      </div>

      <h2 className="section-title">Non-Technical Events</h2>
      <div className="events-grid" id="non-technical-events">
        {nonTechnicalEvents.map((event, index) => (
          <React.Fragment key={index}>
            {createEventCard(event)}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

const styles = {
  button: {
    fontSize: "20px",
    padding: "10px 20px",
    border: "none",
    backgroundColor: "white",
    color: "black",
    cursor: "pointer",
    borderRadius: "5px",
    transition: "background 0.3s",
    zIndex: 15, // Ensure the button is on top of other elements
    position: "relative", // Add position relative to ensure z-index works
    pointerEvents: "auto", // Ensure the button is interactive
  },
}

export default Events;
