// Data configuration for Corporate Cup Predictor
// Updated: 2025-03-10

import { Team } from './types';

// Configuration
export const ADMIN_PASSWORD = 'Fryingpan.420!';
export const DONATION_URL = 'https://heartbeatoffootball.com.au/en/t/theaccessgroupcorporatecup';

// Event details
export const EVENT_DATE = 'March 20, 2025';
export const EVENT_LOCATION = 'Sydney';
export const MIN_DONATION = 10; // AUD
export const PRIZE = 'Premier League Shirt';

// Men's Team Players
export const MENS_TEAM: Team = {
  name: "Men's Team",
  players: [
    { id: 'mens-1', name: 'Tom Mallaby' },
    { id: 'mens-2', name: 'Conor Moloney' },
    { id: 'mens-3', name: 'Jack Brady' },
    { id: 'mens-4', name: 'Stephen Mulryan' },
    { id: 'mens-5', name: 'Charlie Hall' },
    { id: 'mens-6', name: 'Max Small' },
    { id: 'mens-7', name: 'Rob Baxter' },
    { id: 'mens-8', name: 'Kerry Agiasotis' },
    { id: 'mens-9', name: 'Ryan Forde' },
    { id: 'mens-10', name: 'Brian Keegan' },
  ],
};

// Mixed Team Players
export const MIXED_TEAM: Team = {
  name: 'Mixed Team',
  players: [
    { id: 'mixed-1', name: 'Riain OKeeffe' },
    { id: 'mixed-2', name: 'Elliot Moule' },
    { id: 'mixed-3', name: 'Sean OConnor' },
    { id: 'mixed-4', name: 'Jonny Palmer' },
    { id: 'mixed-5', name: 'Matthew Kent' },
    { id: 'mixed-6', name: 'Brittany Leonard' },
    { id: 'mixed-7', name: 'Tom Bilton' },
    { id: 'mixed-8', name: 'Viktor Coates' },
    { id: 'mixed-9', name: 'Niranjan Acharya' },
    { id: 'mixed-10', name: 'Bob Bosnar' },
  ],
};

// Tie-breaker rules
export const TIE_BREAKER_RULES = [
  'Closest total goals prediction',
  'If tied: Combined goals by predicted top scorers (highest wins)',
  'If still tied: Earliest submission time',
];
