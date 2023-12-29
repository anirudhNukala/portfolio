import React from 'react';
import '../styles.css';


const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <svg width="48" height="48" viewBox='0 0 512 512' xmlns="http://www.w3.org/2000/svg">
            <path d="M194.005,240.252h105.054c29.216,0,52.529-24.101,52.529-53.414V86.603c0-28.525-24.002-49.871-52.529-54.691c-35.214-5.804-73.478-5.509-105.054,0.097c-44.462,7.87-52.527,24.298-52.527,54.693v21.453H246.63v31.959H102.033c-30.591,0-57.349,18.394-65.709,53.315c-9.64,40.035-10.033,65.02,0,106.826c7.476,31.085,25.28,53.314,55.872,53.314h36.101v-48.001C128.296,270.845,158.298,240.252,194.005,240.252L194.005,240.252z" fill="#347AB4" />
            <path d="M474.975,209.372c-7.575-30.395-21.935-53.315-52.527-53.315h-39.443v46.626c0,36.199-30.692,66.691-65.71,66.691H212.24c-28.724,0-52.528,24.594-52.528,53.414v100.138c0,28.524,24.788,45.246,52.528,53.413c33.247,9.737,65.215,11.509,105.054,0c26.462-7.675,52.529-23.116,52.529-53.413v-20.997H264.867v-32.417h157.58c30.593,0,41.904-21.346,52.527-53.314C485.992,283.244,485.501,251.57,474.975,209.372L474.975,209.372z" fill="#FFCA1D" />
            <path d="M187.415,89.594c-10.479,0-18.975-8.591-18.975-19.164c0.094-10.668,8.496-19.259,18.975-19.259c10.385,0,18.976,8.685,18.976,19.259C206.39,81.003,197.894,89.594,187.415,89.594z" fill="#FFFFFF" />
            <path d="M314.908,460.076c-10.479,0-18.976-8.591-18.976-19.164c0.095-10.668,8.496-19.259,18.976-19.259c10.385,0,18.976,8.685,18.976,19.259C333.884,451.485,325.388,460.076,314.908,460.076z" fill="#FFFFFF" />
          </svg>
        </li>
        <li>
            <img src={'/images/javascript_logo.png'} alt="JavaScript Logo" style={{ width: '48px', height: '48px' }} />
        </li>
        <li>
            <img src="/images/react_logo.png" alt="React Logo" style={{width: '48px', height: '48px'}} />
        </li>
        <li>
            <img src="/images/gcp_logo.png" alt="GCP Logo" style={{width: '48px', height: '48px'}} />
        </li>
        <li>
            <img src="/images/git_logo.png" alt="Git Logo" style={{width: '48px', height: '48px'}} />
        </li>
        <li>
            <img src="/images/mySQL_logo.png" alt="mySQL Logo" style={{width: '48px', height: '48px'}} />
        </li>
        <li>
            <img src="/images/nodejs_logo.png" alt="Node.js Logo" style={{width: '48px', height: '48px'}} />
        </li>
        <li>
            <img src="/images/html_logo.png" alt="HTML Logo" style={{width: '48px', height: '48px'}} />
        </li>
        <li>
            <img src="/images/css_logo.png" alt="CSS Logo" style={{width: '48px', height: '48px'}} />
        </li>
        <li>
            <img src="/images/typescript_logo.png" alt="TypeScript Logo" style={{width: '48px', height: '48px'}} />
        </li>
        <li>
            <img src="/images/auth0_logo.png" alt="Auth0 Logo" style={{width: '48px', height: '48px'}} />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

