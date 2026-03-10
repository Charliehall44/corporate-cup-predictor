# ✅ Corporate Cup Predictor - Testing Checklist

Complete testing guide to ensure everything works perfectly.

---

## 🎯 Pre-Deployment Testing

### Backend Testing

#### 1. Health Check
- [ ] Visit `<backend-url>/health`
- [ ] Should return: `{"status":"healthy","timestamp":"..."}`
- [ ] Response time < 500ms
- [ ] Status code: 200 OK

#### 2. Swagger Documentation
- [ ] Visit `<backend-url>/swagger`
- [ ] Swagger UI loads correctly
- [ ] All endpoints visible
- [ ] Can expand and test endpoints
- [ ] Try sample requests

#### 3. API Endpoints

**GET /api/entries**
- [ ] Returns empty array initially: `[]`
- [ ] Status code: 200 OK
- [ ] Content-Type: application/json

**POST /api/entries**
- [ ] Create test entry via Swagger
- [ ] All required fields validated
- [ ] Returns created entry with ID
- [ ] Status code: 201 Created
- [ ] Duplicate email rejected (400)

**GET /api/entries/{id}**
- [ ] Returns specific entry
- [ ] Status code: 200 OK
- [ ] Invalid ID returns 404

**GET /api/statistics**
- [ ] Returns statistics object
- [ ] Calculates correctly
- [ ] Status code: 200 OK

**DELETE /api/entries/{id}**
- [ ] Deletes entry successfully
- [ ] Status code: 200 OK
- [ ] Entry no longer in database

#### 4. Database
- [ ] SQLite file created: `corporatecup.db`
- [ ] Entries table exists
- [ ] Indexes created (email, submittedAt)
- [ ] Data persists after restart

#### 5. CORS
- [ ] Frontend can call backend
- [ ] No CORS errors in console
- [ ] Credentials included
- [ ] All origins allowed (dev)

---

## 🎨 Frontend Testing

### Visual Testing

#### 1. Landing Page
- [ ] Header displays correctly
- [ ] Title: "⚽ Corporate Cup 2026"
- [ ] Subtitle shows date and location
- [ ] Progress indicator visible
- [ ] Step 1 card loads

#### 2. Step 1: Details
- [ ] Name input field works
- [ ] Email input field works
- [ ] Validation on empty fields
- [ ] Email format validation
- [ ] "Next" button disabled when invalid
- [ ] "Next" button enabled when valid
- [ ] Smooth transition to Step 2

#### 3. Step 2: Goals
- [ ] Number input shows 0 initially
- [ ] + button increments (max 99)
- [ ] - button decrements (min 0)
- [ ] Direct typing works
- [ ] Invalid numbers rejected
- [ ] "Back" button returns to Step 1
- [ ] "Next" button disabled at 0
- [ ] Smooth transition to Step 3

#### 4. Step 3: Scorers
- [ ] Men's team dropdown populated
- [ ] Mixed team dropdown populated
- [ ] All 10 players visible in each
- [ ] Selection works
- [ ] "Back" button returns to Step 2
- [ ] "Next" disabled until both selected
- [ ] Smooth transition to Step 4

#### 5. Step 4: Donation
- [ ] Instructions card visible
- [ ] "Open Donation Page" button works
- [ ] Opens in new tab
- [ ] File upload input works
- [ ] Image preview shows
- [ ] File size validation (5MB)
- [ ] File type validation (images only)
- [ ] "Back" button returns to Step 3
- [ ] "Submit" disabled until uploaded
- [ ] Loading state during submission

#### 6. Success Screen
- [ ] Success checkmark animates
- [ ] User name displayed
- [ ] Predictions summary shown
- [ ] Competition rules visible
- [ ] "Submit Another Entry" button works
- [ ] Resets form to Step 1

### Functional Testing

#### 7. Form Validation
- [ ] Empty name rejected
- [ ] Invalid email rejected
- [ ] Goals outside 0-99 rejected
- [ ] No scorer selected rejected
- [ ] No screenshot rejected
- [ ] Error messages clear
- [ ] Validation happens real-time

#### 8. Progress Indicator
- [ ] Shows current step highlighted
- [ ] Completed steps show checkmark
- [ ] Future steps grayed out
- [ ] Updates on navigation
- [ ] Labels visible on desktop
- [ ] Labels hidden on mobile

#### 9. Navigation
- [ ] Can go forward through steps
- [ ] Can go back through steps
- [ ] Data persists when navigating
- [ ] Can't skip steps
- [ ] Smooth animations

