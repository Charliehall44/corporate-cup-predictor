// Main App component for Corporate Cup Predictor

import React, { useState, useEffect } from 'react';
import './App.css';
import { Header } from './components/Header';
import { ProgressIndicator } from './components/ProgressIndicator';
import { Step1 } from './components/Step1';
import { Step2 } from './components/Step2';
import { Step3 } from './components/Step3';
import { Step4 } from './components/Step4';
import { Success } from './components/Success';
import { AdminLogin } from './components/AdminLogin';
import { AdminPanel } from './components/AdminPanel';
import { submitEntry } from './storage';
import { EntryDto } from './types';

function App() {
  // Form state
  const [currentStep, setCurrentStep] = useState(1);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [totalGoals, setTotalGoals] = useState(10);
  const [mensTopScorer, setMensTopScorer] = useState('');
  const [mixedTopScorer, setMixedTopScorer] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  // Admin state
  const [showAdminLogin, setShowAdminLogin] = useState(false);
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const [tapCount, setTapCount] = useState(0);
  const [tapTimer, setTapTimer] = useState<NodeJS.Timeout | null>(null);

  // Handle triple-tap for admin access
  const handleCornerTap = () => {
    setTapCount((prev) => prev + 1);

    if (tapTimer) {
      clearTimeout(tapTimer);
    }

    const timer = setTimeout(() => {
      setTapCount(0);
    }, 1000);

    setTapTimer(timer);
  };

  useEffect(() => {
    if (tapCount === 3) {
      setShowAdminLogin(true);
      setTapCount(0);
    }
  }, [tapCount]);

  // Navigation handlers
  const goToStep = (step: number) => {
    setCurrentStep(step);
    setError('');
  };

  const handleNext = () => {
    goToStep(currentStep + 1);
  };

  const handleBack = () => {
    goToStep(currentStep - 1);
  };

  // Submit handler
  const handleSubmit = async () => {
    setIsSubmitting(true);
    setError('');

    const entry: EntryDto = {
      name,
      email,
      totalGoals,
      mensTopScorer,
      mixedTopScorer,
      donationScreenshot: '', // Not required anymore
    };

    const result = await submitEntry(entry);

    if (result.success) {
      setIsSuccess(true);
      setIsSubmitting(false);
    } else {
      setError(result.message || 'Failed to submit entry. Please try again.');
      setIsSubmitting(false);
    }
  };

  // Admin login handler
  const handleAdminLogin = () => {
    setIsAdminLoggedIn(true);
    setShowAdminLogin(false);
  };

  // Admin logout handler
  const handleAdminLogout = () => {
    setIsAdminLoggedIn(false);
  };

  // If admin is logged in, show admin panel
  if (isAdminLoggedIn) {
    return <AdminPanel onLogout={handleAdminLogout} />;
  }

  return (
    <div className="app-container">
      <Header />

      <main className="app-main">
        {!isSuccess && <ProgressIndicator currentStep={currentStep} totalSteps={4} />}

        {error && (
          <div className="error-message">
            {error}
          </div>
        )}

        {isSuccess ? (
          <Success
            name={name}
            email={email}
            totalGoals={totalGoals}
            mensTopScorer={mensTopScorer}
            mixedTopScorer={mixedTopScorer}
          />
        ) : (
          <>
            {currentStep === 1 && (
              <Step1
                name={name}
                email={email}
                onNameChange={setName}
                onEmailChange={setEmail}
                onNext={handleNext}
              />
            )}

            {currentStep === 2 && (
              <Step2
                totalGoals={totalGoals}
                onGoalsChange={setTotalGoals}
                onNext={handleNext}
                onBack={handleBack}
              />
            )}

            {currentStep === 3 && (
              <Step3
                mensTopScorer={mensTopScorer}
                mixedTopScorer={mixedTopScorer}
                onMensTopScorerChange={setMensTopScorer}
                onMixedTopScorerChange={setMixedTopScorer}
                onNext={handleNext}
                onBack={handleBack}
              />
            )}

            {currentStep === 4 && (
              <Step4
                onSubmit={handleSubmit}
                onBack={handleBack}
                isSubmitting={isSubmitting}
              />
            )}
          </>
        )}
      </main>

      <footer className="app-footer">
        RAISING FUNDS FOR <span className="footer-heart">♥</span> HEARTBEAT OF FOOTBALL • THE ACCESS GROUP 2025
      </footer>

      {/* Admin trigger - triple tap bottom right corner */}
      <button
        className="admin-trigger"
        onClick={handleCornerTap}
        aria-label="Admin access"
      />

      {/* Soccer Ball Admin Button */}
      {!isAdminLoggedIn && (
        <button
          onClick={() => setShowAdminLogin(true)}
          className="admin-soccer-ball"
          aria-label="Admin Login"
        >
          ⚽
        </button>
      )}

      {/* Admin login modal */}
      {showAdminLogin && (
        <AdminLogin
          onLogin={handleAdminLogin}
          onClose={() => setShowAdminLogin(false)}
        />
      )}
    </div>
  );
}

export default App;
