// Progress Indicator component

import React from 'react';

interface ProgressIndicatorProps {
  currentStep: number;
  totalSteps: number;
}

export const ProgressIndicator: React.FC<ProgressIndicatorProps> = ({
  currentStep,
  totalSteps,
}) => {
  return (
    <div className="progress-dots">
      {Array.from({ length: totalSteps }, (_, index) => (
        <div
          key={index}
          className={`progress-dot ${index + 1 === currentStep ? 'active' : ''}`}
        />
      ))}
    </div>
  );
};
