import React from "react";

const SidebarRight = () => {
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
                    Aggie Data Science Club
                </li>
            </ul>
            <h2>Certifications</h2>
            <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
                <li>
                    Entry Level Python Certificate (Python Institute)
                </li>
            </ul>
            <h2>Coursework</h2>
            <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
                <li>
                    Program Designs and Concepts (C++)
                </li>
                <li>
                    Discrete Math
                </li>
                <li>
                    Statistics I
                </li>
                <li>
                    Linear Algebra
                </li>
            </ul>
        </div>
    )
}

export default SidebarRight;
