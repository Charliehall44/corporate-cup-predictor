// Header component for Corporate Cup Predictor

import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="app-header">
      <div className="logo-container">
        <svg className="logo" viewBox="0 0 200 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <text x="10" y="35" fontFamily="Arial, sans-serif" fontSize="28" fontWeight="bold" fill="#ffffff">
            access
          </text>
          <rect x="150" y="8" width="40" height="20" rx="4" fill="#e30613"/>
          <text x="158" y="23" fontFamily="Arial, sans-serif" fontSize="12" fontWeight="bold" fill="#ffffff">
            evo
          </text>
        </svg>
      </div>
      
      <div className="charity-badge">
        <svg className="charity-icon" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
        </svg>
        HEARTBEAT OF FOOTBALL • FUNDRAISER
      </div>
      
      <h1 className="app-title">
        CORPORATE<br/>
        <span className="highlight">CUP</span> PREDICTOR
      </h1>
      
      <div className="event-details">
        <svg className="event-icon" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zM9 14H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2zm-8 4H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2z"/>
        </svg>
        20 MARCH 2025 • SYDNEY
      </div>
    </header>
  );
};
