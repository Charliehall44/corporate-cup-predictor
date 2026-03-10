// Step 1: Personal Details

import React from 'react';

interface Step1Props {
  name: string;
  email: string;
  onNameChange: (name: string) => void;
  onEmailChange: (email: string) => void;
  onNext: () => void;
}

export const Step1: React.FC<Step1Props> = ({
  name,
  email,
  onNameChange,
  onEmailChange,
  onNext,
}) => {
  const isValid = name.trim().length > 0 && email.includes('@');

  return (
    <div className="fade-in">
      <div className="info-card">
        <div className="info-card-header">
          <svg className="info-icon" viewBox="0 0 24 24" fill="currentColor">
            <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
          </svg>
          <h2 className="info-card-title">WIN A PREMIER LEAGUE SHIRT</h2>
        </div>
        <p className="info-card-description">
          Closest predictor takes home a shirt of their choice — paid for by The Access Group.
        </p>
      </div>

      <div className="how-it-works">
        <div className="section-title-wrapper">
          <svg className="section-icon" viewBox="0 0 24 24" fill="currentColor">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2" fill="none" stroke="currentColor" strokeWidth="2"/>
            <path d="M9 11l3 3 5-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <h3 className="section-title">HOW IT WORKS</h3>
        </div>
        <ol className="steps-list">
          <li className="step-item">
            <span className="step-number">1.</span>
            <span className="step-text">
              Enter your details and make your prediction on the <strong>total number of goals</strong> scored across all games by both the Men's Team and Mixed Team combined.
            </span>
          </li>
          <li className="step-item">
            <span className="step-number">2.</span>
            <span className="step-text">
              Pick a <strong>top scorer</strong> from each squad — the player you think will score the most on the day.
            </span>
          </li>
          <li className="step-item">
            <span className="step-number">3.</span>
            <span className="step-text">
              Donate a <strong>minimum of $10 AUD</strong> (or more if you wish!) to Heartbeat of Football to lock in your entry.
            </span>
          </li>
          <li className="step-item">
            <span className="step-number">4.</span>
            <span className="step-text">
              The person <strong>closest to the total goals</strong> wins the shirt. Results announced after the tournament.
            </span>
          </li>
        </ol>
        <p className="tie-breaker">
          <strong>Tie-breaker:</strong> If two people predict the same total goals, the winner is whoever picked the most correct top scorers. If still tied — the earliest submission wins. Good luck! 🏆
        </p>
      </div>

      <div className="card">
        <div className="card-header">
          <div className="step-label">01 — YOUR DETAILS</div>
          <h2 className="card-title">FULL NAME</h2>
        </div>

        <div className="input-group">
          <input
            type="text"
            className="input-field"
            placeholder="e.g. Sarah Johnson"
            value={name}
            onChange={(e) => onNameChange(e.target.value)}
          />
        </div>

        <div className="card-header">
          <h2 className="card-title">EMAIL ADDRESS</h2>
        </div>

        <div className="input-group">
          <input
            type="email"
            className="input-field"
            placeholder="e.g. sarah@theaccessgroup.com"
            value={email}
            onChange={(e) => onEmailChange(e.target.value)}
          />
        </div>

        <button
          className="btn btn-primary"
          onClick={onNext}
          disabled={!isValid}
        >
          NEXT →
        </button>
      </div>
    </div>
  );
};
