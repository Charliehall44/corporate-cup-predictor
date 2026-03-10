// Admin panel for viewing entries and statistics

import React, { useEffect, useState } from 'react';
import { Entry } from '../types';
import { getAllEntries, getStatistics, downloadCSV } from '../storage';
import { MENS_TEAM, MIXED_TEAM } from '../data';

interface AdminPanelProps {
  onLogout: () => void;
}

export const AdminPanel: React.FC<AdminPanelProps> = ({ onLogout }) => {
  const [entries, setEntries] = useState<Entry[]>([]);
  const [stats, setStats] = useState({
    totalEntries: 0,
    averageGoals: 0,
    mostPopularMensScorer: 'N/A',
    mostPopularMixedScorer: 'N/A',
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    setLoading(true);
    const entriesData = await getAllEntries();
    const statsData = await getStatistics();
    setEntries(entriesData);
    setStats(statsData);
    setLoading(false);
  };

  const handleExportCSV = () => {
    downloadCSV(entries);
  };

  const getPlayerName = (playerId: string, team: 'mens' | 'mixed') => {
    const teamData = team === 'mens' ? MENS_TEAM : MIXED_TEAM;
    return teamData.players.find((p) => p.id === playerId)?.name || playerId;
  };

  if (loading) {
    return (
      <div className="app-container">
        <div className="admin-panel fade-in">
          <div className="spinner"></div>
          <p className="text-center" style={{ color: 'var(--text-secondary)', marginTop: '1rem' }}>
            Loading admin data...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="app-container">
      <div className="admin-panel fade-in">
        <div className="admin-header">
          <h2 className="admin-title">ADMIN PANEL</h2>
          <button className="btn btn-secondary" onClick={onLogout}>
            LOGOUT
          </button>
        </div>

        {/* Statistics */}
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-value">{stats.totalEntries}</div>
            <div className="stat-label">Total Entries</div>
          </div>
          <div className="stat-card">
            <div className="stat-value">{stats.averageGoals.toFixed(1)}</div>
            <div className="stat-label">Average Goals</div>
          </div>
          <div className="stat-card">
            <div className="stat-value" style={{ fontSize: '1.25rem' }}>
              {stats.mostPopularMensScorer}
            </div>
            <div className="stat-label">Top Men's Pick</div>
          </div>
          <div className="stat-card">
            <div className="stat-value" style={{ fontSize: '1.25rem' }}>
              {stats.mostPopularMixedScorer}
            </div>
            <div className="stat-label">Top Mixed Pick</div>
          </div>
        </div>

        {/* Export Button */}
        <button
          className="btn btn-primary"
          onClick={handleExportCSV}
          disabled={entries.length === 0}
          style={{ marginBottom: '2rem', maxWidth: '300px' }}
        >
          📥 EXPORT TO CSV
        </button>

        {/* Entries Table */}
        {entries.length === 0 ? (
          <div className="card">
            <p className="text-center" style={{ color: 'var(--text-secondary)' }}>
              No entries yet. Waiting for the first submission!
            </p>
          </div>
        ) : (
          <div className="table-container">
            <table className="entries-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Goals</th>
                  <th>Men's Scorer</th>
                  <th>Mixed Scorer</th>
                  <th>Submitted</th>
                </tr>
              </thead>
              <tbody>
                {entries.map((entry) => (
                  <tr key={entry.id}>
                    <td>#{entry.id}</td>
                    <td>{entry.name}</td>
                    <td>{entry.email}</td>
                    <td style={{ fontWeight: 700, color: 'var(--access-red)' }}>
                      {entry.totalGoals}
                    </td>
                    <td>{getPlayerName(entry.mensTopScorer, 'mens')}</td>
                    <td>{getPlayerName(entry.mixedTopScorer, 'mixed')}</td>
                    <td>
                      {entry.submittedAt
                        ? new Date(entry.submittedAt).toLocaleString('en-AU', {
                            dateStyle: 'short',
                            timeStyle: 'short',
                          })
                        : 'N/A'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};
