import React, { useEffect } from 'react';

const Register = () => {
  useEffect(() => {
    window.open("https://forms.gle/FgH5ofWbuw8Em3T6A", "_blank");
  }, []);

  return (
    <div style={{ textAlign: "center", color: "white", padding: "20px" }}>
      <h1>Registration Form Opened in a New Tab</h1>
      <p>If it didn’t open, <a href="https://forms.gle/FgH5ofWbuw8Em3T6A" target="_blank" rel="noopener noreferrer">click here</a>.</p>
    </div>
  );
};

export default Register;
