import React from 'react';
import { useNavigate } from "react-router-dom";
import '../Events.css';

const Events = () => {
  const navigate = useNavigate();

  const technicalEvents = [
    {
      title: "Paper Presentation",
      description: "Showcase your research and innovation at the Paper Presentation Challenge! Present groundbreaking ideas, cutting-edge solutions, or revolutionary technologies to an esteemed panel of judges.",
      video: "/Paperpresentation.mp4", // Updated path
      navigatePath: "/inside"
    },
    {
      title: "Battle of Coders",
      description: "Battle it out in an intense coding competition where only the strongest algorithms survive.",
      video: "/battleofcoders.mp4", // Updated path
      navigatePath: "/inside2"
    },
    {
      title: "Shark Tank",
      description: "Shark Tank is a high-stakes event where participants pitch unique products to a panel of 'investors.' It tests quick thinking, creativity, and entrepreneurial flair.",
      video: "/244006_medium.mp4", // Updated path
      navigatePath: "/inside3"
    },
    {
      title: "Pixel Playground (UI)",
      description: "Pixel Playground is a design competition challenging your skills in logo creation and UI/UX design. Test your creativity, problem-solving, and speed to create stunning visuals!",
      video: "/pixelplayground.mp4", // Updated path
      navigatePath: "/inside4"
    },
  ];

  const nonTechnicalEvents = [
    {
      title: "IPL Auction",
      description: "Enter the IPL Mock Auction, where you bid on players, balance your budget, and outsmart rivals. Only the best strategist will emerge victorious!",
      video: "/ipl.mp4", // Updated path
      navigatePath: "/inside5"
    },
    {
      title: "Squid Verse",
      description: "Enter the fun game where we will simulate the squid game, Play interesting events and win the contest to get amazing rewards",
      video: "/squidverse.mp4", // Updated path
      navigatePath: "/inside6"
    },
  ];

  const createEventCard = (event) => {
    return (
      <div className="event-card" key={event.title}>
        <video
          autoPlay
          loop
          muted
          playsInline
          className={`video-background ${event.title === "Squid Verse" ? "squid-verse-video" : ""}`}
          aria-label={`Background video for ${event.title}`} // Fixed string interpolation
        >
          <source src={event.video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="event-content">
          <h3 className="event-title">{event.title}</h3>
          <p className="event-description">{event.description}</p>
          <button className="event-button" onClick={() => navigate(event.navigatePath)}>
            Know More
          </button>
        </div>
      </div>
    );
  };

  return (
    <>
      {/* Background Video */}
      <div className="hero-container">
        <video autoPlay loop muted className="hero-video">
          <source src="/13138099_1920_1080_30fps.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="events-container">
        {/* Move Headers Above the Hero Video */}
        <h2 className="section-title">Technical Events</h2>
        <div className="events-grid">
          {technicalEvents.map((event) => createEventCard(event))}
        </div>

        <h2 className="section-title">Non-Technical Events</h2>
        <div className="events-grid">
          {nonTechnicalEvents.map((event) => createEventCard(event))}
        </div>
      </div>
    </>
  );
};

export default Events;