# 🚀 Corporate Cup Predictor - Deployment Guide

Complete step-by-step guide to deploy the Corporate Cup Predictor app.

---

## 📋 Prerequisites

Before you begin, ensure you have:

- ✅ GitHub account
- ✅ Railway.app account (free tier works)
- ✅ Evo Builder project (this one!)
- ✅ 30-45 minutes

---

## Part 1: Backend Deployment (Railway.app)

### Step 1: Prepare Backend for Deployment

The backend is already configured in the `/backend` folder with:
- ✅ .NET 10.0 project
- ✅ SQLite database
- ✅ CORS configured
- ✅ Swagger documentation
- ✅ All API endpoints

### Step 2: Create GitHub Repository

1. Go to https://github.com/new
2. Create a new repository (e.g., `corporate-cup-predictor`)
3. Make it **Public** or **Private** (your choice)
4. **Don't** initialize with README (we already have one)

### Step 3: Push Code to GitHub

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - Corporate Cup Predictor"

# Add remote (replace with your repo URL)
git remote add origin https://github.com/YOUR_USERNAME/corporate-cup-predictor.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 4: Deploy to Railway

1. **Go to Railway.app**: https://railway.app/
2. **Sign in** with GitHub
3. **Click "New Project"**
4. **Select "Deploy from GitHub repo"**
5. **Choose your repository**: `corporate-cup-predictor`
6. **Railway will auto-detect** the .NET project in `/backend`

### Step 5: Configure Railway

Railway should automatically:
- ✅ Detect .NET 10.0
- ✅ Build the project
- ✅ Create SQLite database
- ✅ Generate a public URL

**Wait for deployment** (usually 2-3 minutes)

### Step 6: Get Backend URL

1. In Railway dashboard, click your project
2. Go to **Settings** → **Networking**
3. Click **Generate Domain**
4. Copy the URL (e.g., `https://your-app.railway.app`)

### Step 7: Test Backend

Open in browser:
```
https://your-app.railway.app/health
```

Should return:
```json
{
  "status": "healthy",
  "timestamp": "2025-01-XX..."
}
```

Test Swagger:
```
https://your-app.railway.app/swagger
```

---

## Part 2: Frontend Configuration (Evo Builder)

### Step 8: Set Environment Variable

In Evo Builder:

1. **Click the Settings icon** (⚙️) in the top-right
2. **Go to "Environment Variables"**
3. **Add new variable**:
   - **Name**: `VITE_API_URL`
   - **Value**: `https://your-app.railway.app` (your Railway URL)
4. **Save**

### Step 9: Verify Frontend

The frontend is already built and ready! It includes:
- ✅ All 9 React components
- ✅ 4-step prediction flow
- ✅ Admin panel with password
- ✅ Mobile-responsive design
- ✅ Custom styling with Google Fonts

### Step 10: Test the App

1. **Open your Evo Builder preview**
2. **Check browser console** - should see:
   ```
   🔗 Backend URL: https://your-app.railway.app
   ```
3. **Submit a test entry**:
   - Name: Test User
   - Email: test@example.com
   - Goals: 25
   - Pick any scorers
   - Upload any image as donation proof
4. **Verify success screen appears**

### Step 11: Test Admin Panel

1. **Triple-tap** bottom-right corner
2. **Enter password**: `Fryingpan.420!`
3. **Verify** you see your test entry
4. **Click "Export to CSV"** to download
5. **Click "View"** on screenshot to see image

---

## Part 3: Final Steps

### Step 12: Publish on Evo Builder

1. **Click "Publish"** button in Evo Builder
2. **Get your public URL** (e.g., `https://your-app.evobuilder.ai`)
3. **Test on mobile device**

### Step 13: Create QR Code

