import React from 'react';
import ReactDOM from 'react-dom/client';
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
import DiscreteTA from './components/DiscreteTA';
import Research from './components/Research';
import Ntrepid from './components/Ntrepid';
import ProfRec from './components/ProfRec';
import STEM4Stems from './STEM4Stems';


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="container">
      <SidebarLeft />
      <div className="content">
        <Navbar />
        <div style={{ display: 'flex' }}>
          <div style={{ flex: 1 }}>
            <h1>Professional Experience</h1>
            <Ntrepid />
            <Research />
            <DiscreteTA />
            <TA />
            <Mindagile />
            <PM />
          </div>
          <div className='projects' style={{ flex: 1 }}>
            <h1>Projects</h1>
            <STEM4Stems />
            <ProfRec />
            <ClassMate />
            <College />
            <Digestive />
          </div>
        </div>
      </div>
      <div className='container'>
        <SidebarRight />
      </div>
    </div>
  </React.StrictMode>
);