#### 10. Data Persistence
- [ ] Name persists across steps
- [ ] Email persists across steps
- [ ] Goals persist across steps
- [ ] Scorers persist across steps
- [ ] Screenshot persists across steps
- [ ] Data cleared after submission

---

## 🔐 Admin Testing

### Admin Access

#### 1. Admin Trigger
- [ ] Triple-tap bottom-right corner
- [ ] Tap counter resets after 1 second
- [ ] Login modal appears
- [ ] Modal can be dismissed
- [ ] Trigger works on mobile
- [ ] Trigger works on desktop

#### 2. Admin Login
- [ ] Password input visible
- [ ] Password hidden (type="password")
- [ ] Incorrect password shows error
- [ ] Correct password logs in
- [ ] Password: `Fryingpan.420!`
- [ ] Case-sensitive validation
- [ ] "Cancel" button works

#### 3. Admin Panel
- [ ] Dashboard loads
- [ ] Statistics cards visible
- [ ] Total entries correct
- [ ] Average goals calculated
- [ ] Popular scorers shown
- [ ] Entries table populated
- [ ] All columns visible
- [ ] Data sorted by date (newest first)

#### 4. Entries Table
- [ ] ID column shows
- [ ] Name column shows
- [ ] Email column shows
- [ ] Goals column shows
- [ ] Men's scorer column shows
- [ ] Mixed scorer column shows
- [ ] Submitted date formatted
- [ ] "View" button for screenshots

#### 5. CSV Export
- [ ] "Export to CSV" button visible
- [ ] Click downloads file
- [ ] Filename includes date
- [ ] CSV format correct
- [ ] All data included
- [ ] Headers correct
- [ ] Can open in Excel/Sheets

#### 6. Screenshot Viewer
- [ ] "View" button opens modal
- [ ] Image displays correctly
- [ ] Modal can be closed
- [ ] Click outside closes modal
- [ ] User info shown below image
- [ ] Image scales properly

#### 7. Admin Logout
- [ ] "Close" button works
- [ ] Returns to main app
- [ ] Can re-login
- [ ] Data not cached

---

## 📱 Mobile Testing

### Responsive Design

#### 1. Layout (iPhone/Android)
- [ ] Header fits screen
- [ ] No horizontal scroll
- [ ] Cards full width
- [ ] Buttons accessible
- [ ] Text readable
- [ ] Images scale properly

#### 2. Touch Interactions
- [ ] Buttons tap correctly
- [ ] Inputs focus properly
- [ ] Dropdowns work
- [ ] File upload works
- [ ] Triple-tap works
- [ ] Scrolling smooth

#### 3. Portrait Mode
- [ ] All content visible
- [ ] Progress indicator works
- [ ] Forms usable
- [ ] Admin panel scrollable

#### 4. Landscape Mode
- [ ] Layout adjusts
- [ ] No content cut off
- [ ] Still usable

#### 5. Different Devices
- [ ] iPhone (Safari)
- [ ] Android (Chrome)
- [ ] iPad (Safari)
- [ ] Android Tablet (Chrome)

---

## 🌐 Browser Testing

### Desktop Browsers

#### Chrome
- [ ] All features work
- [ ] No console errors
- [ ] Animations smooth
- [ ] File upload works
- [ ] CSV download works

#### Firefox
- [ ] All features work
- [ ] No console errors
- [ ] Animations smooth
- [ ] File upload works
- [ ] CSV download works

#### Safari
- [ ] All features work
- [ ] No console errors
- [ ] Animations smooth
- [ ] File upload works
- [ ] CSV download works

#### Edge
- [ ] All features work
- [ ] No console errors
- [ ] Animations smooth
- [ ] File upload works
- [ ] CSV download works

### Mobile Browsers

#### Safari (iOS)
- [ ] All features work
- [ ] Touch works
- [ ] File upload works
- [ ] No zoom issues

#### Chrome (Android)
- [ ] All features work
- [ ] Touch works
- [ ] File upload works
- [ ] No zoom issues

---

## 🔄 Integration Testing

### End-to-End Flow

#### 1. Complete Submission
- [ ] Start at Step 1
- [ ] Fill all fields
- [ ] Navigate through all steps
- [ ] Upload screenshot
- [ ] Submit successfully
- [ ] See success screen
- [ ] Entry in database

#### 2. Admin Verification
- [ ] Triple-tap to admin
- [ ] Login with password
- [ ] See new entry in table
- [ ] Statistics updated
- [ ] Export CSV includes entry
- [ ] View screenshot works

#### 3. Duplicate Prevention
- [ ] Submit entry with email
- [ ] Try same email again
- [ ] Should be rejected
- [ ] Error message shown
- [ ] Original entry preserved

