// Success screen component

import React from 'react';
import { MENS_TEAM, MIXED_TEAM } from '../data';

interface SuccessProps {
  name: string;
  email: string;
  totalGoals: number;
  mensTopScorer: string;
  mixedTopScorer: string;
}

export const Success: React.FC<SuccessProps> = ({
  name,
  email,
  totalGoals,
  mensTopScorer,
  mixedTopScorer,
}) => {
  const getMensPlayerName = (id: string) => {
    return MENS_TEAM.players.find((p) => p.id === id)?.name || '';
  };

  const getMixedPlayerName = (id: string) => {
    return MIXED_TEAM.players.find((p) => p.id === id)?.name || '';
  };

  return (
    <div className="success-container fade-in">
      <div className="success-icon">
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
        </svg>
      </div>

      <h2 className="success-title">ENTRY LOCKED IN!</h2>
      
      <p className="success-message">
        Thanks for supporting Heartbeat of Football! Your prediction has been recorded. 
        We'll announce the winner after the tournament on March 20, 2026. Good luck! 🏆
      </p>

      <div className="summary-card">
        <h3 className="summary-title">YOUR PREDICTION</h3>
        
        <div className="summary-item">
          <span className="summary-label">Name</span>
          <span className="summary-value">{name}</span>
        </div>
        
        <div className="summary-item">
          <span className="summary-label">Email</span>
          <span className="summary-value">{email}</span>
        </div>
        
        <div className="summary-item">
          <span className="summary-label">Total Goals</span>
          <span className="summary-value">{totalGoals}</span>
        </div>
        
        <div className="summary-item">
          <span className="summary-label">Men's Top Scorer</span>
          <span className="summary-value">{getMensPlayerName(mensTopScorer)}</span>
        </div>
        
        <div className="summary-item">
          <span className="summary-label">Mixed Top Scorer</span>
          <span className="summary-value">{getMixedPlayerName(mixedTopScorer)}</span>
        </div>
      </div>

      <button
        className="btn btn-primary"
        onClick={() => window.location.reload()}
        style={{ marginTop: '2rem' }}
      >
        MAKE ANOTHER ENTRY
      </button>
    </div>
  );
};
