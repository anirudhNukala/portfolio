import React from "react";

const ClassMate = () => {
  return (
    <div style={{ display: "flex", alignItems: "flex-start", border: "1px solid #000", maxWidth: "400px", padding: "20px", marginBottom: "10px" }}>
      <div>
        <p style={{ margin: 0, marginBottom: "10px" }}>ClassMate (TAMUHack)</p>

        <ul style={{ listStyleType: "disc", margin: 0, paddingInlineStart: "20px" }}>
          <li style={{ fontSize: "12px", marginBottom: "5px" }}>
          Created an app that allowed students who wanted to switch classes outside the traditional scheduling system
          </li>
          <li style={{ fontSize: "12px", marginBottom: "5px" }}>
          Implemented the Home and Profile pages to allow users to have a seamless experience when using the app
          </li>
        </ul>
      </div>

      <div style={{ marginLeft: "auto" }}>
        <a href="https://github.com/arihants04/ClassMate" target="_blank">
          <img src="images/github_logo.png" alt="GitHub Link" style={{ width: "48px", height: "48px" }} />
        </a>
      </div>
    </div>
  );
};

export default ClassMate;