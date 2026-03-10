# ⚽ Corporate Cup Predictor 2026

A mobile-first web application for staff to predict Corporate Cup 2026 results, pick top scorers, and donate to Heartbeat of Football. Winner gets a Premier League shirt! 🏆

## 🎯 Features

### User Features
- **4-Step Prediction Flow**
  1. Enter personal details (name & email)
  2. Predict total goals (0-99)
  3. Pick top scorers from Men's and Mixed teams
  4. Upload donation screenshot ($10 AUD minimum)

- **Mobile-First Design**
  - Responsive layout optimized for phones
  - Dark theme with Access red accents
  - Smooth animations and transitions
  - Progress indicator

- **Form Validation**
  - Real-time validation
  - Clear error messages
  - Duplicate email prevention

### Admin Features
- **Secure Access**: Triple-tap bottom-right corner, password protected
- **Dashboard**: View all entries with statistics
- **CSV Export**: Download all entries for analysis
- **Screenshot Viewer**: View donation proofs

## 🏗️ Tech Stack

### Frontend
- **React 19** with TypeScript
- **Vite** build tool
- **Tailwind CSS** for styling
- **Custom CSS** with Google Fonts (Inter)
- Hosted on **Evo Builder**

### Backend
- **.NET 10.0** Web API
- **SQLite** database
- **Entity Framework Core**
- **Swagger** documentation
- Hosted on **Railway.app** (or any .NET host)

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ (for frontend)
- .NET 10.0 SDK (for backend)

### Frontend Setup

1. Navigate to frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create `.env` file:
   ```env
   VITE_API_URL=http://localhost:5000
   ```

4. Start development server:
   ```bash
   npm run dev
   ```

5. Open http://localhost:5173

### Backend Setup

1. Navigate to backend directory:
   ```bash
   cd backend
   ```

2. Restore packages:
   ```bash
   dotnet restore
   ```

3. Run the API:
   ```bash
   dotnet run
   ```

4. Open Swagger: http://localhost:5000/swagger

## 📋 API Endpoints

### Health
- `GET /health` - Health check

### Entries
- `GET /api/entries` - Get all entries
- `GET /api/entries/{id}` - Get entry by ID
- `POST /api/entries` - Create new entry
- `DELETE /api/entries/{id}` - Delete entry (admin)

### Statistics
- `GET /api/statistics` - Get statistics (total entries, average goals, popular scorers)

## 🔐 Admin Access

1. **Triple-tap** the bottom-right corner of the screen
2. Enter password: `Fryingpan.420!`
3. View dashboard with all entries and statistics
4. Export CSV for analysis

## 🎨 Design System

### Colors
- **Access Red**: `#e11d48` (primary brand color)
- **Background**: `#0a0a0a` (dark)
- **Surface**: `#1a1a1a` (cards)
- **Text Primary**: `#ffffff`
- **Text Secondary**: `#a3a3a3`
- **Success**: `#22c55e`
- **Error**: `#ef4444`

### Typography
- **Font Family**: Inter (Google Fonts)
- **Weights**: 400, 500, 600, 700

## 🏆 Competition Rules

### How to Win
1. **Closest total goals prediction** wins
2. **Tie-breaker #1**: Combined goals by predicted top scorers (highest wins)
3. **Tie-breaker #2**: Earliest submission time

### Requirements
- Minimum $10 AUD donation to Heartbeat of Football
- One entry per email address
- Must upload donation screenshot

### Prize
Winner receives a **Premier League shirt** of their choice! 🎽

## 📊 Event Details

- **Date**: March 20, 2026
- **Location**: Sydney
- **Teams**: Men's Team (10 players) + Mixed Team (10 players)
- **Games**: 3-6 per team (6-12 total)
- **Charity**: Heartbeat of Football

## 🛠️ Development

### Project Structure

```
corporate-cup-predictor/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Header.tsx
│   │   │   ├── ProgressIndicator.tsx
│   │   │   ├── Step1Details.tsx
│   │   │   ├── Step2Goals.tsx
│   │   │   ├── Step3Scorers.tsx
│   │   │   ├── Step4Donation.tsx
│   │   │   ├── SuccessScreen.tsx
│   │   │   ├── AdminLogin.tsx
│   │   │   └── AdminPanel.tsx
│   │   ├── App.tsx
│   │   ├── App.css
│   │   ├── types.ts
│   │   ├── data.ts
│   │   └── storage.ts
│   └── package.json
├── backend/
│   ├── Program.cs
│   ├── Entry.cs
│   ├── EntryDto.cs
│   ├── AppDbContext.cs
│   ├── CorporateCupPredictor.csproj
│   └── appsettings.json
└── README.md
```

### Key Files

#### Frontend
- **App.tsx**: Main application logic and state management
- **types.ts**: TypeScript interfaces
- **data.ts**: Teams, password, donation URL
- **storage.ts**: API utility functions
- **App.css**: Custom styles and animations

#### Backend
- **Program.cs**: API endpoints and configuration
- **Entry.cs**: Database model
- **EntryDto.cs**: Data transfer object with validation
- **AppDbContext.cs**: Entity Framework context

## 🧪 Testing

### Frontend Testing
1. Submit test entry with all steps
2. Verify success screen appears
3. Test admin access (triple-tap + password)
4. Check CSV export
5. Test on mobile device

### Backend Testing
1. Open Swagger: http://localhost:5000/swagger
2. Test POST /api/entries
3. Test GET /api/entries
4. Test GET /api/statistics
5. Verify database created (corporatecup.db)

## 🚢 Deployment

### Frontend (Evo Builder)
1. Push code to repository
2. Evo Builder auto-deploys
3. Set environment variable: `VITE_API_URL=<backend-url>`

### Backend (Railway.app)
1. Create new project on Railway
2. Connect GitHub repository
3. Railway auto-detects .NET project
4. Deploy and get public URL
5. Update frontend `VITE_API_URL`

## 📱 QR Code Generation

After deployment, create a QR code for easy mobile access:

1. Visit https://www.qr-code-generator.com/
2. Enter your Evo Builder URL
3. Download high-resolution PNG
4. Print and display in office

## 🐛 Troubleshooting

### CORS Errors
- Verify backend has CORS configured in Program.cs
- Check `SetIsOriginAllowed(_ => true)` is set
- Ensure `app.UseCors()` comes before `app.UseAuthorization()`

### Database Issues
- Delete `corporatecup.db` and restart backend
- Check SQLite package is installed
- Verify connection string in appsettings.json

### Frontend Not Connecting
- Check `VITE_API_URL` environment variable
- Verify backend is running
- Test backend health endpoint: `<backend-url>/health`
- Check browser console for errors

## 📞 Support

For issues or questions:
1. Check browser console for errors
2. Verify backend health endpoint
3. Test API endpoints in Swagger
4. Clear browser cache and try incognito mode

## 📄 License

This project is created for Access internal use for the Corporate Cup 2026 fundraiser.

---

**Good luck with your predictions! May the best predictor win! 🏆⚽❤️**

*Event Date: March 20, 2026*  
*Fundraiser: Heartbeat of Football*  
*Prize: Premier League Shirt*
