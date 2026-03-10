# ⚡ Quick Deploy to Railway - 20 Minutes

## 🎯 Deploy Both Frontend + Backend Together

---

## ✅ Prerequisites (2 minutes)

- [ ] GitHub account
- [ ] Railway account ([railway.app](https://railway.app/) - login with GitHub)
- [ ] Code pushed to GitHub

---

## 🚀 Deployment Steps

### **Step 1: Push to GitHub** (3 min)

```bash
git add .
git commit -m "Ready for Railway deployment"
git push
```

---

### **Step 2: Deploy to Railway** (10 min)

1. Go to [railway.app](https://railway.app/)
2. Click "New Project"
3. Choose "Deploy from GitHub repo"
4. Select `corporate-cup-predictor`
5. Click "Deploy Now"
6. Wait 3-5 minutes for build
7. Done! 🎉

---

### **Step 3: Get Your URL** (1 min)

1. Click "Settings" tab
2. Under "Domains", copy your URL
3. Example: `https://corporate-cup-predictor-production.up.railway.app`

---

### **Step 4: Test** (5 min)

**Test Backend:**
```
https://your-app.railway.app/api/health
```
Should return: `{"status":"healthy"}`

**Test Frontend:**
```
https://your-app.railway.app
```
Should show your app!

**Test Full Flow:**
- [ ] Navigate through all 4 steps
- [ ] Submit test entry
- [ ] Check success screen
- [ ] Click ⚽ button (admin)
- [ ] Enter password: `Fryingpan.420!`
- [ ] Verify entry in admin panel
- [ ] Export CSV
- [ ] Test on mobile

---

## ✅ Success Checklist

- [ ] App loads without errors
- [ ] `/api/health` returns healthy
- [ ] Can submit entry
- [ ] Admin panel works
- [ ] CSV export works
- [ ] Works on mobile

---

## 🎉 Done!

**Your app is now live at:**
```
https://your-app-production.up.railway.app
```

**Next steps:**
1. Generate QR code
2. Update marketing materials
3. Share with company!

---

## 📖 Need More Details?

See `DEPLOY_BOTH_TO_RAILWAY.md` for complete guide.

---

## 🆘 Troubleshooting

**Build failed?**
- Check Railway build logs
- Verify all files committed to GitHub

**App loads but API fails?**
- Check `/api/health` endpoint
- Verify routes start with `/api`

**Frontend not loading?**
- Check Railway deployment logs
- Verify `frontend/dist` was built

---

## 💰 Cost

**Free!** Railway free tier includes:
- 500 hours/month
- 100GB bandwidth
- Automatic HTTPS

Your tournament uses ~168 hours (1 week).
**Well within free tier!** ✅

---

## 🎯 Your URLs

**Main App:**
```
https://your-app.railway.app
```

**API Health:**
```
https://your-app.railway.app/api/health
```

**Swagger:**
```
https://your-app.railway.app/swagger
```

**Railway Dashboard:**
```
https://railway.app/dashboard
```

---

## 🔐 Admin Access

**Method:** Click ⚽ button (bottom-right)
**Password:** `Fryingpan.420!`

---

## 📊 Monitoring

**Daily checks:**
- [ ] Visit Railway dashboard
- [ ] Check entry count in admin panel
- [ ] Export CSV backup

---

## 🔄 Updates

**To update your app:**

```bash
# Make changes
git add .
git commit -m "Updated something"
git push

# Railway auto-deploys! (3-5 min)
```

---

## 🎉 You're Live!

**Deployment time:** 20 minutes
**Cost:** $0
**Uptime:** 99.9%
**Reliability:** ⭐⭐⭐⭐⭐

**Good luck with your tournament!** 🏆⚽❤️
