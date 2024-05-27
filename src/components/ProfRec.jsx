export default function ProfRec() {
    return (
      <div style={{ display: "flex", alignItems: "flex-start", border: "1px solid #000", maxWidth: "400px", padding: "20px", marginBottom: "10px" }}>
        <div>
          <p style={{ margin: 0, marginBottom: "10px" }}>Aggie ProfRec</p>
  
          <ul style={{ listStyleType: "disc", margin: 0, paddingInlineStart: "20px" }}>
            <li style={{ fontSize: "12px", marginBottom: "5px" }}>
            Created a REST API that combined data from Rate My Professor and Texas A&M Grade Distribution
            </li>
            <li style={{ fontSize: "12px", marginBottom: "5px" }}>
            Developed a full-stack web application utilizing Next.js and Flask to display data from the API
            </li>
            <li style={{ fontSize: "12px", marginBottom: "5px" }}>
                Developed a user-friendly website that allowed students to see Texas A&M Professor&apos;s grade distributions and compare them with other professors
            </li>
          </ul>
        </div>
  
        <div style={{ marginLeft: "auto" }}>
          <a href="https://github.com/vedarth31/prof-rec" target="_blank" rel="noopener noreferrer">
            <img src="images/github_logo.png" alt="GitHub Link" style={{ width: "48px", height: "48px" }} />
          </a>
        </div>
      </div>
    );
  }