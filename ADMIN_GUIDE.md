# 🔐 Corporate Cup Predictor - Admin Guide

Complete guide for administrators managing the prediction system.

---

## 🔑 Admin Access

### How to Access Admin Panel

1. **Open the app** in your browser
2. **Triple-tap** the bottom-right corner (quickly, within 1 second)
3. **Enter password**: `Fryingpan.420!`
4. **Click "Login"**

**Note**: The admin trigger area is invisible but covers the bottom-right 80x80px area.

### Password Security

**Current Password**: `Fryingpan.420!`

**To Change Password**:
1. Edit `frontend/src/data.ts`
2. Update `ADMIN_PASSWORD` constant
3. Commit and push to GitHub
4. Evo Builder will auto-deploy

---

## 📊 Admin Dashboard

### Statistics Overview

The dashboard shows:
- **Total Entries**: Number of submissions
- **Average Goals**: Mean prediction across all entries
- **Most Popular Men's Scorer**: Most selected player
- **Most Popular Mixed Scorer**: Most selected player

### Entries Table

Displays all entries with:
- **ID**: Unique entry identifier
- **Name**: Participant name
- **Email**: Participant email
- **Goals**: Total goals prediction
- **Men's Scorer**: Selected top scorer
- **Mixed Scorer**: Selected top scorer
- **Submitted**: Date and time of submission
- **Screenshot**: View donation proof

---

## 📥 Export Data

### CSV Export

**To Export**:
1. Open admin panel
2. Click **"Export to CSV"** button
3. File downloads automatically

**CSV Format**:
```csv
ID,Name,Email,Total Goals,Men's Top Scorer,Mixed Top Scorer,Submitted At
1,"John Smith","john@example.com",25,"James Anderson","Sarah Johnson","2026-03-15 10:30:00"
```

**Use Cases**:
- Backup before event
- Calculate winner after event
- Analyze predictions
- Share with stakeholders

### View Screenshots

**To View Donation Proof**:
1. Find entry in table
2. Click **"View"** button in Screenshot column
3. Image opens in modal
4. Click **"Close"** or click outside to dismiss

**Tips**:
- Verify donation amount ($10+ AUD)
- Check donation date (before event)
- Confirm it's a legitimate screenshot
- Look for confirmation number

---

## 🎯 Calculate Winner

### After the Event

1. **Get actual results** from Corporate Cup organizers:
   - Total goals scored
   - Men's top scorer and goals
   - Mixed top scorer and goals

2. **Export CSV** from admin panel

3. **Open in Excel/Google Sheets**

4. **Calculate differences**:
   ```
   = ABS(ActualGoals - PredictedGoals)
   ```

5. **Sort by difference** (ascending)

6. **Apply tie-breakers**:
   - If tied: Check combined goals by predicted scorers
   - If still tied: Check submission time (earliest wins)

### Example Calculation

**Actual Results**:
- Total Goals: 28
- Men's Top Scorer: James Anderson (5 goals)
- Mixed Top Scorer: Sarah Johnson (4 goals)

**Entries**:
```
Entry 1: 27 goals, James Anderson, Sarah Johnson
  Difference: |28-27| = 1
  Scorer Goals: 5+4 = 9 ✓✓
  
Entry 2: 27 goals, Michael Chen, Emily Davis
  Difference: |28-27| = 1
  Scorer Goals: 2+3 = 5
  
Entry 3: 29 goals, James Anderson, Sarah Johnson
  Difference: |28-29| = 1
  Scorer Goals: 5+4 = 9 ✓✓
```

**Winner**: Entry 1 or Entry 3 (both tied)
**Tie-breaker**: Check submission time → Earliest wins!

---

## 🛠️ Management Tasks

### Monitor Entries

**Daily Checks**:
- [ ] Check total entry count
- [ ] Review new submissions
- [ ] Verify donation screenshots
- [ ] Export CSV for backup

**Weekly Tasks**:
- [ ] Analyze prediction trends
- [ ] Check for duplicate emails
- [ ] Monitor average predictions
- [ ] Update stakeholders

### Handle Issues

**Duplicate Email**:
- System automatically prevents duplicates
- If user needs to resubmit, delete old entry via API
- User can then submit new entry

**Invalid Screenshot**:
- Contact user via email
- Request valid donation proof
- Delete entry if not provided
- Allow resubmission

**Technical Problems**:
- Check backend health: `<backend-url>/health`
- Review Railway logs
- Test API endpoints in Swagger
- Verify CORS configuration

### Delete Entry

**Via API** (if needed):
1. Open Swagger: `<backend-url>/swagger`
2. Find **DELETE /api/entries/{id}**
3. Enter entry ID
4. Click **"Execute"**
5. Confirm deletion

**Note**: There's no delete button in admin panel UI (by design). Use API for deletions.

---

## 📧 Communication Templates

### Launch Announcement

