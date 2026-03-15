// Step 4: Donation

import React, { useState } from 'react';
import { DONATION_URL } from '../data';

interface Step4Props {
  onSubmit: () => void | Promise<void>;
  onBack: () => void;
  isSubmitting: boolean;
}

export const Step4: React.FC<Step4Props> = ({ onSubmit, onBack, isSubmitting }) => {
  const [donationStatus, setDonationStatus] = useState<'none' | 'donated' | 'will-donate'>('none');

  // Donate-now flow:
  // 1) Save the entry first (never lose submissions)
  // 2) iOS / standalone (PWA): navigate SAME TAB to avoid blank popup behaviour
  // 3) Others: open NEW TAB to the charity (fallback to same-tab if blocked)
  const handleDonateNow = async () => {
    if (isSubmitting) return;
    setDonationStatus('will-donate');

    // Detect iOS and standalone/PWA environments
    const isStandalone =
      (window.matchMedia && window.matchMedia('(display-mode: standalone)').matches) ||
      // @ts-ignore – iOS Safari proprietary flag
      (window.navigator && (window.navigator as any).standalone);

    const ua = navigator.userAgent || '';
    const isIOS =
      /iPhone|iPad|iPod/.test(ua) ||
      // iPadOS 13+ can present as Mac with touch
      (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);

    try {
      // 1) Save first so the entry is persisted before navigation
      await Promise.resolve(onSubmit());

      // 2) Navigate depending on environment
      if (isIOS || isStandalone) {
        // Same-tab navigation avoids iOS blank tab quirks
        window.location.assign(DONATION_URL);
      } else {
        // New tab on desktop / most Android
        const win = window.open(DONATION_URL, '_blank', 'noopener,noreferrer');
        if (!win) {
          // Popup blocked → fall back to same tab
          window.location.assign(DONATION_URL);
        }
      }
    } catch {
      // Optional: surface a toast/error so the user can retry
    }
  };

  // Already donated: submit immediately; no new tab needed
  const handleAlreadyDonated = async () => {
    if (isSubmitting) return;
    setDonationStatus('donated');

    try {
      await Promise.resolve(onSubmit());
      // Optionally navigate to a success screen here if your parent doesn't already do it
      // e.g., router.push('/success')
    } catch {
      // Optional: show a toast/error
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
              <div className="donation-title">
