
import '../styles.css';

export default function Navbar() {
    const circleContainerStyle = {
        width: '72px', 
        height: '72px',
        borderRadius: '50%', 
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#EFEFEF',
        margin: '8px', 
        border: '2px solid black',
    };

    const imageStyle = {
        width: '48px', 
        height: '48px', 
    };

    return (
        <nav>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex' }}>
                <li style={circleContainerStyle}>
                    <img src={'/images/python_logo.png'} alt="Python Logo" style={imageStyle} />
                </li>
                <li style={circleContainerStyle}>
                    <img src={'/images/javascript_logo.png'} alt="JavaScript Logo" style={imageStyle} />
                </li>
                <li style={circleContainerStyle}>
                    <img src="/images/react_logo.png" alt="React Logo" style={imageStyle} />
                </li>
                <li style={circleContainerStyle}>
                    <img src="/images/cpp_logo.png" alt="C++ Logo" style={imageStyle} />
                </li>
                <li style={circleContainerStyle}>
                    <img src="/images/gcp_logo.png" alt="GCP Logo" style={imageStyle} />
                </li>
                <li style={circleContainerStyle}>
                    <img src="/images/git_logo.png" alt="Git Logo" style={imageStyle} />
                </li>
                <li style={circleContainerStyle}>
                    <img src="/images/mySQL_logo.png" alt="mySQL Logo" style={imageStyle} />
                </li>
                <li style={circleContainerStyle}>
                    <img src="/images/nodejs_logo.png" alt="Node.js Logo" style={imageStyle} />
                </li>
                <li style={circleContainerStyle}>
                    <img src="/images/html_logo.png" alt="HTML Logo" style={imageStyle} />
                </li>
                <li style={circleContainerStyle}>
                    <img src="/images/css_logo.png" alt="CSS Logo" style={imageStyle} />
                </li>
                <li style={circleContainerStyle}>
                    <img src="/images/typescript_logo.png" alt="TypeScript Logo" style={imageStyle} />
                </li>
                
            </ul>
        </nav>
    );
}
