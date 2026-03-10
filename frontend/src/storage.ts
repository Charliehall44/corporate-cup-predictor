// API utility functions for Corporate Cup Predictor

import { Entry, EntryDto, ApiResponse } from './types';

// Get backend URL from environment or use default
const getBackendUrl = (): string => {
  // Check if we're in development or production
  const apiUrl = import.meta.env.VITE_API_URL;
  
  if (apiUrl) {
    return apiUrl;
  }
  
  // Default to localhost for development
  return 'http://localhost:5000';
};

const API_BASE_URL = getBackendUrl();

console.log('🔗 Backend URL:', API_BASE_URL);

// Submit a new entry
export const submitEntry = async (entry: EntryDto): Promise<ApiResponse> => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/entries`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include', // Required for proxy authentication
      body: JSON.stringify(entry),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({ message: 'Failed to submit entry' }));
      throw new Error(errorData.message || 'Failed to submit entry');
    }

    const data = await response.json();
    return {
      success: true,
      message: 'Entry submitted successfully!',
      data,
    };
  } catch (error) {
    console.error('Error submitting entry:', error);
    return {
      success: false,
      message: error instanceof Error ? error.message : 'Failed to submit entry',
    };
  }
};

// Get all entries (admin only)
export const getAllEntries = async (): Promise<Entry[]> => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/entries`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include', // Required for proxy authentication
    });

    if (!response.ok) {
      throw new Error('Failed to fetch entries');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching entries:', error);
    return [];
  }
};

// Get statistics (admin only)
export const getStatistics = async () => {
  try {
    const entries = await getAllEntries();
    
    if (entries.length === 0) {
      return {
        totalEntries: 0,
        averageGoals: 0,
        mostPopularMensScorer: 'N/A',
        mostPopularMixedScorer: 'N/A',
      };
    }

    // Calculate average goals
    const totalGoals = entries.reduce((sum, entry) => sum + entry.totalGoals, 0);
    const averageGoals = Math.round(totalGoals / entries.length);

    // Find most popular scorers
    const mensScorers: { [key: string]: number } = {};
    const mixedScorers: { [key: string]: number } = {};

    entries.forEach((entry) => {
      mensScorers[entry.mensTopScorer] = (mensScorers[entry.mensTopScorer] || 0) + 1;
      mixedScorers[entry.mixedTopScorer] = (mixedScorers[entry.mixedTopScorer] || 0) + 1;
    });

    const mostPopularMensScorer = Object.keys(mensScorers).reduce((a, b) =>
      mensScorers[a] > mensScorers[b] ? a : b
    );
    const mostPopularMixedScorer = Object.keys(mixedScorers).reduce((a, b) =>
      mixedScorers[a] > mixedScorers[b] ? a : b
    );

    return {
      totalEntries: entries.length,
      averageGoals,
      mostPopularMensScorer,
      mostPopularMixedScorer,
    };
  } catch (error) {
    console.error('Error calculating statistics:', error);
    return {
      totalEntries: 0,
      averageGoals: 0,
      mostPopularMensScorer: 'N/A',
      mostPopularMixedScorer: 'N/A',
    };
  }
};

// Export entries as CSV (admin only)
export const exportToCSV = (entries: Entry[]): string => {
  const headers = [
    'ID',
    'Name',
    'Email',
    'Total Goals',
    "Men's Top Scorer",
    'Mixed Top Scorer',
    'Submitted At',
  ];

  const rows = entries.map((entry) => [
    entry.id || '',
    entry.name,
    entry.email,
    entry.totalGoals,
    entry.mensTopScorer,
    entry.mixedTopScorer,
    entry.submittedAt || '',
  ]);

  const csvContent = [
    headers.join(','),
    ...rows.map((row) => row.map((cell) => `"${cell}"`).join(',')),
  ].join('\n');

  return csvContent;
};

// Download CSV file
export const downloadCSV = (entries: Entry[]) => {
  const csv = exportToCSV(entries);
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  const url = URL.createObjectURL(blob);
  
  link.setAttribute('href', url);
  link.setAttribute('download', `corporate-cup-entries-${new Date().toISOString().split('T')[0]}.csv`);
  link.style.visibility = 'hidden';
  
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

// Health check
export const checkBackendHealth = async (): Promise<boolean> => {
  try {
    const response = await fetch(`${API_BASE_URL}/health`, {
      credentials: 'include', // Required for proxy authentication
    });
    return response.ok;
  } catch (error) {
    console.error('Backend health check failed:', error);
    return false;
  }
};