1. Go to https://www.qr-code-generator.com/
2. Select **URL** type
3. Enter your Evo Builder URL
4. Customize design (optional):
   - Add logo
   - Change colors to Access red (#e11d48)
   - Add frame with text
5. **Download high-resolution PNG**
6. **Print and display** in office

### Step 14: Launch Campaign

**Email Template:**

```
Subject: 🏆 Corporate Cup 2026 - Make Your Predictions!

Hi Team,

The Corporate Cup is back on March 20, 2026! 

Make your predictions and win a Premier League shirt! 🎽

How to enter:
1. Visit: [YOUR_EVO_BUILDER_URL]
2. Predict total goals (0-99)
3. Pick top scorers from Men's & Mixed teams
4. Donate $10 AUD to Heartbeat of Football
5. Upload donation screenshot

Winner gets a Premier League shirt of their choice!

Tie-breaker rules:
- Closest total goals prediction
- If tied: Combined goals by predicted scorers
- If still tied: Earliest submission

Good luck! ⚽

[QR Code Image]
```

---

## 🔧 Troubleshooting

### Backend Issues

**"Railway deployment failed"**
- Check Railway logs for errors
- Verify .csproj is in `/backend` root (not subdirectory)
- Ensure .NET 10.0 SDK is specified

**"Database not created"**
- Railway creates SQLite automatically
- Check Railway logs: `db.Database.EnsureCreated()`
- Database persists in Railway volume

**"CORS errors"**
- Verify Program.cs has `SetIsOriginAllowed(_ => true)`
- Check `app.UseCors()` comes before `app.UseAuthorization()`
- Restart Railway service

### Frontend Issues

**"Backend URL not found"**
- Check environment variable: `VITE_API_URL`
- Verify Railway URL is correct (no trailing slash)
- Hard refresh: Ctrl+Shift+R

**"Failed to submit entry"**
- Check browser console for errors
- Test backend health endpoint
- Verify CORS is configured
- Check network tab in DevTools

**"Admin panel won't open"**
- Triple-tap quickly (within 1 second)
- Password is case-sensitive: `Fryingpan.420!`
- Try different browser

**"Images not uploading"**
- Check file size (max 5MB)
- Verify file type is image
- Try different image format

### Mobile Issues

**"Layout broken on mobile"**
- Hard refresh on mobile
- Clear browser cache
- Try incognito mode
- Check responsive design in DevTools

**"QR code not working"**
- Verify URL is correct
- Test URL in mobile browser first
- Regenerate QR code if needed

---

## 📊 Monitoring & Maintenance

### Check Entries

**Via Admin Panel:**
1. Triple-tap bottom-right corner
2. Enter password: `Fryingpan.420!`
3. View all entries and statistics
4. Export CSV for backup

**Via Railway Database:**
1. Go to Railway dashboard
2. Click your project
3. View logs to see entry submissions
4. Database is in `corporatecup.db`

### Export Data

**Before Event:**
- Export CSV regularly for backup
- Keep track of submission count
- Monitor for duplicate emails

**After Event:**
- Export final CSV
- Calculate winner based on actual results
- Announce winner
- Order Premier League shirt!

### Update Teams/Players

If you need to change teams or players:

1. **Edit** `frontend/src/data.ts`
2. **Update** `MENS_TEAM` or `MIXED_TEAM` arrays
3. **Commit and push** to GitHub
4. **Evo Builder** will auto-deploy

### Change Admin Password

1. **Edit** `frontend/src/data.ts`
2. **Update** `ADMIN_PASSWORD` constant
3. **Commit and push**

### Update Donation URL

1. **Edit** `frontend/src/data.ts`
2. **Update** `DONATION_URL` constant
3. **Commit and push**

---

## 🎯 Success Checklist

Before going live, verify:

- [ ] Backend deployed to Railway
- [ ] Backend health endpoint returns `{"status":"healthy"}`
- [ ] Swagger documentation loads
- [ ] Frontend environment variable set (`VITE_API_URL`)
- [ ] Frontend shows correct backend URL in console
- [ ] Can submit test entry successfully
- [ ] Success screen appears after submission
- [ ] Admin panel accessible with password
- [ ] Can view entries in admin panel
- [ ] CSV export downloads correctly
- [ ] Works on mobile device
- [ ] QR code generated and tested
- [ ] Email campaign ready
- [ ] Posters printed and displayed

---

## 📞 Support Contacts

**Technical Issues:**
- Check browser console for errors
- Review Railway logs
- Test API endpoints in Swagger

**Deployment Issues:**
- Verify all files are committed to GitHub
- Check Railway build logs
- Ensure environment variables are set

**User Issues:**
- Provide QR code for easy access
- Share direct URL via email
- Offer help desk during launch

---

## 🎉 Post-Event

### Calculate Winner

1. **Export final CSV** from admin panel
2. **Get actual results** from Corporate Cup
3. **Calculate** based on tie-breaker rules:
   - Closest total goals prediction
   - If tied: Combined goals by predicted scorers
   - If still tied: Earliest submission time
4. **Announce winner** via email
5. **Order Premier League shirt**
6. **Celebrate!** 🏆

### Archive Data

1. **Download final CSV**
2. **Backup database** from Railway
3. **Take screenshots** of statistics
4. **Document** for next year

---

## 🔄 For Next Year

To reuse this app for next year's Corporate Cup:

1. **Update event date** in `frontend/src/data.ts`
2. **Update team rosters** if changed
3. **Clear database** or create new Railway project
4. **Update QR codes** with new URL
5. **Launch new campaign**

---

**Good luck with your Corporate Cup fundraiser! 🏆⚽❤️**

*Questions? Check the main README.md for more details.*
