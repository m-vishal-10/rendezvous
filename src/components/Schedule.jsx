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
            <td style={styles.cell}>ENVISION</td>
            <td style={styles.cell}>John Doe</td>
            <td style={styles.cell}>123-456-7890</td>
            <td style={styles.cell}>CSE BLOCK- I AV HALL</td>
          </tr>
          <tr>
            <td style={styles.cell}>CODE-RPG</td>
            <td style={styles.cell}>Jane Smith</td>
            <td style={styles.cell}>987-654-3210</td>
            <td style={styles.cell}>COMPUTER CENTER - II</td>
          </tr>
          <tr>
            <td style={styles.cell}>BGMI-TOURNAMENT</td>
            <td style={styles.cell}>Michael Brown</td>
            <td style={styles.cell}>555-678-1234</td>
            <td style={styles.cell}>COMPUTER CENTER - III</td>
          </tr>
          <tr>
            <td style={styles.cell}>PEC's IPL AUCTION</td>
            <td style={styles.cell}>Sarah Johnson</td>
            <td style={styles.cell}>444-333-2222</td>
            <td style={styles.cell}>CSE BLOCK- III AV HALL</td>
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
