// TypeScript interfaces for Corporate Cup Predictor

export interface Player {
  id: string;
  name: string;
}

export interface Team {
  name: string;
  players: Player[];
}

export interface Entry {
  id?: number;
  name: string;
  email: string;
  totalGoals: number;
  mensTopScorer: string;
  mixedTopScorer: string;
  donationScreenshot: string; // Base64 encoded image
  submittedAt?: string;
}

export interface EntryDto {
  name: string;
  email: string;
  totalGoals: number;
  mensTopScorer: string;
  mixedTopScorer: string;
  donationScreenshot: string;
}

export interface ApiResponse {
  success: boolean;
  message?: string;
  data?: any;
}

export interface AdminStats {
  totalEntries: number;
  averageGoals: number;
  mostPopularMensScorer: string;
  mostPopularMixedScorer: string;
}
