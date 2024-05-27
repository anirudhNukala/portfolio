export default function Research() {
  return (
    <div style={{ display: "flex", alignItems: "flex-start", border: "1px solid #000", maxWidth: "400px", padding: "20px", marginBottom: "10px" }}>
      <img
        src="/images/tamu_health.jpeg"
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
        <p style={{ margin: 0 }}>Undergraduate Research Assistant</p>
        <p style={{ fontSize: "0.8em", color: "#888", margin: 0, marginBottom: "5px" }}>
          Texas A&M Health Sciences Center
        </p>

        <ul style={{ listStyleType: "disc", margin: 0, paddingInlineStart: "20px" }}>
          <li style={{ fontSize: "12px", marginBottom: "5px" }}>
          Contributed to OliviaHealth, a grant-funded project that enhances maternal and familial care
          </li>
          <li style={{ fontSize: "12px", marginBottom: "5px" }}>
          Developed an interactive user interface to easily allow patients to fill out maternal care forms
          </li>
          <li style={{ fontSize: "12px", marginBottom: "5px" }}>
          Worked closely with a small team and gave weekly demos
          </li>
        </ul>
      </div>

      <div style={{ marginLeft: "auto" }}>
        <p style={{ fontSize: "0.8em", color: "#888", margin: 0, marginBottom: "5px", wordWrap: "break-word" }}>
          College Station, TX
        </p>
        <p style={{ fontSize: "0.8em", color: "#888", margin: 0 }}>
          02/2024 - Present
        </p>
      </div>
    </div>
  );
}
