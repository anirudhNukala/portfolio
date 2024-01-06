import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/Navbar';
import './styles.css'; 
import SidebarLeft from './components/SidebarLeft';
import SidebarRight from './components/SidebarRight';
import Mindagile from './components/Mindagile';
import TA from './components/TA';
import PM from './components/PM';
import ClassMate from './components/ClassMate';
import Digestive from './components/Digestive';
import College from './components/College';

ReactDOM.render(
  <React.StrictMode>
    <div className="container">
      <SidebarLeft />
      <div className="content">
        <Navbar />
        <div style={{ display: 'flex' }}>
          <div style={{ flex: 1 }}>
            <h1>Professional Experience</h1>
            <Mindagile />
            <TA />
            <PM />
          </div>
          <div className='projects' style={{ flex: 1 }}>
            <h1>Projects</h1>
            <ClassMate />
            <Digestive />
            <College />
          </div>
        </div>
      </div>
      <div className='container'>
        <SidebarRight />
      </div>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);
