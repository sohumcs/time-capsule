import React, { useState, useEffect } from 'react';
import './TimeCapsuleList.css';

const TimeCapsuleList = ({ capsules }) => {
  const [countdowns, setCountdowns] = useState({});

  useEffect(() => {
    const timer = setInterval(() => {
      const newCountdowns = capsules.reduce((acc, capsule) => {
        const timeRemaining = new Date(capsule.unlockDate) - new Date();
        if (timeRemaining > 0) {
          acc[capsule.id] = timeRemaining;
        }
        return acc;
      }, {});
      setCountdowns(newCountdowns);
    }, 1000);

    return () => clearInterval(timer);
  }, [capsules]);

  const formatTime = (timeInMilliseconds) => {
    const seconds = Math.floor((timeInMilliseconds / 1000) % 60);
    const minutes = Math.floor((timeInMilliseconds / (1000 * 60)) % 60);
    const hours = Math.floor((timeInMilliseconds / (1000 * 60 * 60)) % 24);
    const days = Math.floor(timeInMilliseconds / (1000 * 60 * 60 * 24));

    return `${days}d ${hours}h ${minutes}m ${seconds}s`;
  };

  return (
    <div className="capsule-grid">
      {capsules.map((capsule) => {
        const isUnlocked = new Date(capsule.unlockDate) <= new Date();

        return (
          <div key={capsule.id} className="capsule-card">
            <h3>{capsule.title}</h3>
            <p>{capsule.content}</p>
            <p>
              Unlocks in:{' '}
              {countdowns[capsule.id]
                ? formatTime(countdowns[capsule.id])
                : 'Unlocked!'}
            </p>

            {/* Show file if capsule is unlocked */}
            {isUnlocked ? (
              capsule.file ? (
                <a href={URL.createObjectURL(capsule.file)} download={capsule.file.name}>
                  <button>Download File</button>
                </a>
              ) : (
                <p>No file attached.</p>
              )
            ) : (
              <p>File is locked until {new Date(capsule.unlockDate).toLocaleString()}</p>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default TimeCapsuleList;
