# 🚀 START DEPLOYMENT NOW - Quick Start Guide

## ⏱️ Time: 30 Minutes | Difficulty: Easy

This guide will get your Corporate Cup Predictor live and ready to share with your company in just 30 minutes!

---

## 🎯 What You'll Get

By the end of this guide:
- ✅ Backend API running on Railway (free)
- ✅ Frontend app published on Evo Builder
- ✅ Public URL to share with your company
- ✅ QR code for posters
- ✅ Email template ready to send

---

## 📋 Before You Start

Make sure you have:
- [ ] GitHub account - [Sign up here](https://github.com/signup) (2 minutes)
- [ ] Railway account - [Sign up here](https://railway.app/) (2 minutes)
- [ ] 30 minutes of uninterrupted time

---

## Part 1: Deploy Backend (15 minutes)

### Step 1: Create GitHub Repository (3 minutes)

1. Go to [github.com/new](https://github.com/new)
2. Repository name: `corporate-cup-backend`
3. Visibility: **Public** ⚠️ (required for Railway free tier)
4. **Don't** check "Add a README file"
5. Click **"Create repository"**

### Step 2: Upload Backend Files (5 minutes)

1. On your new repository page, click **"uploading an existing file"**

2. Download these files from your Evo Builder project `/backend` folder:
   - `CorporateCupPredictor.csproj`
   - `Program.cs`
   - `Entry.cs`
   - `EntryDto.cs`
   - `AppDbContext.cs`
   - `appsettings.json`
   - `appsettings.Development.json`
   - `.gitignore`

3. Drag and drop all 8 files into the GitHub upload area

4. Scroll down and click **"Commit changes"**

✅ **Backend code is now on GitHub!**

### Step 3: Deploy to Railway (5 minutes)

1. Go to [railway.app](https://railway.app/)

2. Click **"Login"** and sign in with your GitHub account

3. Click **"New Project"**

4. Select **"Deploy from GitHub repo"**

5. Find and click **"corporate-cup-backend"**

6. Railway will automatically:
   - Detect .NET 10.0
   - Install dependencies
   - Build the project
   - Deploy the API

7. **Wait for deployment** (2-3 minutes)
   - You'll see build logs scrolling
   - Wait for green "Success" checkmark

✅ **Backend is now deployed!**

### Step 4: Get Your Backend URL (2 minutes)

1. Click on your deployed service (in Railway dashboard)

2. Go to **"Settings"** tab

3. Scroll to **"Networking"** section

4. Click **"Generate Domain"**

5. You'll get a URL like:
   ```
   https://corporate-cup-backend-production-a1b2.up.railway.app
   ```

6. **Copy this URL** - you'll need it in Part 2!

### Step 5: Test Backend (2 minutes)

1. Open a new browser tab

2. Paste your Railway URL and add `/swagger` to the end:
   ```
   https://your-railway-url.up.railway.app/swagger
   ```

3. You should see **Swagger documentation** with 7 endpoints

4. Click on **"GET /health"**

5. Click **"Try it out"** then **"Execute"**

6. You should see:
   ```json
   {
     "status": "healthy"
   }
   ```

✅ **Backend is working perfectly!**

---

## Part 2: Deploy Frontend (10 minutes)

### Step 1: Set Environment Variable (3 minutes)

1. In **Evo Builder**, click the **gear icon** (⚙️) in the top-right

2. Find **"Environment Variables"** section

3. Click **"Add Variable"** or **"+"**

4. Enter:
   - **Name:** `VITE_API_URL`
   - **Value:** Your Railway URL (from Part 1, Step 4)
   - Example: `https://corporate-cup-backend-production-a1b2.up.railway.app`

5. Click **"Save"**

6. **Important:** Make sure there's NO trailing slash at the end!
   - ✅ Correct: `https://your-app.up.railway.app`
   - ❌ Wrong: `https://your-app.up.railway.app/`

✅ **Environment variable set!**

### Step 2: Test Locally (3 minutes)

1. The Evo Builder preview should automatically reload

2. Open **browser console** (press F12 or right-click → Inspect)

3. Look for this log message:
   ```
   Backend URL: https://your-railway-url.up.railway.app
   ```

4. If you see your Railway URL, you're good! ✅

5. **Quick test:**
   - Fill in Step 1 (name & email)
   - Fill in Step 2 (goals prediction)
   - Fill in Step 3 (select top scorers)
   - Click "Donate $10 (minimum)" - should open donation page
   - Click "Already Donated"
   - Click "Submit Entry"
   - Should see success screen! 🎉

6. **Test admin panel:**
   - Click the soccer ball ⚽ in bottom-right corner
   - Enter password: `Fryingpan.420!`
   - You should see your test entry!

✅ **Frontend is working locally!**

### Step 3: Publish (4 minutes)

1. In Evo Builder, click the **"Publish"** button (top-right)

2. Evo Builder will:
   - Build your React app
   - Optimize for production
   - Deploy to hosting
   - Generate public URL

3. **Wait for deployment** (2-3 minutes)

4. You'll get a **public URL** like:
   ```
   https://your-app.evo.builder
   ```
   or your custom domain if you've set one up

5. **Copy this URL** - this is what you'll share!

6. **Test the published app:**
   - Open the URL in a new incognito window
   - Submit another test entry
   - Check admin panel
   - Try on your phone!

✅ **Frontend is now live!**

---

## Part 3: Share With Company (5 minutes)

### Step 1: Create QR Code (2 minutes)

1. Go to [qr-code-generator.com](https://www.qr-code-generator.com/)

2. Select **"URL"** type

3. Paste your Evo Builder URL

4. Customize (optional):
   - Add Access logo
   - Choose colors (red/black)
   - Add frame with text

5. Click **"Download"** and select **"High Resolution"**

✅ **QR code ready for posters!**

### Step 2: Send Email (3 minutes)

Copy this template and customize:

```
Subject: 🏆 Corporate Cup 2026 - Make Your Predictions & Win!

Hi Team,

The Corporate Cup is back on March 20, 2026 in Sydney! 🎉⚽

Make your predictions and you could win a Premier League shirt of your choice - paid for by The Access Group!

🎯 ENTER NOW: [YOUR EVO BUILDER URL]

HOW IT WORKS:
1. Predict the total goals scored across all games
2. Pick your top scorers from Men's and Mixed teams
3. Donate minimum $10 to Heartbeat of Football (or more if you wish!)
4. Submit your entry

HOW TO WIN:
• Closest total goals prediction wins
• If tied: Combined goals by your predicted top scorers
• If still tied: Earliest submission wins

IMPORTANT DATES:
• Tournament: March 20, 2026
• Deadline: March 19, 2026

PRIZE:
Premier League shirt of your choice - any team, any player!

All donations go to Heartbeat of Football - supporting mental health through football. ❤️

Good luck! 🏆

[Your Name]

---
Can't click the link? Copy and paste: [YOUR URL]
```

**Replace:**
- `[YOUR EVO BUILDER URL]` with your actual URL
- `[Your Name]` with your name

**Send to:**
- All staff email list
- Post in Teams/Slack
- Share on company intranet

✅ **Email sent!**

---

## 🎉 You're Done!

### What You've Accomplished:

✅ **Backend deployed** on Railway (free, reliable hosting)  
✅ **Frontend published** on Evo Builder (fast, secure hosting)  
✅ **QR code created** for posters  
✅ **Email sent** to company  
✅ **Ready to accept entries** and donations!

### Your URLs:

**Backend (Railway):**
```
https://your-railway-url.up.railway.app
```
- Swagger docs: Add `/swagger` to the end
- Health check: Add `/health` to the end

**Frontend (Evo Builder):**
```
https://your-app.evo.builder
```
- Share this URL with your company
- Use in QR codes and posters
- Add to email signatures

### Admin Access:

**How to access:**
1. Click the soccer ball ⚽ in bottom-right corner
2. Enter password: `Fryingpan.420!`

**What you can do:**
- View all entries
- See statistics
- Export CSV
- Monitor donations

---

## 📊 Next Steps

### Daily Tasks:
- [ ] Check admin panel for new entries
- [ ] Monitor Railway logs for errors
- [ ] Respond to questions from staff

### Weekly Tasks:
- [ ] Export CSV backup
- [ ] Send progress update email
- [ ] Share donation total

### Before Tournament (March 19):
- [ ] Send final reminder email
- [ ] Export final CSV
- [ ] Close submissions
- [ ] Prepare winner calculation

### Tournament Day (March 20):
- [ ] Track actual results
- [ ] Calculate winner
- [ ] Prepare announcement

### After Tournament (March 21):
- [ ] Announce winner
- [ ] Share final statistics
- [ ] Thank all participants
- [ ] Order Premier League shirt

---

## 🆘 Troubleshooting

### "Backend not responding"
1. Check Railway deployment status (should be "Active")
2. Check Railway logs for errors
3. Verify backend URL has no trailing slash
4. Test health endpoint: `/health`

### "CORS errors"
1. Check Railway logs
2. Verify Program.cs has CORS configured
3. Redeploy backend if needed

### "Entries not saving"
1. Check Railway logs for database errors
2. Test via Swagger: POST /api/entries
3. Verify SQLite database is being created

### "Admin panel won't open"
1. Make sure you click the soccer ball ⚽
2. Password is case-sensitive: `Fryingpan.420!`
3. Check browser console for errors

### "Mobile not working"
1. Test in incognito mode
2. Hard refresh (Ctrl+Shift+R)
3. Try different mobile browser

---

## 💡 Pro Tips

### Maximize Participation:
- Display posters in high-traffic areas (kitchen, bathrooms, elevators)
- Add QR code to email signatures
- Create friendly competition between departments
- Share progress updates regularly
- Send reminder emails (1 week before, 24 hours before)

### Monitor Success:
- Check admin panel daily
- Export CSV backups regularly
- Track donation total
- Respond to questions quickly
- Build excitement with updates

### After Launch:
- Thank early participants
- Share milestone updates (50 entries, $500 raised, etc.)
- Highlight interesting predictions
- Create leaderboard (if appropriate)
- Build anticipation for tournament day

---

## 📚 Additional Resources

**Detailed Guides:**
- DEPLOYMENT_INSTRUCTIONS.md - Full 30-45 minute guide
- QUICK_DEPLOY.md - Quick reference checklist
- MARKETING_TEMPLATES.md - Email and poster templates

**Reference:**
- README.md - Project overview
- USER_GUIDE.md - For staff using the app
- ADMIN_GUIDE.md - For managing entries
- TESTING_CHECKLIST.md - QA testing

**External:**
- [Railway Documentation](https://docs.railway.app/)
- [Railway Status](https://status.railway.app/)
- [Heartbeat of Football](https://heartbeatoffootball.com.au/)

---

## 🎯 Success Checklist

Before sharing with your company, verify:

- [ ] Backend health check returns `{"status":"healthy"}`
- [ ] Swagger documentation loads
- [ ] Frontend shows correct backend URL in console
- [ ] Can submit entry without errors
- [ ] Success screen appears
- [ ] Admin panel accessible with password
- [ ] CSV export works
- [ ] Works on mobile
- [ ] QR code generated
- [ ] Email template ready

---

## 🏆 You Did It!

Your Corporate Cup Predictor is now:
- ✅ **Live** and accessible to your entire company
- ✅ **Reliable** with professional hosting
- ✅ **Secure** with admin password protection
- ✅ **Mobile-friendly** for easy access
- ✅ **Trackable** with admin panel and CSV export
- ✅ **Ready** for your tournament next week!

**Good luck with your fundraiser!** 🏆⚽❤️

---

*Questions? Check the troubleshooting section above or review the detailed guides.*

*Tournament: March 20, 2026 | Deadline: March 19, 2026 | Charity: Heartbeat of Football*