#### 4. Data Accuracy
- [ ] Submitted data matches input
- [ ] Timestamp correct
- [ ] Screenshot preserved
- [ ] No data corruption

---

## 🚨 Error Testing

### Frontend Errors

#### 1. Network Errors
- [ ] Backend offline
- [ ] Shows error message
- [ ] User can retry
- [ ] No data lost

#### 2. Validation Errors
- [ ] Invalid email format
- [ ] Goals out of range
- [ ] Missing required fields
- [ ] Clear error messages

#### 3. File Upload Errors
- [ ] File too large (>5MB)
- [ ] Wrong file type
- [ ] Corrupted file
- [ ] Error messages shown

### Backend Errors

#### 1. Database Errors
- [ ] Database locked
- [ ] Disk full
- [ ] Graceful error handling

#### 2. Validation Errors
- [ ] Invalid data format
- [ ] Missing required fields
- [ ] Returns 400 Bad Request
- [ ] Error message clear

#### 3. Server Errors
- [ ] 500 errors handled
- [ ] Error logged
- [ ] User sees friendly message

---

## 🎯 Performance Testing

### Load Testing

#### 1. Response Times
- [ ] Health check < 500ms
- [ ] GET entries < 1s
- [ ] POST entry < 2s
- [ ] Statistics < 1s

#### 2. Concurrent Users
- [ ] 10 simultaneous submissions
- [ ] 50 simultaneous submissions
- [ ] No errors
- [ ] No data loss

#### 3. Large Datasets
- [ ] 100+ entries
- [ ] Admin panel loads < 3s
- [ ] CSV export works
- [ ] Table scrollable

### Frontend Performance

#### 1. Page Load
- [ ] Initial load < 2s
- [ ] Assets cached
- [ ] Images optimized
- [ ] Fonts loaded

#### 2. Interactions
- [ ] Button clicks instant
- [ ] Form inputs responsive
- [ ] Animations smooth (60fps)
- [ ] No lag

---

## 🔒 Security Testing

### Input Validation

#### 1. XSS Prevention
- [ ] Script tags escaped
- [ ] HTML entities encoded
- [ ] No code execution

#### 2. SQL Injection
- [ ] Special characters handled
- [ ] Parameterized queries
- [ ] No database errors

#### 3. File Upload
- [ ] File type validated
- [ ] File size limited
- [ ] No executable files

### Authentication

#### 1. Admin Access
- [ ] Password required
- [ ] Wrong password rejected
- [ ] No bypass methods
- [ ] Session timeout (optional)

---

## 📊 Data Testing

### Data Integrity

#### 1. Entry Data
- [ ] All fields saved
- [ ] No data truncation
- [ ] Special characters preserved
- [ ] Timestamps accurate

#### 2. Statistics
- [ ] Total entries correct
- [ ] Average calculated correctly
- [ ] Popular scorers accurate
- [ ] Updates in real-time

#### 3. CSV Export
- [ ] All entries included
- [ ] Data matches database
- [ ] No missing fields
- [ ] Proper formatting

---

## ✅ Pre-Launch Checklist

### Final Verification

- [ ] Backend deployed and healthy
- [ ] Frontend published
- [ ] Environment variables set
- [ ] All tests passed
- [ ] No console errors
- [ ] Mobile tested
- [ ] Admin access works
- [ ] CSV export works
- [ ] QR code generated
- [ ] Email template ready
- [ ] Posters printed
- [ ] Support plan ready
- [ ] Backup plan in place

### Stakeholder Sign-Off

- [ ] Technical team approved
- [ ] Admin team trained
- [ ] Marketing materials ready
- [ ] Launch date confirmed
- [ ] Communication plan ready

---

## 🐛 Known Issues

Document any known issues here:

```
Issue: [Description]
Impact: [Low/Medium/High]
Workaround: [Solution]
Status: [Open/In Progress/Resolved]
```

---

## 📞 Testing Support

### If Tests Fail

1. **Check browser console** for errors
2. **Review backend logs** (Railway)
3. **Test API directly** (Swagger)
4. **Verify environment variables**
5. **Try different browser**
6. **Clear cache and retry**

### Report Issues

Document issues with:
- Browser/device
- Steps to reproduce
- Expected vs actual behavior
- Screenshots/videos
- Console errors

---

## 🎉 Testing Complete!

When all tests pass:
- ✅ System is production-ready
- ✅ Safe to launch
- ✅ Users can submit entries
- ✅ Admin can manage data
- ✅ Everything works as expected

**Good luck with your launch! 🚀**

---

*Corporate Cup 2026 • Testing Checklist • Quality Assurance*
