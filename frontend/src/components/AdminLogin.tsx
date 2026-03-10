// Admin login component

import React, { useState } from 'react';
import { ADMIN_PASSWORD } from '../data';

interface AdminLoginProps {
  onLogin: () => void;
  onClose: () => void;
}

export const AdminLogin: React.FC<AdminLoginProps> = ({ onLogin, onClose }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (password === ADMIN_PASSWORD) {
      setError('');
      onLogin();
    } else {
      setError('Incorrect password. Please try again.');
      setPassword('');
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content slide-up" onClick={(e) => e.stopPropagation()}>
        <h2 className="modal-title">🔐 ADMIN ACCESS</h2>
        
        <p className="card-description" style={{ marginBottom: '1.5rem' }}>
          Enter the admin password to view entries and statistics
        </p>

        {error && (
          <div className="error-message">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label className="input-label">Password</label>
            <input
              type="password"
              className="input-field"
              placeholder="Enter admin password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoFocus
            />
          </div>

          <div className="btn-group">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={onClose}
            >
              CANCEL
            </button>
            <button
              type="submit"
              className="btn btn-primary"
              disabled={!password}
            >
              LOGIN →
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
