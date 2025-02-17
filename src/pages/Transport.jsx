import React, { useEffect } from 'react';

const Transport = () => {
  useEffect(() => {
    window.open("https://saankethika2k25.netlify.app/rmdbus.pdf", "_blank");
  }, []);

  return (
    <div style={{ textAlign: "center", color: "white", padding: "20px" }}>
      <h1>Get to know about the Transport!</h1>
      <p>If it didn’t open, <a href="https://saankethika2k25.netlify.app/rmdbus.pdf" target="_blank" rel="noopener noreferrer">click here</a>.</p>
    </div>
    
  );
};

export default Transport;