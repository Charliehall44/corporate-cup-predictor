// Step 2: Goals Prediction

import React from 'react';

interface Step2Props {
  totalGoals: number;
  onGoalsChange: (goals: number) => void;
  onNext: () => void;
  onBack: () => void;
}

export const Step2: React.FC<Step2Props> = ({
  totalGoals,
  onGoalsChange,
  onNext,
  onBack,
}) => {
  const handleIncrement = () => {
    if (totalGoals < 99) {
      onGoalsChange(totalGoals + 1);
    }
  };

  const handleDecrement = () => {
    if (totalGoals > 0) {
      onGoalsChange(totalGoals - 1);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value) || 0;
    if (value >= 0 && value <= 99) {
      onGoalsChange(value);
    }
  };

  return (
    <div className="fade-in">
      <div className="card">
        <div className="card-header">
          <div className="step-label">02 — THE PREDICTION</div>
          <h2 className="card-title">TOTAL GOALS ACROSS BOTH TEAMS?</h2>
          <p className="card-description">
            Combined across ALL games played by the Men's Team and Mixed Team on the day
          </p>
        </div>

        {/* Game Format Info */}
        <div className="info-card" style={{ marginBottom: '2rem' }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
            <svg 
              style={{ width: '1.25rem', height: '1.25rem', color: '#e30613', flexShrink: 0, marginTop: '0.125rem' }}
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div style={{ flex: 1 }}>
              <p style={{ margin: 0, fontSize: '0.875rem', lineHeight: '1.5', color: '#999' }}>
                Each team will play a <strong style={{ color: '#fff' }}>minimum of 3 games</strong> and a <strong style={{ color: '#fff' }}>maximum of 6 games</strong> (6-12 games total). All games are <strong style={{ color: '#fff' }}>30 minutes</strong> each. Your prediction should be the <strong style={{ color: '#fff' }}>combined total goals</strong> scored across all these games by both teams.
              </p>
            </div>
          </div>
        </div>

        <div className="goals-input-container">
          <input
            type="number"
            className="goals-input"
            value={totalGoals}
            onChange={handleInputChange}
            min="0"
            max="99"
          />
        </div>

        <div className="goals-controls">
          <button
            className="goals-btn"
            onClick={handleDecrement}
            disabled={totalGoals === 0}
          >
            −
          </button>
          <button
            className="goals-btn"
            onClick={handleIncrement}
            disabled={totalGoals === 99}
          >
            +
          </button>
        </div>

        <div className="btn-group">
          <button className="btn btn-secondary" onClick={onBack}>
            ← BACK
          </button>
          <button className="btn btn-primary" onClick={onNext}>
            NEXT →
          </button>
        </div>
      </div>
    </div>
  );
};
