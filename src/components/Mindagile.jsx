

export default function Mindagile() {
  return (
    <div style={{ display: "flex", alignItems: "flex-start", border: "1px solid #000", maxWidth: "400px", padding: "20px", marginBottom: "10px" }}>
      <img
        src="/images/mindagile_logo.jpeg"
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
        <p style={{ margin: 0 }}>Software Development Intern</p>
        <p style={{ fontSize: "0.8em", color: "#888", margin: 0, marginBottom: "5px" }}>
          Mindagile Consulting
        </p>

        <ul style={{ listStyleType: "disc", margin: 0, paddingInlineStart: "20px" }}>
          <li style={{ fontSize: "12px", marginBottom: "5px" }}>
            Productionized an existing web app that used a GPT-3 API to generate math quizzes for middle-school-aged students
          </li>
          <li style={{ fontSize: "12px", marginBottom: "5px" }}>
            Constructed the app using Pug.js and Express.js and successfully deployed it to Google App Engine
          </li>
          <li style={{ fontSize: "12px", marginBottom: "5px" }}>
            Integrated Auth0 into the app to successfully build a user authentication system
          </li>
        </ul>
      </div>

      <div style={{ marginLeft: "auto" }}>
        <p style={{ fontSize: "0.8em", color: "#888", margin: 0 }}>
          Dallas, TX
        </p>
        
        <p style={{ fontSize: "0.8em", color: "#888", margin: 0, marginTop: "5px" }}>
          05/2023 - 08/2023
        </p>
      </div>
    </div>
  );
}

