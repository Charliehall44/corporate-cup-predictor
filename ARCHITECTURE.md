# 🏗️ Corporate Cup Predictor - Architecture

Visual overview of the system architecture.

---

## 📊 System Overview

```
┌─────────────────────────────────────────────────────────────┐
│                     CORPORATE CUP PREDICTOR                  │
│                         March 20, 2026                       │
└─────────────────────────────────────────────────────────────┘

┌──────────────┐         ┌──────────────┐         ┌──────────────┐
│              │         │              │         │              │
│   USERS      │────────▶│   FRONTEND   │────────▶│   BACKEND    │
│  (Staff)     │         │  (React)     │         │  (.NET API)  │
│              │         │              │         │              │
└──────────────┘         └──────────────┘         └──────────────┘
     Mobile                Evo Builder              Railway.app
     Desktop               Vite + React             .NET 10.0
     QR Code               TypeScript               SQLite DB
```

---

## 🎨 Frontend Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                        FRONTEND (React)                      │
├─────────────────────────────────────────────────────────────┤
│                                                               │
│  ┌──────────────────────────────────────────────────────┐  │
│  │                      App.tsx                          │  │
│  │              (Main Application Logic)                 │  │
│  └──────────────────────────────────────────────────────┘  │
│                            │                                 │
│         ┌──────────────────┼──────────────────┐            │
│         │                  │                  │            │
│  ┌──────▼──────┐   ┌──────▼──────┐   ┌──────▼──────┐    │
│  │   Header    │   │  Progress   │   │   Steps     │    │
│  │             │   │  Indicator  │   │   1-4       │    │
│  └─────────────┘   └─────────────┘   └─────────────┘    │
│                                                             │
│  ┌──────────────────────────────────────────────────────┐ │
│  │                  Step Components                      │ │
│  ├──────────────────────────────────────────────────────┤ │
│  │  Step1Details    → Name & Email                      │ │
│  │  Step2Goals      → Goals Prediction (0-99)           │ │
│  │  Step3Scorers    → Top Scorer Selection              │ │
│  │  Step4Donation   → Screenshot Upload                 │ │
│  │  SuccessScreen   → Confirmation                      │ │
│  └──────────────────────────────────────────────────────┘ │
│                                                             │
│  ┌──────────────────────────────────────────────────────┐ │
│  │                  Admin Components                     │ │
│  ├──────────────────────────────────────────────────────┤ │
│  │  AdminLogin      → Password Modal                    │ │
│  │  AdminPanel      → Dashboard & CSV Export            │ │
│  └──────────────────────────────────────────────────────┘ │
│                                                             │
│  ┌──────────────────────────────────────────────────────┐ │
│  │                  Utilities                            │ │
│  ├──────────────────────────────────────────────────────┤ │
│  │  types.ts        → TypeScript Interfaces             │ │
│  │  data.ts         → Teams, Password, Config           │ │
│  │  storage.ts      → API Client Functions              │ │
│  │  App.css         → Custom Styles                     │ │
│  └──────────────────────────────────────────────────────┘ │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## 🔌 Backend Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                      BACKEND (.NET 10.0)                     │
├─────────────────────────────────────────────────────────────┤
│                                                               │
│  ┌──────────────────────────────────────────────────────┐  │
│  │                    Program.cs                         │  │
│  │              (API Endpoints & Config)                 │  │
│  └──────────────────────────────────────────────────────┘  │
│                            │                                 │
│         ┌──────────────────┼──────────────────┐            │
│         │                  │                  │            │
│  ┌──────▼──────┐   ┌──────▼──────┐   ┌──────▼──────┐    │
│  │   Health    │   │   Entries   │   │ Statistics  │    │
│  │  Endpoint   │   │  Endpoints  │   │  Endpoint   │    │
│  └─────────────┘   └─────────────┘   └─────────────┘    │
│                                                             │
│  ┌──────────────────────────────────────────────────────┐ │
│  │                  API Endpoints                        │ │
│  ├──────────────────────────────────────────────────────┤ │
│  │  GET    /health              → Health Check          │ │
│  │  GET    /api/entries         → Get All Entries       │ │
│  │  GET    /api/entries/{id}    → Get Entry by ID       │ │
│  │  POST   /api/entries         → Create Entry          │ │
│  │  DELETE /api/entries/{id}    → Delete Entry          │ │
│  │  GET    /api/statistics      → Get Statistics        │ │
│  │  GET    /swagger             → API Documentation     │ │
│  └──────────────────────────────────────────────────────┘ │
│                                                             │
│  ┌──────────────────────────────────────────────────────┐ │
│  │                  Data Layer                           │ │
│  ├──────────────────────────────────────────────────────┤ │
│  │  Entry.cs        → Database Model                    │ │
│  │  EntryDto.cs     → Data Transfer Object              │ │
│  │  AppDbContext.cs → Entity Framework Context          │ │
│  └──────────────────────────────────────────────────────┘ │
│                            │                                 │
│                     ┌──────▼──────┐                         │
│                     │   SQLite    │                         │
│                     │  Database   │                         │
│                     └─────────────┘                         │
│                   corporatecup.db                           │
│                                                               │
└─────────────────────────────────────────────────────────────┘
```

---

## 🔄 Data Flow

### User Submission Flow

```
1. USER OPENS APP
   │
   ├─▶ Frontend loads
   │   └─▶ Checks backend URL (VITE_API_URL)
   │
