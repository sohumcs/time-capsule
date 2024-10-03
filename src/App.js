import React, { useState } from 'react';
import './App.css';
import TimeCapsuleForm from './components/TimeCapsuleForm';
import TimeCapsuleList from './components/TimeCapsuleList';

function App() {
  const [capsules, setCapsules] = useState([]);

  const addCapsule = (capsule) => {
    setCapsules([...capsules, capsule]);
  };

  return (
    <div className="App">
      {/* Social Icons */}
      <div className="social-icons-vertical">
        <a href="https://github.com/sohumcs" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/sohumcs/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i>
        </a>
      </div>

      <h1>Digital Time Capsule</h1>
      
      <TimeCapsuleForm onCreateCapsule={addCapsule} />
      <h2>Upcoming Capsules</h2>
      <TimeCapsuleList capsules={capsules} />
    </div>
  );
}

export default App;
