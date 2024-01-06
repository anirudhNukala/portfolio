import React from "react";

const Digestive = () => {
  return (
    <div style={{ display: "flex", alignItems: "flex-start", border: "1px solid #000", maxWidth: "400px", padding: "20px", marginBottom: "10px" }}>
      <div>
        <p style={{ margin: 0 }}>Digestive System Study Tool</p>
        <div style={{ fontSize: "0.8em", color: "#888", margin: 0, marginBottom: "5px", fontStyle: "italic" }}>
            <a href="https://github.com/anirudhNukala/digestiveSystemStudy">https://github.com/anirudhNukala/digestiveSystemStudy</a>
        </div>

        <ul style={{ listStyleType: "disc", margin: 0, paddingInlineStart: "20px" }}>
          <li style={{ fontSize: "12px", marginBottom: "5px" }}>
          Created an interactive study tool of the digestive system for AP Biology final project
          </li>
          <li style={{ fontSize: "12px", marginBottom: "5px" }}>
          Mapped out the digestive system as a whole with definitions to help future classes learn
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Digestive;