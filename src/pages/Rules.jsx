import React, { useEffect } from 'react';

const Rules = () => {
  useEffect(() => {
    window.open("https://res.cloudinary.com/dgpoevb0p/image/upload/v1739773741/je8umbsllw2dibhn7svm.jpg", "_blank");
  }, []);

  return (
    <div style={{ textAlign: "center", color: "white", padding: "20px" }}>
      <h1>Get to know about the Rules!</h1>
      <p>If it didn’t open, <a href="https://res.cloudinary.com/dgpoevb0p/image/upload/v1739773741/je8umbsllw2dibhn7svm.jpg" target="_blank" rel="noopener noreferrer">click here</a>.</p>
    </div>
    
  );
};

export default Rules;