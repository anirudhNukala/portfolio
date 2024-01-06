import React from "react";

const PM = () => {
  return (
    <div style={{ display: "flex", alignItems: "flex-start", border: "1px solid #000", maxWidth: "400px", padding: "20px", marginBottom: "10px" }}>
      <img
        src="/images/acc_logo.jpeg"
        alt="Aggie Coding Club Logo"
        style={{
          width: "48px",
          height: "48px",
          borderRadius: "50%",
          marginRight: "10px",
          border: "1px solid #000"
        }}
      />

      <div>
        <p style={{ margin: 0 }}>Project Manager</p>
        <p style={{ fontSize: "0.8em", color: "#888", margin: 0, marginBottom: "5px" }}>
          Aggie Coding Club
        </p>

        <ul style={{ listStyleType: "disc", margin: 0, paddingInlineStart: "20px" }}>
          <li style={{ fontSize: "12px", marginBottom: "5px" }}>
          Managed the construction of the back end on a team of around 15 people
          </li>
          <li style={{ fontSize: "12px", marginBottom: "5px" }}>
          Integrated Firebase into the project to allow for user authentication and a database
          </li>
          <li style={{ fontSize: "12px", marginBottom: "5px" }}>
          This project aimed to provide students who were gym enthusiasts an opportunity to network with each other
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PM;
