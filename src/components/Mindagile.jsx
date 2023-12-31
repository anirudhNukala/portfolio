import React from "react";

const Mindagile = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        //border: "1px solid #000",
        //padding: "10px", 
      }}
    >
      <img
        src="/images/mindagile_logo.jpeg"
        alt="Mindagile Logo"
        style={{
          width: "48px",
          height: "48px",
          borderRadius: "50%",
          marginRight: "10px",
        }}
      />
      <div>
        <p style={{ margin: 0 }}>Software Development Intern</p>
        <p style={{ fontSize: "0.8em", color: "#888", margin: 0 }}>
          Mindagile Consulting
        </p>
      </div>
    </div>
  );
};

export default Mindagile;
