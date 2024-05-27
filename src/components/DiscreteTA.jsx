

export default function DiscreteTA() {
  return (
    <div style={{ display: "flex", alignItems: "flex-start", border: "1px solid #000", maxWidth: "400px", padding: "20px", marginBottom: "10px" }}>
      <img
        src="/images/tamu_cse.jpeg"
        alt="Mindagile Logo"
        style={{
          width: "48px",
          height: "48px",
          borderRadius: "50%",
          marginRight: "10px",
          border: "1px solid #000"
        }}
      />

      <div style={{ flex: 1 }}>
        <p style={{ margin: 0 }}>Undergraduate Teaching Assistant</p>
        <p style={{ fontSize: "0.8em", color: "#888", margin: 0, marginBottom: "5px" }}>
          Texas A&M Department of Computer Science and Engineering
        </p>

        <ul style={{ listStyleType: "disc", margin: 0, paddingInlineStart: "20px" }}>
          <li style={{ fontSize: "12px", marginBottom: "5px" }}>
            Showed a strong grip on Discrete Mathematics topics to assist 300+ students with homework
          </li>
          <li style={{ fontSize: "12px", marginBottom: "5px" }}>
            Conducted weekly office hours, answered queries, helped with homework, and helped prepare for quizzes/exams
          </li>
          <li style={{ fontSize: "12px", marginBottom: "5px" }}>
            Took on the responsibility for grading homework, quizzes, and exams
          </li>
        </ul>
      </div>

      <div style={{ marginLeft: "auto" }}>
        <p style={{ fontSize: "0.8em", color: "#888", margin: 0, marginBottom: "5px", wordWrap: "break-word" }}>
          College Station, TX
        </p>
        <p style={{ fontSize: "0.8em", color: "#888", margin: 0 }}>
          01/2024 - Present
        </p>
      </div>
    </div>
  );
}
