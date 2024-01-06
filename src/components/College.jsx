import React from "react";

const College = () => {
  return (
    <div style={{ display: "flex", alignItems: "flex-start", border: "1px solid #000", maxWidth: "400px", padding: "20px", marginBottom: "10px" }}>
      <div>
        <p style={{ margin: 0 }}>College Chance Calculator</p>
        <div style={{ fontSize: "0.8em", color: "#888", margin: 0, marginBottom: "5px", fontStyle: "italic", }}>
          <a href="https://github.com/anirudhNukala/collegeChanceCalculator">https://github.com/anirudhNukala/collegeChanceCalculator</a>
        </div>

        <ul style={{ listStyleType: "disc", margin: 0, paddingInlineStart: "20px" }}>
          <li style={{ fontSize: "12px", marginBottom: "5px" }}>
          Created a tool that gives High School Seniors an idea of their chance of admission at various colleges
          </li>
          <li style={{ fontSize: "12px", marginBottom: "5px" }}>
          Results derived from the user’s SAT/ACT score and data from the National Center for Education Statistics (NCES)
          </li>
          <li style={{ fontSize: "12px", marginBottom: "5px" }}>
          Results gave one of three indicators (green, yellow, red) which reflected the user’s chance of admission
          </li>
        </ul>
      </div>
    </div>
  );
};

export default College;