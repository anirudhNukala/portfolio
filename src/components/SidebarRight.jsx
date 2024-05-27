

export default function SidebarRight() {
    return (
        <div className="sidebar-right" style={{ marginTop: "125px" }}>
            <h2>Activities</h2>
            <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
                <li>
                    Craig and Galen Brown Engineering Honors Program
                </li>
                <li>
                    Aggie Coding Club
                </li>
                <li>
                    Texas A&M Computing Society (ACM)
                </li>
            </ul>
            <h2>Certifications</h2>
            <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
                <li>
                Certified Entry Level Python Programmer (PCEP-30-01)
                </li>
            </ul>
            <h2>Coursework</h2>
            <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
                <li>
                   Data Structures and Algorithms
                </li>
                <li>
                    Discrete Math (Honors)
                </li>
                <li>
                    Computer Architecture
                </li>
                <li>
                    Functional & Object Oriented Programming
                </li>
            </ul>
        </div>
    )
}

