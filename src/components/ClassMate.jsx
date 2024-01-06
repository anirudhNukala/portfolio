import React from "react";

const ClassMate = () => {
  return (
    <div style={{ display: "flex", alignItems: "flex-start", border: "1px solid #000", maxWidth: "400px", padding: "20px", marginBottom: "10px" }}>
      <div>
        <p style={{ margin: 0 }}>ClassMate (TAMUHack)</p>
        <div style={{ fontSize: "0.8em", color: "#888", margin: 0, marginBottom: "5px", fontStyle: "italic" }}>
            <a href="https://github.com/arihants04/ClassMate">https://github.com/arihants04/ClassMate</a>
        </div>

        <ul style={{ listStyleType: "disc", margin: 0, paddingInlineStart: "20px" }}>
          <li style={{ fontSize: "12px", marginBottom: "5px" }}>
          Created an app that allowed students who wanted to switch classes outside the traditional scheduling system
          </li>
          <li style={{ fontSize: "12px", marginBottom: "5px" }}>
          Implemented the Home and Profile pages to allow users to have a seamless experience when using the app
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ClassMate;