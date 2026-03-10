// Step 4: Donation

import React, { useState } from 'react';
import { DONATION_URL } from '../data';

interface Step4Props {
  onSubmit: () => void;
  onBack: () => void;
  isSubmitting: boolean;
}

export const Step4: React.FC<Step4Props> = ({ onSubmit, onBack, isSubmitting }) => {
  const [donationStatus, setDonationStatus] = useState<'none' | 'donated' | 'will-donate'>('none');

  const handleDonateNow = () => {
    setDonationStatus('will-donate');
    window.open(DONATION_URL, '_blank');
  };

  const handleAlreadyDonated = () => {
    setDonationStatus('donated');
  };

  const canSubmit = donationStatus !== 'none';

  return (
    <div className="fade-in">
      <div className="card">
        <div className="card-header">
          <div className="step-label">04 — LOCK IN YOUR PICKS</div>
          <h2 className="card-title">DONATE TO ENTER</h2>
          <p className="card-description">
            Donate a <strong>minimum of $10 AUD</strong> (or more if you wish!) to Heartbeat of Football to lock in your entry. 
            All proceeds go directly to the charity.
          </p>
        </div>

        <div className="donation-options">
          <button
            className={`donation-button ${donationStatus === 'will-donate' ? 'selected' : ''}`}
            onClick={handleDonateNow}
          >
            <svg className="donation-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
            <div className="donation-text">
              <div className="donation-title">Donate $10 (minimum)</div>
              <div className="donation-description">Opens donation page in new tab (minimum $10, donate more if you wish!)</div>
            </div>
          </button>

          <button
            className={`donation-button ${donationStatus === 'donated' ? 'selected' : ''}`}
            onClick={handleAlreadyDonated}
          >
            <svg className="donation-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
            </svg>
            <div className="donation-text">
              <div className="donation-title">Already Donated</div>
              <div className="donation-description">I've already made my $10+ donation</div>
            </div>
          </button>
        </div>

        {donationStatus === 'will-donate' && (
          <div className="info-card" style={{ marginTop: '1rem' }}>
            <p className="card-description">
              ✅ After donating, come back here and click "Submit Entry" to lock in your picks!
            </p>
          </div>
        )}

        {donationStatus === 'donated' && (
          <div className="info-card" style={{ marginTop: '1rem' }}>
            <p className="card-description">
              ✅ Thank you for supporting Heartbeat of Football! Click "Submit Entry" to complete your prediction.
            </p>
          </div>
        )}

        <div className="btn-group">
          <button
            className="btn btn-secondary"
            onClick={onBack}
            disabled={isSubmitting}
          >
            ← BACK
          </button>
          <button
            className="btn btn-primary"
            onClick={onSubmit}
            disabled={!canSubmit || isSubmitting}
          >
            {isSubmitting ? 'SUBMITTING...' : 'SUBMIT ENTRY →'}
          </button>
        </div>

        <p className="text-center text-muted" style={{ marginTop: '1rem', fontSize: '0.75rem' }}>
          By submitting, you confirm you've donated at least $10 AUD (or more!) to Heartbeat of Football
        </p>
      </div>
    </div>
  );
};
