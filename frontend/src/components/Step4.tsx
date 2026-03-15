// Step 4: Donation

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { DONATION_URL } from '../data';

interface Step4Props {
  onSubmit: () => void | Promise<void>;
  onBack: () => void;
  isSubmitting: boolean;
}

export const Step4: React.FC<Step4Props> = ({ onSubmit, onBack, isSubmitting }) => {
  const [donationStatus, setDonationStatus] = useState<'none' | 'donated' | 'will-donate'>('none');
  const navigate = useNavigate();

  // Donate flow:
  // • Mobile (iOS/Android) or PWA: save -> show local Thank You -> after short delay, same-tab redirect to charity page
  // • Desktop: save -> open charity in new tab (fallback to same tab if blocked)
  const handleDonateNow = async () => {
    if (isSubmitting) return;
    setDonationStatus('will-donate');

    // Detect PWA/standalone
    const isStandalone =
      (window.matchMedia && window.matchMedia('(display-mode: standalone)').matches) ||
      // @ts-ignore – iOS Safari proprietary flag
      (window.navigator && (window.navigator as any).standalone);

    // Detect iOS/Android
    const ua = navigator.userAgent || '';
    const isIOS =
      /iPhone|iPad|iPod/.test(ua) ||
      (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
    const isAndroid = /Android/.test(ua);
    const isMobile = isIOS || isAndroid;

    try {
      // 1) Save first so we never lose the entry
      await Promise.resolve(onSubmit());

      if (isStandalone || isMobile) {
        // 2) Go to local Thank You page
        navigate('/thank-you', { replace: false });

        // 3) After a short pause (allow UI render), redirect same tab to charity page
        setTimeout(() => {
          window.location.assign(DONATION_URL);
        }, 800); // tweak delay if you want a longer/shorter pause
      } else {
        // Desktop: try new tab, fallback to same tab
        const win = window.open(DONATION_URL, '_blank', 'noopener,noreferrer');
        if (!win) window.location.assign(DONATION_URL);
      }
    } catch {
      // Optional: show a toast/error so the user can retry
    }
  };

  // Already donated: just submit immediately (no charity navigation)
  const handleAlreadyDonated = async () => {
    if (isSubmitting) return;
    setDonationStatus('donated');

    try {
      await Promise.resolve(onSubmit());
      // Optional: navigate('/thank-you');
    } catch {
      // Optional: show error toast
    }
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
            disabled={isSubmitting}
          >
            <svg className="donation-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
            <div className="donation-text">
              <div className="donation-title">Donate $10 (minimum)</div>
              <div className="donation-description">Mobile: thank-you screen then donate; Desktop: new tab</div>
            </div>
          </button>

          <button
            className={`donation-button ${donationStatus === 'donated' ? 'selected' : ''}`}
            on
