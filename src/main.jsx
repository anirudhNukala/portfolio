import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Navbar from './components/Navbar';
import './styles.css'; 
import SidebarLeft from './components/SidebarLeft';
import SidebarRight from './components/SidebarRight';
import Mindagile from './components/Mindagile';

ReactDOM.render(
  <React.StrictMode>
    <div className="container">
      <SidebarLeft />
      <div className="content">
        <Navbar />
        <Mindagile />
        <div className='container'>
          <SidebarRight />
        </div>
        <App />
      </div>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);
