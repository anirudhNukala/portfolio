export default function STEM4Stems() {
    return (
      <div style={{ display: "flex", alignItems: "flex-start", border: "1px solid #000", maxWidth: "400px", padding: "20px", marginBottom: "10px" }}>
        <div>
          <p style={{ margin: 0, marginBottom: "10px" }}>STEM4Stems</p>
  
          <ul style={{ listStyleType: "disc", margin: 0, paddingInlineStart: "20px" }}>
            <li style={{ fontSize: "12px", marginBottom: "5px" }}>
            Developed an interactive webpage for young children interested in STEM
            </li>
            <li style={{ fontSize: "12px", marginBottom: "5px" }}>
            Utilized OpenAI API to generate practice quizzes and fun facts and Three.js to create a visually stunning UI
            </li>
          </ul>
        </div>
  
        <div style={{ marginLeft: "auto" }}>
          <a href="https://github.com/arihants04/stem4stems" target="_blank" rel="noopener noreferrer">
            <img src="images/github_logo.png" alt="GitHub Link" style={{ width: "48px", height: "48px" }} />
          </a>
        </div>
      </div>
    );
  }