```
Subject: 🏆 Corporate Cup 2026 - Make Your Predictions!

Hi Team,

The Corporate Cup is back! Make your predictions and win a Premier League shirt.

📱 Enter here: [URL]
💰 Minimum donation: $10 AUD
🎽 Prize: Premier League shirt
📅 Deadline: March 20, 2026

Good luck!
```

### Reminder Email (1 week before)

```
Subject: ⏰ Last Week to Enter Corporate Cup Predictions!

Hi Team,

Only 1 week left to make your Corporate Cup predictions!

Current stats:
- [X] entries submitted
- Average prediction: [Y] goals
- Most popular scorers: [Names]

Don't miss out! Enter now: [URL]
```

### Winner Announcement

```
Subject: 🏆 Corporate Cup Winner Announced!

Hi Team,

The results are in!

Actual Results:
- Total Goals: [X]
- Men's Top Scorer: [Name] ([Y] goals)
- Mixed Top Scorer: [Name] ([Z] goals)

🎉 Winner: [Winner Name]
- Predicted: [X] goals
- Difference: [Y] goals
- Top Scorers: [Names]

Congratulations! Your Premier League shirt is on the way! 🎽

Thanks to everyone who participated and donated to Heartbeat of Football!

Total raised: $[Amount] AUD ❤️
```

---

## 🔧 Troubleshooting

### Admin Panel Won't Open

**Solutions**:
1. **Triple-tap faster** (within 1 second)
2. **Try different browser**
3. **Clear browser cache**
4. **Check JavaScript is enabled**
5. **Try incognito mode**

### Can't See Entries

**Solutions**:
1. **Check backend is running**: `<backend-url>/health`
2. **Verify CORS configuration**
3. **Check browser console** for errors
4. **Test API directly**: `<backend-url>/api/entries`
5. **Review Railway logs**

### CSV Export Not Working

**Solutions**:
1. **Check browser allows downloads**
2. **Disable popup blockers**
3. **Try different browser**
4. **Check entries exist** (can't export empty data)
5. **Manually copy data** from table if needed

### Screenshots Not Loading

**Solutions**:
1. **Check image size** (should be under 5MB)
2. **Verify base64 encoding** is valid
3. **Check browser console** for errors
4. **Try different browser**
5. **Contact user** for re-upload if corrupted

---

## 📊 Analytics & Insights

### Prediction Trends

**Analyze**:
- **Average goals**: Are people optimistic or conservative?
- **Popular scorers**: Who's the crowd favorite?
- **Submission timing**: Early birds or last-minute?
- **Email domains**: Which departments are participating?

### Engagement Metrics

**Track**:
- **Total entries**: Participation rate
- **Daily submissions**: Engagement over time
- **Completion rate**: How many start vs. finish?
- **Donation total**: Fundraising success

### Report to Stakeholders

**Weekly Update**:
```
Corporate Cup Predictions - Week [X]

📊 Stats:
- Total Entries: [X]
- Average Prediction: [Y] goals
- Most Popular Scorers: [Names]
- Total Raised: $[Amount] AUD

📈 Trends:
- [Insight 1]
- [Insight 2]
- [Insight 3]

🎯 Goal: [Target] entries by [Date]
```

---

## 🔐 Security Best Practices

### Password Management
- ✅ Keep password confidential
- ✅ Only share with authorized admins
- ✅ Change password if compromised
- ✅ Use strong, unique password

### Data Protection
- ✅ Export CSV regularly for backup
- ✅ Store backups securely
- ✅ Don't share personal data publicly
- ✅ Comply with privacy policies

### Access Control
- ✅ Limit admin access to authorized staff
- ✅ Log admin activities if needed
- ✅ Monitor for suspicious activity
- ✅ Revoke access when no longer needed

---

## 📞 Support Escalation

### Level 1: Self-Service
- Check this guide
- Review README.md
- Test in different browser
- Clear cache and retry

### Level 2: Technical Support
- Check backend logs (Railway)
- Review API documentation (Swagger)
- Test endpoints directly
- Check CORS configuration

### Level 3: Developer Support
- Review source code
- Check GitHub issues
- Contact Evo Builder support
- Engage Railway support

---

## ✅ Pre-Launch Checklist

Before announcing to staff:

- [ ] Backend deployed and healthy
- [ ] Frontend environment variable set
- [ ] Admin access working
- [ ] Test entry submitted successfully
- [ ] CSV export working
- [ ] Screenshots viewable
- [ ] Mobile responsive
- [ ] QR code generated
- [ ] Email templates ready
- [ ] Posters printed
- [ ] Support plan in place

---

## 🎉 Post-Event Checklist

After the Corporate Cup:

- [ ] Export final CSV
- [ ] Calculate winner
- [ ] Verify tie-breakers
- [ ] Announce winner
- [ ] Order Premier League shirt
- [ ] Thank participants
- [ ] Report total donations
- [ ] Archive data
- [ ] Document lessons learned
- [ ] Plan for next year

---

**Questions? Check README.md or DEPLOYMENT_GUIDE.md for more details.**

*Corporate Cup 2026 • Admin Guide • Confidential*
