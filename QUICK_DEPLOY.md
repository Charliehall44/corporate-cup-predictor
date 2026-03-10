# ⚡ Quick Deploy Reference - Corporate Cup Predictor

## 🎯 30-Minute Deployment Checklist

---

## Part 1: Backend (Railway) - 15 minutes

### 1️⃣ Create GitHub Repo
- [ ] Go to GitHub → New Repository
- [ ] Name: `corporate-cup-backend`
- [ ] Visibility: **Public**
- [ ] Don't initialize

### 2️⃣ Upload Backend Files
- [ ] Upload all files from `/backend` folder to GitHub:
  - `CorporateCupPredictor.csproj`
  - `Program.cs`
  - `Entry.cs`
  - `EntryDto.cs`
  - `AppDbContext.cs`
  - `appsettings.json`
  - `appsettings.Development.json`
  - `.gitignore`

### 3️⃣ Deploy to Railway
- [ ] Go to [railway.app](https://railway.app)
- [ ] Sign in with GitHub
- [ ] New Project → Deploy from GitHub repo
- [ ] Select `corporate-cup-backend`
- [ ] Wait for deployment (2-3 min)

### 4️⃣ Get Backend URL
- [ ] Click on deployed service
- [ ] Settings → Generate Domain
- [ ] Copy URL (e.g., `https://corporate-cup-backend-production-xxxx.up.railway.app`)

### 5️⃣ Test Backend
- [ ] Open: `https://your-railway-url.up.railway.app/swagger`
- [ ] Test: `GET /health` → Should return `{"status":"healthy"}`

✅ **Backend Live!**

---

## Part 2: Frontend (Evo Builder) - 10 minutes

### 1️⃣ Set Environment Variable
- [ ] Evo Builder → Project Settings (gear icon)
- [ ] Environment Variables → Add new
- [ ] Name: `VITE_API_URL`
- [ ] Value: Your Railway URL (from Part 1, Step 4)
- [ ] Save

### 2️⃣ Test Locally
- [ ] Open app in preview
- [ ] Open browser console (F12)
- [ ] Check: "Backend URL: https://your-railway-url..."
- [ ] Submit test entry
- [ ] Check admin panel (⚽ button)

### 3️⃣ Publish
- [ ] Click "Publish" button in Evo Builder
- [ ] Wait for deployment
- [ ] Copy public URL

✅ **Frontend Live!**

---

## Part 3: Share - 5 minutes

### 1️⃣ Create QR Code
- [ ] Go to [qr-code-generator.com](https://www.qr-code-generator.com/)
- [ ] Enter your Evo Builder URL
- [ ] Download high-res PNG

### 2️⃣ Send Email
```
Subject: 🏆 Corporate Cup 2026 - Make Your Predictions!

Click here to enter: [YOUR URL]

- Predict total goals
- Pick top scorers
- Donate $10+ to Heartbeat of Football
- Win a Premier League shirt!

Deadline: March 19, 2026
```

### 3️⃣ Print Posters
- [ ] Add QR code
- [ ] Add URL
- [ ] Display in common areas

✅ **Ready to Share!**

---

## 🔑 Important Info

**Admin Access:**
- Click soccer ball ⚽ (bottom-right)
- Password: `Fryingpan.420!`

**Backend URL Format:**
- ✅ `https://your-app.up.railway.app`
- ❌ `https://your-app.up.railway.app/` (no trailing slash)

**Testing Endpoints:**
- Health: `/health`
- Swagger: `/swagger`
- Entries: `/api/entries`
- Stats: `/api/entries/statistics`

**Tournament Details:**
- Date: March 20, 2026
- Location: Sydney
- Prize: Premier League Shirt
- Donation: $10 minimum

---

## 🆘 Quick Fixes

**"Backend not responding"**
→ Check Railway deployment status
→ Verify VITE_API_URL is correct
→ Check Railway logs

**"CORS errors"**
→ Verify Program.cs has CORS configured
→ Redeploy backend

**"Admin won't open"**
→ Click soccer ball ⚽
→ Password: `Fryingpan.420!` (case-sensitive)

**"Mobile not working"**
→ Test in incognito mode
→ Hard refresh (Ctrl+Shift+R)

---

## 📊 Daily Monitoring

- [ ] Check Railway logs for errors
- [ ] Open admin panel
- [ ] Export CSV backup
- [ ] Monitor entry count

---

## 🎉 Success Criteria

- ✅ Backend health check returns `{"status":"healthy"}`
- ✅ Swagger documentation loads
- ✅ Frontend shows correct backend URL in console
- ✅ Can submit entry without errors
- ✅ Success screen appears
- ✅ Admin panel accessible
- ✅ CSV export works
- ✅ Works on mobile

---

**For detailed instructions, see: DEPLOYMENT_INSTRUCTIONS.md**

**Good luck! 🏆⚽❤️**