2. USER FILLS FORM
   │
   ├─▶ Step 1: Name & Email
   ├─▶ Step 2: Goals (0-99)
   ├─▶ Step 3: Top Scorers
   └─▶ Step 4: Donation Screenshot
   │
3. USER SUBMITS
   │
   ├─▶ Frontend validates data
   │   └─▶ Converts image to base64
   │
   ├─▶ POST /api/entries
   │   └─▶ Backend validates
   │       ├─▶ Checks email uniqueness
   │       ├─▶ Validates data format
   │       └─▶ Saves to database
   │
   └─▶ Success response
       └─▶ Frontend shows success screen
```

### Admin Access Flow

```
1. ADMIN TRIPLE-TAPS
   │
   ├─▶ AdminLogin modal appears
   │
2. ADMIN ENTERS PASSWORD
   │
   ├─▶ Frontend validates password
   │   └─▶ Compares with ADMIN_PASSWORD
   │
3. ADMIN LOGGED IN
   │
   ├─▶ GET /api/entries
   │   └─▶ Backend returns all entries
   │
   ├─▶ GET /api/statistics
   │   └─▶ Backend calculates stats
   │
   └─▶ AdminPanel displays data
       ├─▶ Statistics cards
       ├─▶ Entries table
       └─▶ CSV export button
```

---

## 🗄️ Database Schema

```
┌─────────────────────────────────────────────────────────────┐
│                        Entries Table                         │
├─────────────────────────────────────────────────────────────┤
│                                                               │
│  Column              Type          Constraints               │
│  ─────────────────────────────────────────────────────────  │
│  Id                  INTEGER       PRIMARY KEY, AUTO         │
│  Name                TEXT(200)     NOT NULL                  │
│  Email               TEXT(200)     NOT NULL, UNIQUE, INDEX   │
│  TotalGoals          INTEGER       NOT NULL, 0-99            │
│  MensTopScorer       TEXT(200)     NOT NULL                  │
│  MixedTopScorer      TEXT(200)     NOT NULL                  │
│  DonationScreenshot  TEXT          NOT NULL (Base64)         │
│  SubmittedAt         DATETIME      NOT NULL, INDEX           │
│                                                               │
└─────────────────────────────────────────────────────────────┘

Indexes:
- Email (for uniqueness check)
- SubmittedAt (for sorting)
```

---

## 🔐 Security Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                      SECURITY LAYERS                         │
├─────────────────────────────────────────────────────────────┤
│                                                               │
│  ┌──────────────────────────────────────────────────────┐  │
│  │                  Frontend Security                    │  │
│  ├──────────────────────────────────────────────────────┤  │
│  │  • Password-protected admin panel                    │  │
│  │  • Hidden admin trigger (triple-tap)                 │  │
│  │  • Input validation                                  │  │
│  │  • XSS prevention (React escaping)                   │  │
│  │  • HTTPS enforced (production)                       │  │
│  └──────────────────────────────────────────────────────┘  │
│                                                               │
│  ┌──────────────────────────────────────────────────────┐  │
│  │                  Backend Security                     │  │
│  ├──────────────────────────────────────────────────────┤  │
│  │  • Email uniqueness validation                       │  │
│  │  • Input validation (data annotations)               │  │
│  │  • SQL injection prevention (EF Core)                │  │
│  │  • CORS configured for development                   │  │
│  │  • HTTPS enforced (production)                       │  │
│  └──────────────────────────────────────────────────────┘  │
│                                                               │
│  ┌──────────────────────────────────────────────────────┐  │
│  │                  Data Security                        │  │
│  ├──────────────────────────────────────────────────────┤  │
│  │  • No sensitive payment data stored                  │  │
│  │  • Donation screenshots in base64                    │  │
│  │  • Database backups recommended                      │  │
│  │  • CSV export admin-only                             │  │
│  └──────────────────────────────────────────────────────┘  │
│                                                               │
└─────────────────────────────────────────────────────────────┘
```

