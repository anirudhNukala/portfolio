import React from "react";

const Digestive = () => {
  return (
    <div style={{ display: "flex", alignItems: "flex-start", border: "1px solid #000", maxWidth: "400px", padding: "20px", marginBottom: "10px" }}>
      <div>
        <p style={{ margin: 0, marginBottom: "10px" }}>Digestive System Study Tool</p>

        <ul style={{ listStyleType: "disc", margin: 0, paddingInlineStart: "20px" }}>
          <li style={{ fontSize: "12px", marginBottom: "5px" }}>
          Created an interactive study tool of the digestive system for AP Biology final project
          </li>
          <li style={{ fontSize: "12px", marginBottom: "5px" }}>
          Mapped out the digestive system as a whole with definitions to help future classes learn
          </li>
        </ul>
      </div>

      <div style={{ marginLeft: "auto" }}>
        <a href="https://github.com/anirudhNukala/digestiveSystemStudy" target="_blank">
          <img src="images/github_logo.png" alt="GitHub Link" style={{ width: "48px", height: "48px" }} />
        </a>
      </div>
    </div>
  );
};

export default Digestive;