# 🚀 Deploy to Vercel - 10 Minute Guide

## ⭐ Why Vercel?

**Vercel is the most reliable option for your Corporate Cup Predictor:**
- ✅ **99.99% uptime** - Used by Netflix, Uber, Nike
- ✅ **Free forever** - No credit card required
- ✅ **Never goes down** - Enterprise-grade infrastructure
- ✅ **Permanent URLs** - Never expire
- ✅ **Environment variables persist** - Never lost
- ✅ **10 minute setup** - Faster than Evo Builder

---

## 📋 Prerequisites

Before you start, you need:
- [ ] GitHub account ([github.com/signup](https://github.com/signup))
- [ ] Your Railway backend URL (e.g., `https://your-app.railway.app`)
- [ ] 10 minutes of time

---

## 🎯 Step-by-Step Deployment

### **Step 1: Create GitHub Repository (3 minutes)**

#### **1.1: Create New Repo on GitHub**
1. Go to [github.com/new](https://github.com/new)
2. Repository name: `corporate-cup-predictor`
3. Description: `Corporate Cup 2026 - Predict goals, win a Premier League shirt!`
4. Choose **Public** (required for free Vercel)
5. **Do NOT** initialize with README (we already have code)
6. Click "Create repository"

#### **1.2: Push Your Code to GitHub**

Open a terminal in your project root and run:

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Corporate Cup Predictor - Ready for deployment"

# Add GitHub as remote (replace YOUR_USERNAME with your GitHub username)
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/corporate-cup-predictor.git

# Push to GitHub
git push -u origin main
```

**Verify:** Go to your GitHub repo URL - you should see all your files!

---

### **Step 2: Create Vercel Account (1 minute)**

1. Go to [vercel.com](https://vercel.com/)
2. Click "Sign Up"
3. Choose "Continue with GitHub"
4. Authorize Vercel to access your GitHub account
5. Done! You're logged in.

---

### **Step 3: Deploy to Vercel (5 minutes)**

#### **3.1: Import Your Repository**
1. Go to [vercel.com/new](https://vercel.com/new)
2. You'll see "Import Git Repository"
3. Find your `corporate-cup-predictor` repo
4. Click "Import"

#### **3.2: Configure Project Settings**

Vercel will show a configuration screen. Set these values:

**Project Name:**
```
corporate-cup-predictor
```

**Framework Preset:**
```
Vite
```

**Root Directory:**
```
frontend
```
*(Click "Edit" next to Root Directory and type `frontend`)*

**Build Command:**
```
npm run build
```

**Output Directory:**
```
dist
```

**Install Command:**
```
npm install
```

#### **3.3: Add Environment Variable**

This is **CRITICAL** - your app won't work without this!

1. Click "Environment Variables" section
2. Add a new variable:
   - **Key:** `VITE_API_URL`
   - **Value:** Your Railway backend URL (e.g., `https://your-app-railway-production.up.railway.app`)
   - **Environment:** All (Production, Preview, Development)
3. Click "Add"

**Example:**
```
Key: VITE_API_URL
Value: https://corporate-cup-backend-production.up.railway.app
```

#### **3.4: Deploy!**

1. Click "Deploy" button
2. Wait 2-3 minutes while Vercel builds your app
3. You'll see a success screen with confetti! 🎉

---

### **Step 4: Get Your URL (1 minute)**

After deployment completes:

1. You'll see your live URL: `https://corporate-cup-predictor.vercel.app`
2. Click "Visit" to open your app
3. Test it:
   - Submit a test entry
   - Check admin panel (⚽ button)
   - Verify it connects to your Railway backend

**Your URL is now PERMANENT and will NEVER expire!** ✅

---

## ✅ Verification Checklist

Test your deployment:

- [ ] App loads without errors
- [ ] Browser console shows Railway backend URL
- [ ] Can navigate through all 4 steps
- [ ] Can submit an entry
- [ ] Success screen appears
- [ ] Admin panel opens (⚽ button, password: `Fryingpan.420!`)
- [ ] Can see entries in admin panel
- [ ] CSV export works
- [ ] Works on mobile (test on your phone)

---

## 🎨 Optional: Custom Domain

Want a custom domain like `corporatecup.yourcompany.com`?

### **Add Custom Domain (5 minutes):**

1. In Vercel dashboard, go to your project
2. Click "Settings" → "Domains"
3. Add your domain
4. Follow Vercel's DNS instructions
5. Wait for DNS propagation (5-60 minutes)
6. Done! Your app is now at your custom domain

---

## 🔄 How to Update Your App

When you need to make changes:

### **Option 1: Push to GitHub (Automatic Deployment)**

```bash
# Make your changes in the code
# Then commit and push:
git add .
git commit -m "Updated player names"
git push

# Vercel automatically deploys! (2-3 minutes)
```

### **Option 2: Redeploy from Vercel Dashboard**

1. Go to [vercel.com/dashboard](https://vercel.com/dashboard)
2. Click your project
3. Click "Deployments" tab
4. Click "..." on latest deployment
5. Click "Redeploy"

---

## 🛡️ Reliability Features

### **What Vercel Gives You:**

✅ **Global CDN** - Fast worldwide  
✅ **Automatic HTTPS** - Secure by default  
✅ **DDoS Protection** - Enterprise-grade security  
✅ **99.99% Uptime SLA** - Guaranteed reliability  
✅ **Automatic Scaling** - Handles traffic spikes  
✅ **Zero Downtime Deploys** - Updates without interruption  
✅ **Instant Rollbacks** - Revert to previous version in 1 click  
✅ **Real-time Logs** - Debug issues instantly  

---

## 📊 Monitoring Your App

### **Built-in Vercel Analytics:**

1. Go to your project dashboard
2. Click "Analytics" tab
3. See:
   - Page views
   - Unique visitors
   - Performance metrics
   - Error rates

### **Optional: Add UptimeRobot (Free)**

For email alerts if your app goes down:

1. Go to [uptimerobot.com](https://uptimerobot.com/)
2. Sign up (free)
3. Add monitor:
   - **Type:** HTTP(s)
   - **URL:** Your Vercel URL
   - **Monitoring Interval:** 5 minutes
4. Get email alerts if down

---

## 🚨 Troubleshooting

### **"Build Failed"**

**Check these:**
1. Is `VITE_API_URL` environment variable set?
2. Is Root Directory set to `frontend`?
3. Check build logs in Vercel dashboard
4. Verify package.json has correct build script

**Fix:**
1. Go to Project Settings
2. Verify all settings match Step 3.2
3. Redeploy

### **"App Loads But Can't Submit Entries"**

**Check:**
1. Browser console for errors
2. Is backend URL correct in environment variable?
3. Is Railway backend running?

**Fix:**
1. Test Railway backend: `https://your-backend.railway.app/health`
2. Should return: `{"status":"healthy"}`
3. If not, check Railway logs
4. Update `VITE_API_URL` in Vercel if backend URL changed

### **"CORS Errors"**

**Check:**
1. Railway backend has CORS configured
2. Backend Program.cs has `app.UseCors()` before `app.UseAuthorization()`

**Fix:**
1. Verify backend CORS configuration
2. Redeploy backend if needed
3. Test again

### **"Environment Variable Not Working"**

**Fix:**
1. Go to Vercel Project Settings
2. Click "Environment Variables"
3. Verify `VITE_API_URL` is set for all environments
4. Click "Redeploy" (environment changes require redeploy)

---

## 💰 Cost Breakdown

### **Free Tier Includes:**

✅ **Unlimited deployments**  
✅ **100GB bandwidth/month** (way more than you need)  
✅ **Unlimited team members**  
✅ **Automatic HTTPS**  
✅ **Custom domains**  
✅ **Analytics**  
✅ **Preview deployments**  

### **What You'll Use:**

For 200 staff members making predictions:
- **Bandwidth:** ~2GB/month (well within free tier)
- **Build minutes:** ~10 minutes total (free)
- **Deployments:** 1-5 (free)

**Total Cost: $0** ✅

---

## 🎯 Quick Reference

### **Your URLs:**

**Vercel App:**
```
https://corporate-cup-predictor.vercel.app
```

**Vercel Dashboard:**
```
https://vercel.com/dashboard
```

**GitHub Repo:**
```
https://github.com/YOUR_USERNAME/corporate-cup-predictor
```

**Railway Backend:**
```
https://your-app.railway.app
```

### **Important Info:**

**Admin Password:** `Fryingpan.420!`  
**Admin Access:** Click ⚽ button (bottom-right)  
**Environment Variable:** `VITE_API_URL` = Railway backend URL  

---

## 📧 Update Your Marketing Materials

After deploying to Vercel:

### **1. Generate New QR Code:**
1. Go to [qr-code-generator.com](https://www.qr-code-generator.com/)
2. Enter your Vercel URL: `https://corporate-cup-predictor.vercel.app`
3. Download high-resolution PNG
4. Print new posters

### **2. Update Email:**
Replace Evo Builder URL with Vercel URL:

```
🏆 Corporate Cup 2026 - Make Your Prediction!

Predict the total goals and win a Premier League shirt!

👉 Enter now: https://corporate-cup-predictor.vercel.app

Minimum $10 donation to Heartbeat of Football.
Deadline: March 19, 2026
```

### **3. Update Existing Posters:**
If you already printed posters with Evo Builder URL:
- Print new QR code stickers
- Place over old QR codes
- Or print new posters

---

## 🎉 Success!

You now have:

✅ **Rock-solid hosting** on Vercel (99.99% uptime)  
✅ **Permanent URL** that never expires  
✅ **Professional deployment** used by major companies  
✅ **Zero maintenance** required  
✅ **Free forever** for your use case  
✅ **Peace of mind** for your tournament  

---

## 📞 Support

### **Vercel Support:**
- [Documentation](https://vercel.com/docs)
- [Discord Community](https://vercel.com/discord)
- [Status Page](https://www.vercel-status.com/)
- [Email Support](https://vercel.com/support)

### **Quick Help:**
- **Build issues:** Check build logs in Vercel dashboard
- **Runtime issues:** Check browser console (F12)
- **Backend issues:** Check Railway logs
- **CORS issues:** Verify backend CORS configuration

---

## 🚀 Next Steps

1. ✅ Deploy to Vercel (you just did this!)
2. Test thoroughly
3. Generate QR code
4. Update marketing materials
5. Share with your company
6. Monitor entries
7. Win the tournament! 🏆

---

*Deployment Time: 10 minutes*  
*Reliability: 99.99% uptime*  
*Cost: $0 (Free forever)*  
*Maintenance: Zero*

**Your app is now bulletproof!** 💪

---

**Questions?** Check the RELIABILITY_GUIDE.md for more details!
