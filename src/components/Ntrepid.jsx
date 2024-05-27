export default function Ntrepid() {
    return (
        <div style={{ display: "flex", alignItems: "flex-start", border: "1px solid #000", maxWidth: "400px", padding: "20px", marginBottom: "10px" }}>
            <img
                src="/images/ntrepid.jpeg"
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
                <p style={{ margin: 0 }}>Software Engineering Intern</p>
                <p style={{ fontSize: "0.8em", color: "#888", margin: 0, marginBottom: "5px" }}>Ntrepid LLC</p>

                <ul style={{ listStyleType: "disc", margin: 0, paddingInlineStart: "20px" }}>
                <li style={{ fontSize: "12px", marginBottom: "5px" }}>Languages/Tools: Vue.js, Springboot, Python, E2E Testing</li>

                </ul>
            </div>

            <div style={{ marginLeft: "auto" }}>
                <p style={{ fontSize: "0.8em", color: "#888", margin: 0, marginBottom: "5px", wordWrap: "break-word" }}>Herndon, VA</p>
                <p style={{ fontSize: "0.8em", color: "#888", margin: 0 }}>05/2024 - Present</p>
            </div>
        </div>
    );
}