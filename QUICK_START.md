# ⚡ Corporate Cup Predictor - Quick Start

Get up and running in 5 minutes!

---

## 🎯 What You Have

✅ **Complete React frontend** - All 9 components ready  
✅ **Complete .NET backend** - API with SQLite database  
✅ **Full documentation** - 5 comprehensive guides  
✅ **Mobile-responsive design** - Works on all devices  
✅ **Admin panel** - Password-protected management  

---

## 🚀 Option 1: Frontend Only (Test Locally)

Perfect for testing the UI without backend.

### Step 1: Preview Frontend

The frontend is already built! Just:
1. **Wait for Evo Builder** to start the dev server
2. **Open the preview** in the right panel
3. **You'll see the app** running!

### Step 2: Test the UI

You can test everything except submission:
- ✅ Step through all 4 steps
- ✅ See the progress indicator
- ✅ Test form validation
- ✅ Try the admin login (triple-tap corner)
- ❌ Can't submit (no backend yet)

**Note**: You'll see "Backend URL: http://localhost:5000" in console. That's expected!

---

## 🚀 Option 2: Full Stack (Deploy Everything)

Deploy both frontend and backend for full functionality.

### Step 1: Deploy Backend (15 min)

1. **Create GitHub repo**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/YOUR_USERNAME/corporate-cup.git
   git push -u origin main
   ```

2. **Deploy to Railway**:
   - Go to https://railway.app/
   - Click "New Project" → "Deploy from GitHub"
   - Select your repo
   - Wait for deployment (2-3 min)
   - Click "Generate Domain" in Settings
   - Copy the URL (e.g., `https://your-app.railway.app`)

3. **Test backend**:
   - Visit: `https://your-app.railway.app/health`
   - Should see: `{"status":"healthy",...}`
   - Visit: `https://your-app.railway.app/swagger`
   - Should see: Swagger documentation

### Step 2: Configure Frontend (2 min)

1. **In Evo Builder**:
   - Click Settings (⚙️)
   - Go to "Environment Variables"
   - Add: `VITE_API_URL` = `https://your-app.railway.app`
   - Save

2. **Refresh preview**:
   - Hard refresh (Ctrl+Shift+R)
   - Check console: Should see your Railway URL
   - Now you can submit entries!

### Step 3: Test Everything (5 min)

1. **Submit test entry**:
   - Name: Test User
   - Email: test@example.com
   - Goals: 25
   - Pick any scorers
   - Upload any image
   - Submit!

2. **Check admin panel**:
   - Triple-tap bottom-right corner
   - Password: `Fryingpan.420!`
   - See your test entry
   - Export CSV
   - View screenshot

3. **Verify mobile**:
   - Open on phone
   - Test all steps
   - Confirm responsive design

---

## 🎨 Customize (Optional)

### Change Teams/Players

Edit `frontend/src/data.ts`:

```typescript
export const MENS_TEAM: Team = {
  name: "Men's Team",
  players: [
    { id: 'mens-1', name: 'Your Player 1' },
    { id: 'mens-2', name: 'Your Player 2' },
    // ... add more
  ],
};
```

### Change Admin Password

Edit `frontend/src/data.ts`:

```typescript
export const ADMIN_PASSWORD = 'YourNewPassword123!';
```

### Change Event Details

Edit `frontend/src/data.ts`:

```typescript
export const EVENT_DATE = 'Your Date';
export const EVENT_LOCATION = 'Your Location';
export const MIN_DONATION = 10; // AUD
```

### Change Colors

Edit `frontend/src/App.css`:

```css
:root {
  --access-red: #e11d48;  /* Change this */
  --background: #0a0a0a;   /* And this */
  /* ... */
}
```

---

## 📱 Create QR Code

After deployment:

1. **Go to**: https://www.qr-code-generator.com/
2. **Select**: URL type
3. **Enter**: Your Evo Builder URL
4. **Customize**: Add logo, colors, frame
5. **Download**: High-resolution PNG
6. **Print**: Display in office

---

## 🎯 Launch Checklist

Before announcing to staff:

- [ ] Backend deployed and healthy
- [ ] Frontend shows correct backend URL
- [ ] Test entry submitted successfully
- [ ] Admin panel accessible
- [ ] CSV export working
- [ ] Mobile responsive
- [ ] QR code created
- [ ] Email ready
- [ ] Posters printed

---

## 📚 Need More Help?

### Documentation Available

1. **README.md** - Complete overview
2. **DEPLOYMENT_GUIDE.md** - Detailed deployment steps
3. **USER_GUIDE.md** - For staff using the app
4. **ADMIN_GUIDE.md** - For managing entries
5. **PROJECT_SUMMARY.md** - Technical details

### Quick Links

- **Backend Health**: `<your-railway-url>/health`
- **Swagger Docs**: `<your-railway-url>/swagger`
- **Frontend Preview**: Right panel in Evo Builder
- **Admin Access**: Triple-tap corner, password: `Fryingpan.420!`

---

## 🐛 Common Issues

### "Backend not found"
→ Set `VITE_API_URL` environment variable

### "CORS error"
→ Backend has CORS configured, check Railway logs

### "Admin won't open"
→ Triple-tap quickly (within 1 second)

### "Can't submit"
→ Check all fields filled, image uploaded

---

## 🎉 You're Ready!

The app is **complete and ready to deploy**. Choose your path:

- **Quick Test**: Just preview the frontend now
- **Full Deploy**: Follow Option 2 above (20 min)
- **Custom Setup**: Edit data.ts first, then deploy

**Good luck with your Corporate Cup fundraiser! 🏆⚽❤️**

---

*Questions? Check the other documentation files for detailed guides.*
