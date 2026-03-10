# 🚀 Complete Deployment Guide - Corporate Cup Predictor

## ⏱️ Time Required: 30-45 minutes

This guide will help you deploy both the backend and frontend so you can share the app with your company!

---

## 📋 Prerequisites

Before you start, make sure you have:
- [ ] GitHub account (free) - [Sign up here](https://github.com/signup)
- [ ] Railway account (free) - [Sign up here](https://railway.app/)
- [ ] Access to this Evo Builder project

---

## Part 1: Deploy Backend to Railway (20 minutes)

### Step 1: Create GitHub Repository

1. **Go to GitHub** and create a new repository:
   - Name: `corporate-cup-backend`
   - Visibility: **Public** (required for Railway free tier)
   - Don't initialize with README

2. **Copy the repository URL** (you'll need this)
   - Example: `https://github.com/yourusername/corporate-cup-backend.git`

### Step 2: Push Backend Code to GitHub

You have two options:

#### **Option A: Using GitHub Web Interface (Easiest)**

1. In your new GitHub repository, click **"uploading an existing file"**
2. Drag and drop ALL files from the `/backend` folder:
   - `CorporateCupPredictor.csproj`
   - `Program.cs`
   - `Entry.cs`
   - `EntryDto.cs`
   - `AppDbContext.cs`
   - `appsettings.json`
   - `appsettings.Development.json`
   - `.gitignore`
3. Click **"Commit changes"**

#### **Option B: Using Git Command Line**

```bash
# Navigate to backend folder
cd backend

# Initialize git
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - Corporate Cup Backend"

# Add remote (replace with your GitHub URL)
git remote add origin https://github.com/yourusername/corporate-cup-backend.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 3: Deploy to Railway

1. **Go to [Railway.app](https://railway.app/)** and sign in with GitHub

2. **Click "New Project"**

3. **Select "Deploy from GitHub repo"**

4. **Choose your `corporate-cup-backend` repository**

5. **Railway will auto-detect .NET** and start deploying

6. **Wait for deployment** (2-3 minutes)
   - You'll see build logs
   - Wait for "Success" message

### Step 4: Configure Railway Settings

1. **Click on your deployed service**

2. **Go to "Settings" tab**

3. **Generate Domain:**
   - Click "Generate Domain" under "Networking"
   - You'll get a URL like: `https://corporate-cup-backend-production-xxxx.up.railway.app`
   - **Copy this URL** - you'll need it for the frontend!

4. **Set Environment Variables** (if needed):
   - Click "Variables" tab
   - Add: `ASPNETCORE_ENVIRONMENT` = `Production`

### Step 5: Test Backend

1. **Open your Railway URL in browser**
   - Add `/swagger` to the end
   - Example: `https://your-app.up.railway.app/swagger`

2. **You should see Swagger documentation** with these endpoints:
   - `GET /health` - Health check
   - `POST /api/entries` - Submit entry
   - `GET /api/entries` - Get all entries
   - `GET /api/entries/{id}` - Get single entry
   - `PUT /api/entries/{id}` - Update entry
   - `DELETE /api/entries/{id}` - Delete entry
   - `GET /api/entries/statistics` - Get statistics

3. **Test the health endpoint:**
   - Click on `GET /health`
   - Click "Try it out"
   - Click "Execute"
   - Should return: `{"status":"healthy"}`

✅ **Backend is now live!**

---

## Part 2: Deploy Frontend to Evo Builder (10 minutes)

### Step 1: Set Backend URL Environment Variable

1. **In Evo Builder**, go to **Project Settings** (gear icon)

2. **Find "Environment Variables"** section

3. **Add new variable:**
   - **Name:** `VITE_API_URL`
   - **Value:** Your Railway URL (from Part 1, Step 4)
   - Example: `https://corporate-cup-backend-production-xxxx.up.railway.app`

4. **Save** the environment variable

5. **Restart the dev server** (if needed)

### Step 2: Test Frontend Locally

1. **Open the app** in the Evo Builder preview

2. **Open browser console** (F12 or right-click → Inspect)

3. **Check for the backend URL log:**
   - Should see: `Backend URL: https://your-railway-url.up.railway.app`

4. **Test the flow:**
   - Fill in Step 1 (name & email)
   - Fill in Step 2 (goals prediction)
   - Fill in Step 3 (top scorers)
   - Click "Donate $10 (minimum)" - should open donation page
   - Click "Already Donated"
   - Submit entry
   - Should see success screen!

5. **Test admin panel:**
   - Click the soccer ball ⚽ in bottom-right corner
   - Enter password: `Fryingpan.420!`
   - Should see your test entry
   - Try exporting CSV

### Step 3: Publish Frontend

1. **Click the "Publish" button** in Evo Builder (top-right)

2. **Evo Builder will build and deploy** your app

3. **You'll get a public URL** like:
   - `https://your-app.evo.builder`
   - Or a custom domain if you've set one up

4. **Copy this URL** - this is what you'll share!

✅ **Frontend is now live!**

---

## Part 3: Final Testing (10 minutes)

### Test the Published App

1. **Open your published Evo Builder URL** in a new incognito window

2. **Test complete user flow:**
   - [ ] Step 1: Enter name and email
   - [ ] Step 2: Predict total goals
   - [ ] Step 3: Select top scorers (one from each team)
   - [ ] Step 4: Click donation link (opens in new tab)
   - [ ] Step 4: Click "Already Donated"
   - [ ] Submit entry
   - [ ] See success screen

3. **Test on mobile:**
   - [ ] Open URL on your phone
   - [ ] Complete entire flow
   - [ ] Check that everything is readable and clickable

4. **Test admin panel:**
   - [ ] Click soccer ball ⚽
   - [ ] Enter password: `Fryingpan.420!`
   - [ ] See all entries
   - [ ] Check statistics
   - [ ] Export CSV
   - [ ] Verify CSV contains correct data

### Verify Backend Data

1. **Go to Railway dashboard**

2. **Click on your service**

3. **Go to "Deployments" tab**

4. **Check logs** for any errors

5. **Verify entries are being saved:**
   - Open Swagger: `https://your-railway-url.up.railway.app/swagger`
   - Test `GET /api/entries`
   - Should see your test entries

---

## Part 4: Share With Your Company (5 minutes)

### Create QR Code

1. **Go to [QR Code Generator](https://www.qr-code-generator.com/)**

2. **Enter your Evo Builder URL**

3. **Customize:**
   - Add Access logo (optional)
   - Choose colors (red/black to match brand)
   - Select high resolution

4. **Download PNG** (high resolution for printing)

### Email Template

```
Subject: 🏆 Corporate Cup 2026 - Make Your Predictions & Win!

Hi Team,

The Corporate Cup is back on March 20, 2026 in Sydney! 🎉⚽

Make your predictions and you could win a Premier League shirt of your choice - paid for by The Access Group!

HOW TO ENTER:
1. Click here: [YOUR EVO BUILDER URL]
2. Predict the total goals scored
3. Pick your top scorers from each team
4. Donate minimum $10 to Heartbeat of Football (or more if you wish!)
5. Submit your entry

RULES:
- Closest total goals prediction wins
- If tied: Combined goals by your predicted top scorers
- If still tied: Earliest submission wins

All donations go to Heartbeat of Football - a great cause!

Deadline: March 19, 2026 (day before tournament)

Good luck! 🏆

[Your Name]
```

### Poster Template

Create a poster with:
- **Large QR Code** (center)
- **Headline:** "Corporate Cup 2026 - Make Your Predictions!"
- **Date:** March 20, 2026 | Sydney
- **Prize:** Win a Premier League Shirt
- **Donation:** $10 minimum to Heartbeat of Football
- **URL:** [Your Evo Builder URL] (below QR code)
- **Access logo** (top)
- **Heartbeat of Football logo** (bottom)

Print and display in:
- Kitchen/break rooms
- Near coffee machines
- Meeting room entrances
- Reception area
- Bathroom stalls (high visibility!)

---

## 🎯 Success Checklist

Before sharing, verify:

### Backend ✅
- [ ] Railway deployment successful
- [ ] Swagger documentation accessible
- [ ] Health endpoint returns `{"status":"healthy"}`
- [ ] Can submit entries via Swagger
- [ ] Entries are saved to database
- [ ] Statistics endpoint works
- [ ] No errors in Railway logs

### Frontend ✅
- [ ] Evo Builder published successfully
- [ ] Public URL accessible
- [ ] Backend URL environment variable set
- [ ] Console shows correct backend URL
- [ ] Can complete all 4 steps
- [ ] Donation link opens correctly
- [ ] Success screen appears after submission
- [ ] Admin panel accessible with password
- [ ] Can view entries in admin panel
- [ ] CSV export works
- [ ] Mobile responsive (test on phone)

### Marketing ✅
- [ ] QR code generated
- [ ] Email drafted
- [ ] Posters designed
- [ ] URLs tested and working
- [ ] Deadline communicated (March 19, 2026)

---

## 🆘 Troubleshooting

### "Backend not responding"

**Check:**
1. Railway deployment status (should be "Active")
2. Railway logs for errors
3. Backend URL in environment variable (no trailing slash)
4. CORS configuration in Program.cs

**Fix:**
- Redeploy on Railway
- Check Railway logs for specific errors
- Verify .NET 10.0 is installed on Railway

### "CORS errors in browser console"

**Check:**
1. Program.cs has CORS configured correctly
2. Backend URL matches exactly (no http/https mismatch)

**Fix:**
- Verify Program.cs has `app.UseCors()` before `app.UseAuthorization()`
- Redeploy backend after fixing

### "Entries not saving"

**Check:**
1. Railway logs for database errors
2. Swagger test - try submitting via Swagger
3. Browser console for API errors

**Fix:**
- Check Railway logs
- Verify database file is being created
- Test endpoints individually via Swagger

### "Admin panel not opening"

**Check:**
1. Soccer ball visible in bottom-right corner
2. Password is correct: `Fryingpan.420!` (case-sensitive)
3. Browser console for JavaScript errors

**Fix:**
- Hard refresh (Ctrl+Shift+R)
- Try incognito mode
- Check console for errors

### "Mobile not working"

**Check:**
1. URL opens on mobile browser
2. All buttons are tappable
3. Text is readable

**Fix:**
- Test on different mobile browsers
- Check viewport meta tag in index.html
- Verify responsive CSS

---

## 📊 Monitoring Entries

### Daily Checks (Recommended)

1. **Check Railway logs** for errors
2. **Open admin panel** and review entries
3. **Export CSV** for backup
4. **Monitor donation progress**

### Weekly Backup

1. **Export CSV** from admin panel
2. **Save to secure location**
3. **Check for duplicate emails**
4. **Verify all entries have donations**

### Before Tournament (March 19, 2026)

1. **Final CSV export**
2. **Close submissions** (optional: add deadline check)
3. **Verify all entries**
4. **Prepare winner calculation**

---

## 🏆 After the Tournament

### Calculate Winner

1. **Export final CSV**
2. **Enter actual total goals scored**
3. **Sort by closest prediction**
4. **If tied:**
   - Check combined goals by predicted top scorers
   - If still tied: Check submission timestamp

### Announce Winner

1. **Email all participants**
2. **Post in company channels**
3. **Arrange Premier League shirt purchase**
4. **Thank everyone for donations**
5. **Share total amount raised for Heartbeat of Football**

---

## 💰 Cost Breakdown

### Free Tier Limits

**Railway (Backend):**
- ✅ 500 hours/month (enough for your tournament)
- ✅ 100GB outbound bandwidth
- ✅ Automatic HTTPS
- ✅ No credit card required initially

**Evo Builder (Frontend):**
- ✅ Included in your Evo Builder subscription
- ✅ Unlimited bandwidth
- ✅ Automatic HTTPS
- ✅ Custom domains available

**Total Cost: $0** (for tournament duration)

### If You Need More

If you exceed Railway free tier:
- **Hobby Plan:** $5/month
- Includes 500 hours + $5 credit
- More than enough for your needs

---

## 📞 Support

### Railway Issues
- [Railway Documentation](https://docs.railway.app/)
- [Railway Discord](https://discord.gg/railway)
- [Railway Status](https://status.railway.app/)

### Evo Builder Issues
- Contact your Evo Builder support team
- Check Evo Builder documentation

### App Issues
- Check browser console for errors
- Review Railway logs
- Test endpoints via Swagger
- Verify environment variables

---

## 🎉 You're Ready!

Once you complete all steps above, your Corporate Cup Predictor will be:

✅ **Live and accessible** to your entire company  
✅ **Reliable** with professional hosting  
✅ **Secure** with admin password protection  
✅ **Mobile-friendly** for easy access  
✅ **Trackable** with admin panel and CSV export  
✅ **Ready for your tournament** next week!

**Good luck with your fundraiser!** 🏆⚽❤️

---

*Last updated: January 2025*  
*Tournament date: March 20, 2026*  
*Charity: Heartbeat of Football*
