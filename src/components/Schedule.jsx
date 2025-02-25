import React, { useState, useEffect } from "react";

const Schedule = () => {
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1200
  );

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowWidth <= 768;
  const isTablet = windowWidth > 768 && windowWidth <= 1024;

  const handleRedirect = (url) => {
    window.location.href = url;
  };

  const responsiveStyles = {
    container: {
      color: "white",
      textAlign: "center",
      padding: isMobile ? "15px" : "30px",
      overflowX: "hidden",
    },
    infoBox: {
      padding: isMobile ? "15px" : isTablet ? "20px" : "30px",
      marginBottom: "20px",
      borderRadius: "15px",
      width: isMobile ? "90%" : isTablet ? "85%" : "800px",
      height: "auto", // Changed to auto for all devices
      marginTop: "50px",
      marginLeft: "auto",
      marginRight: "auto",
      border: "2px solid #fff",
      borderRadius: "15px",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      boxShadow: "0 4px 30px rgb(255, 255, 255)",
      // Removed overflowY and maxHeight properties
    },
    infoTitle: {
      fontSize: isMobile ? "20px" : "22px",
      marginBottom: "10px",
    },
    infoText: {
      fontSize: isMobile ? "14px" : "16px",
      lineHeight: "1.5",
      textAlign: "justify",
      padding: isMobile ? "10px" : "15px",
    },
    button: {
      marginTop: "15px",
      padding: isMobile ? "8px 16px" : "10px 20px",
      backgroundColor: "white",
      color: "black",
      border: "none",
      borderRadius: "5px",
      fontSize: isMobile ? "14px" : "16px",
      fontWeight: "bold",
      cursor: "pointer",
      transition: "background 0.3s",
    },
    title: {
      marginTop: "80px",
      fontSize: isMobile ? "20px" : "24px",
      marginBottom: "20px",
    },
    tableContainer: {
      width: "100%",
      overflowX: isMobile ? "auto" : "hidden",
      maxWidth: "100%",
      display: "block",
    },
    table: {
      width: isMobile ? "700px" : isTablet ? "90%" : "80%",
      margin: "0 auto",
      borderCollapse: "collapse",
      minWidth: isMobile ? "700px" : "auto", // Ensure minimum width for mobile scrolling
    },
    cell: {
      border: "1px solid white",
      padding: isMobile ? "8px" : "10px",
      fontSize: isMobile ? "14px" : "16px",
      whiteSpace: isMobile ? "nowrap" : "normal",
    },
    rulesList: {
      listStyleType: "bullet",
      padding: 0,
      textAlign: "left",
    },
    ruleItem: {
      padding: "8px 0",
      borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
      position: "relative",
      paddingLeft: "25px",
    },
  };

  return (
    <div style={responsiveStyles.container}>

      {/* About Rules */}
      <div style={responsiveStyles.infoBox}>
          <h2 style={responsiveStyles.infoTitle}>College Rules</h2>
          <div style={{ display: "flex", justifyContent: "center", gap: "10px", padding: "15px" }}>
            <ul style={responsiveStyles.rulesList}>
              <li style={responsiveStyles.ruleItem}>ID card is mandatory for entry into the college.</li>
              <li style={responsiveStyles.ruleItem}>Prior registration via google form is required to participate in any event.</li>
              <li style={responsiveStyles.ruleItem}>No registration fees will be collected.</li>
              <li style={responsiveStyles.ruleItem}>Participation certificate will be provided to all participants.</li>
              <li style={responsiveStyles.ruleItem}>The winners will be rewarded with cash prize.</li>
              <li style={responsiveStyles.ruleItem}>Mobile phones are not allowed inside the campus.</li> 
              <li style={responsiveStyles.ruleItem}>Strict formal dress code must be followed.</li>
              <li style={responsiveStyles.ruleItem}>Transport and food will be provided.</li>
            </ul>
        </div>
      </div>

      {/* About College Section */}
      <div style={responsiveStyles.infoBox}>
        <h2 style={responsiveStyles.infoTitle}>About College</h2>
        <p style={responsiveStyles.infoText}>
          RMDEC aspires to be a premier institution offering quality technical education and research with application expertise in Engineering and Technology. Develop the students as outstanding professionals by creating an environment that would nurture creativity, academic excellence, professionalism, high standard of ethics, sense of responsibility and respect for individuals. Provides an efficient academic and research environment. Our mission is to inspire, educate, and produce computer engineers capable of tackling fundamental scientific problems and important societal challenges - and to do so with the highest commitment to quality, integrity, and respect for others. Our students are rigorously trained in fundamentals of engineering, with a strong bent towards the maker culture of learning and doing.
        </p>
        <button style={responsiveStyles.button} onClick={() => handleRedirect("https://rmd.ac.in/index.html")}>Know More</button>
      </div>

      {/* About Department Section */}
      <div style={responsiveStyles.infoBox}>
        <h2 style={responsiveStyles.infoTitle}>About Department</h2>
        <p style={responsiveStyles.infoText}>
          Dating back to the early 21st century, B.E Computer Science and Engineering programme has a long history of excellence. It is designed to be a creative driving force at R.M.D Engineering college and worldwide, of highest scholarly and entrepreneurial quality. Our mission is to inspire, educate, and produce computer engineers capable of tackling fundamental scientific problems and important societal challenges - and to do so with the highest commitment to quality, integrity, and respect for others. Our students are rigorously trained in fundamentals of engineering, with a strong bent towards the maker culture of learning and doing. The department also focuses on giving hands-on industrial experience to the students by organizing various Center Of Excellence (COE), where the students get trained by the professionals from various firms right from third semster up until they get recruited by those firms. The various COEs available are Big Data, Cyber Security, Cloud Computing and Digital Enterprise.
        </p>
        <button style={responsiveStyles.button} onClick={() => handleRedirect("https://rmd.ac.in/dept/cse/index.html")}>Know More</button>
      </div>

      {/* Schedule Section */}
      <h2 style={responsiveStyles.title}>Schedule</h2>
      
      {/* Wrapping table in a container for mobile horizontal scrolling */}
      <div style={responsiveStyles.tableContainer}>
        <table style={responsiveStyles.table}>
          <thead>
            <tr>
              <th style={responsiveStyles.cell}>Event</th>
              <th style={responsiveStyles.cell}>Student Coordinator</th>
              <th style={responsiveStyles.cell}>Contact</th>
              <th style={responsiveStyles.cell}>Venue</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={responsiveStyles.cell}>Battle of Coders</td>
              <td style={responsiveStyles.cell}>--</td>
              <td style={responsiveStyles.cell}>--</td>
              <td style={responsiveStyles.cell}>CSE DEPARTMENT</td>
            </tr>
            <tr>
              <td style={responsiveStyles.cell}>Paper Presentation</td>
              <td style={responsiveStyles.cell}>--</td>
              <td style={responsiveStyles.cell}>--</td>
              <td style={responsiveStyles.cell}>CSE DEPARTMENT</td>
            </tr>
            <tr>
              <td style={responsiveStyles.cell}>Shark Tank</td>
              <td style={responsiveStyles.cell}>--</td>
              <td style={responsiveStyles.cell}>--</td>
              <td style={responsiveStyles.cell}>CSE DEPARTMENT</td>
            </tr>
            <tr>
              <td style={responsiveStyles.cell}>Pixel Playground UI</td>
              <td style={responsiveStyles.cell}>--</td>
              <td style={responsiveStyles.cell}>--</td>
              <td style={responsiveStyles.cell}>CSE DEPARTMENT</td>
            </tr>
            <tr>
              <td style={responsiveStyles.cell}>IPL Auction</td>
              <td style={responsiveStyles.cell}>--</td>
              <td style={responsiveStyles.cell}>--</td>
              <td style={responsiveStyles.cell}>CSE DEPARTMENT</td>
            </tr>
            <tr>
              <td style={responsiveStyles.cell}>Squid Verse</td>
              <td style={responsiveStyles.cell}>--</td>
              <td style={responsiveStyles.cell}>--</td>
              <td style={responsiveStyles.cell}>CSE DEPARTMENT</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Schedule;