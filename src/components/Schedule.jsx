import React from "react";

const Schedule = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Schedule</h2>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.cell}>Event</th>
            <th style={styles.cell}>Student Coordinator</th>
            <th style={styles.cell}>Contact</th>
            <th style={styles.cell}>Venue</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={styles.cell}>Battle of Coders</td>
            <td style={styles.cell}>--</td>
            <td style={styles.cell}>--</td>
            <td style={styles.cell}>CSE DEPARTMENT</td>
          </tr>
          <tr>
            <td style={styles.cell}>Paper Presentation</td>
            <td style={styles.cell}>--</td>
            <td style={styles.cell}>--</td>
            <td style={styles.cell}>CSE DEPARTMENT</td>
          </tr>
          <tr>
            <td style={styles.cell}>Shark Tank</td>
            <td style={styles.cell}>--</td>
            <td style={styles.cell}>--</td>
            <td style={styles.cell}>CSE DEPARTMENT</td>
          </tr>
          <tr>
            <td style={styles.cell}>Pixel Playground UI</td>
            <td style={styles.cell}>--</td>
            <td style={styles.cell}>--</td>
            <td style={styles.cell}>CSE DEPARTMENT</td>
          </tr>
          <tr>
            <td style={styles.cell}>IPL Auction</td>
            <td style={styles.cell}>--</td>
            <td style={styles.cell}>--</td>
            <td style={styles.cell}>CSE DEPARTMENT</td>
          </tr>
          <tr>
            <td style={styles.cell}>Squid Verse</td>
            <td style={styles.cell}>--</td>
            <td style={styles.cell}>--</td>
            <td style={styles.cell}>CSE DEPARTMENT</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const styles = {
  container: {
    color: "white",
    textAlign: "center",
    padding: "20px",
  },
  title: {
    fontSize: "24px",
    marginBottom: "20px",
  },
  table: {
    width: "80%",
    margin: "0 auto",
    borderCollapse: "collapse",
  },
  cell: {
    border: "1px solid white",
    padding: "10px",
  },
};

export default Schedule;
