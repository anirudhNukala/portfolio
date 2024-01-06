import React from "react";

const TA = () => {
  return (
    <div style={{ display: "flex", alignItems: "flex-start", border: "1px solid #000", maxWidth: "400px", padding: "20px", marginBottom: "10px" }}>
      <img
        src="/images/tamu_logo.jpeg"
        alt="Mindagile Logo"
        style={{
          width: "48px",
          height: "48px",
          borderRadius: "50%",
          marginRight: "10px",
          border: "1px solid #000"
        }}
      />

      <div>
        <p style={{ margin: 0 }}>Undergraduate Teaching Assistant</p>
        <p style={{ fontSize: "0.8em", color: "#888", margin: 0, marginBottom: "5px" }}>
          Texas A&M College of Engineering
        </p>

        <ul style={{ listStyleType: "disc", margin: 0, paddingInlineStart: "20px" }}>
          <li style={{ fontSize: "12px", marginBottom: "5px" }}>
          Demonstrated a strong grasp of Python programming to assist students with coding labs
          </li>
          <li style={{ fontSize: "12px", marginBottom: "5px" }}>
          Offered valuable academic advising to freshmen, guiding them through their transition to college
          </li>
          <li style={{ fontSize: "12px", marginBottom: "5px" }}>
          Conducted office hours, addressing student inquiries, clarifying doubts, and additional guidance
          </li>
          <li style={{ fontSize: "12px", marginBottom: "5px" }}>
          Assumed responsibility for grading and proctoring homework, quizzes, and tests
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TA;