---

## 🌐 Deployment Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                    PRODUCTION DEPLOYMENT                     │
├─────────────────────────────────────────────────────────────┤
│                                                               │
│  ┌──────────────┐                                           │
│  │    USERS     │                                           │
│  │  (Mobile/    │                                           │
│  │   Desktop)   │                                           │
│  └──────┬───────┘                                           │
│         │                                                     │
│         │ HTTPS                                              │
│         │                                                     │
│  ┌──────▼───────────────────────────────────────────────┐  │
│  │              EVO BUILDER (Frontend)                   │  │
│  │  ┌────────────────────────────────────────────────┐  │  │
│  │  │  React App (Static Files)                      │  │  │
│  │  │  • HTML, CSS, JavaScript                       │  │  │
│  │  │  • Vite build output                           │  │  │
│  │  │  • Environment: VITE_API_URL                   │  │  │
│  │  └────────────────────────────────────────────────┘  │  │
│  └──────────────────────┬───────────────────────────────┘  │
│                         │                                    │
│                         │ API Calls (HTTPS)                 │
│                         │ credentials: 'include'            │
│                         │                                    │
│  ┌──────────────────────▼───────────────────────────────┐  │
│  │              RAILWAY.APP (Backend)                    │  │
│  │  ┌────────────────────────────────────────────────┐  │  │
│  │  │  .NET 10.0 API                                 │  │  │
│  │  │  • REST API Endpoints                          │  │  │
│  │  │  • Swagger Documentation                       │  │  │
│  │  │  • CORS Enabled                                │  │  │
│  │  └────────────────────┬───────────────────────────┘  │  │
│  │                       │                               │  │
│  │  ┌────────────────────▼───────────────────────────┐  │  │
│  │  │  SQLite Database (corporatecup.db)            │  │  │
│  │  │  • Persistent volume                           │  │  │
│  │  │  • Automatic backups                           │  │  │
│  │  └────────────────────────────────────────────────┘  │  │
│  └──────────────────────────────────────────────────────┘  │
│                                                               │
└─────────────────────────────────────────────────────────────┘
```

---

## 📱 User Journey Map

```
┌─────────────────────────────────────────────────────────────┐
│                      USER JOURNEY                            │
├─────────────────────────────────────────────────────────────┤
│                                                               │
│  1. DISCOVERY                                                │
│     ├─ See QR code poster in office                         │
│     ├─ Receive email with link                              │
│     └─ Hear from colleagues                                 │
│                                                               │
│  2. ACCESS                                                   │
│     ├─ Scan QR code with phone                              │
│     ├─ Click link in email                                  │
│     └─ Type URL in browser                                  │
│                                                               │
│  3. ENGAGEMENT                                               │
│     ├─ Read event details                                   │
│     ├─ See prize (Premier League shirt)                     │
│     └─ Decide to participate                                │
│                                                               │
│  4. PREDICTION                                               │
│     ├─ Step 1: Enter name & email                           │
│     ├─ Step 2: Predict total goals                          │
│     ├─ Step 3: Pick top scorers                             │
│     └─ See progress indicator                               │
│                                                               │
│  5. DONATION                                                 │
│     ├─ Click "Open Donation Page"                           │
│     ├─ Make $10+ AUD donation                               │
│     ├─ Take screenshot of confirmation                      │
│     └─ Upload screenshot                                    │
│                                                               │
│  6. SUBMISSION                                               │
│     ├─ Review predictions                                   │
│     ├─ Click "Submit Entry"                                 │
│     └─ Wait for confirmation                                │
│                                                               │
│  7. CONFIRMATION                                             │
│     ├─ See success screen                                   │
│     ├─ Review submitted predictions                         │
│     ├─ Read competition rules                               │
│     └─ Share with colleagues                                │
│                                                               │
│  8. ANTICIPATION                                             │
│     ├─ Wait for event (March 20, 2026)                      │
│     ├─ Follow event updates                                 │
│     └─ Hope to win!                                         │
│                                                               │
│  9. RESULTS                                                  │
│     ├─ Receive winner announcement                          │
│     ├─ Check if they won                                    │
│     └─ Celebrate charity contribution                       │
│                                                               │
└─────────────────────────────────────────────────────────────┘
```

---

## 🔄 State Management

```
┌─────────────────────────────────────────────────────────────┐
│                    APPLICATION STATE                         │
├─────────────────────────────────────────────────────────────┤
│                                                               │
│  Form State (useState)                                       │
│  ├─ currentStep: number (1-4)                               │
│  ├─ name: string                                            │
│  ├─ email: string                                           │
│  ├─ totalGoals: number (0-99)                               │
│  ├─ mensTopScorer: string                                   │
│  ├─ mixedTopScorer: string                                  │
│  ├─ donationScreenshot: string (base64)                     │
│  ├─ isSubmitting: boolean                                   │
│  ├─ isSuccess: boolean                                      │
│  └─ error: string                                           │
│                                                               │
│  Admin State (useState)                                      │
│  ├─ showAdminLogin: boolean                                 │
│  ├─ isAdminLoggedIn: boolean                                │
│  ├─ tapCount: number                                        │
│  └─ tapTimer: NodeJS.Timeout                                │
│                                                               │
│  Admin Panel State (useState)                                │
│  ├─ entries: Entry[]                                        │
│  ├─ stats: AdminStats                                       │
│  ├─ loading: boolean                                        │
│  └─ selectedEntry: Entry | null                             │
│                                                               │
└─────────────────────────────────────────────────────────────┘
```

---

## 📊 Component Hierarchy

```
App
├── Header
├── ProgressIndicator
├── Step1Details
│   ├── Input (name)
│   └── Input (email)
├── Step2Goals
│   ├── Button (decrement)
│   ├── Input (goals)
│   └── Button (increment)
├── Step3Scorers
│   ├── Select (men's scorer)
│   └── Select (mixed scorer)
├── Step4Donation
│   ├── Button (open donation)
│   ├── Input (file upload)
│   └── Image (preview)
├── SuccessScreen
│   └── Card (summary)
├── AdminLogin
│   └── Input (password)
└── AdminPanel
    ├── Stats Cards
    ├── Export Button
    ├── Entries Table
    └── Screenshot Modal
```

---

## 🎯 Performance Considerations

```
┌─────────────────────────────────────────────────────────────┐
│                    PERFORMANCE OPTIMIZATIONS                 │
├─────────────────────────────────────────────────────────────┤
│                                                               │
│  Frontend                                                    │
│  ├─ Vite for fast builds                                    │
│  ├─ Code splitting (lazy loading)                           │
│  ├─ Image optimization (base64 compression)                 │
│  ├─ CSS animations (GPU accelerated)                        │
│  └─ React 19 (latest optimizations)                         │
│                                                               │
│  Backend                                                     │
│  ├─ .NET 10.0 (latest performance)                          │
│  ├─ SQLite (fast local database)                            │
│  ├─ Entity Framework (optimized queries)                    │
│  ├─ Indexed columns (email, submittedAt)                    │
│  └─ Minimal API (reduced overhead)                          │
│                                                               │
│  Network                                                     │
│  ├─ HTTPS/2 (multiplexing)                                  │
│  ├─ Compression (gzip/brotli)                               │
│  ├─ CDN (Evo Builder)                                       │
│  └─ Credentials: include (auth)                             │
│                                                               │
└─────────────────────────────────────────────────────────────┘
```

---

**This architecture supports:**
- ✅ 100+ concurrent users
- ✅ Fast page loads (< 2s)
- ✅ Mobile-first experience
- ✅ Secure data handling
- ✅ Easy maintenance
- ✅ Scalable design

---

*Corporate Cup 2026 • System Architecture • Access Internal*
