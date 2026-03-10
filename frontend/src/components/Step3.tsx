// Step 3: Top Scorers Selection

import React from 'react';
import { MENS_TEAM, MIXED_TEAM } from '../data';

interface Step3Props {
  mensTopScorer: string;
  mixedTopScorer: string;
  onMensTopScorerChange: (playerId: string) => void;
  onMixedTopScorerChange: (playerId: string) => void;
  onNext: () => void;
  onBack: () => void;
}

export const Step3: React.FC<Step3Props> = ({
  mensTopScorer,
  mixedTopScorer,
  onMensTopScorerChange,
  onMixedTopScorerChange,
  onNext,
  onBack,
}) => {
  const isValid = mensTopScorer !== '' && mixedTopScorer !== '';

  return (
    <div className="fade-in">
      <div className="card">
        <div className="card-header">
          <div className="step-label">03 — TOP SCORERS</div>
          <h2 className="card-title">WHO WILL SCORE THE MOST?</h2>
          <p className="card-description">
            Pick one player from each squad you think will lead the scoring on the day
          </p>
        </div>

        <div className="team-section">
          <h3 className="team-title">MEN'S TEAM</h3>
          <div className="player-grid">
            {MENS_TEAM.players.map((player) => (
              <button
                key={player.id}
                className={`player-button ${mensTopScorer === player.id ? 'selected' : ''}`}
                onClick={() => onMensTopScorerChange(player.id)}
              >
                {player.name}
              </button>
            ))}
          </div>
        </div>

        <div className="team-section">
          <h3 className="team-title">MIXED TEAM</h3>
          <div className="player-grid">
            {MIXED_TEAM.players.map((player) => (
              <button
                key={player.id}
                className={`player-button ${mixedTopScorer === player.id ? 'selected' : ''}`}
                onClick={() => onMixedTopScorerChange(player.id)}
              >
                {player.name}
              </button>
            ))}
          </div>
        </div>

        <div className="btn-group">
          <button className="btn btn-secondary" onClick={onBack}>
            ← BACK
          </button>
          <button
            className="btn btn-primary"
            onClick={onNext}
            disabled={!isValid}
          >
            NEXT →
          </button>
        </div>
      </div>
    </div>
  );
};
