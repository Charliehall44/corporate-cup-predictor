Write-Host "=== Corporate Cup Predictor: Frontend Build + Backend Deploy Script ===" -ForegroundColor Cyan

# Step 1: Build Frontend
Write-Host "`n---> Installing frontend dependencies..." -ForegroundColor Yellow
cd frontend
npm install

Write-Host "`n---> Building frontend..." -ForegroundColor Yellow
npm run build

# Step 2: Copy Build to Backend
cd ..
$backendRoot = "backend/wwwroot"

Write-Host "`n---> Cleaning old backend wwwroot..." -ForegroundColor Yellow
if (Test-Path $backendRoot) {
    Remove-Item $backendRoot -Recurse -Force
}

Write-Host "---> Creating backend wwwroot..." -ForegroundColor Yellow
New-Item -ItemType Directory -Force -Path $backendRoot | Out-Null

Write-Host "---> Copying frontend build into backend/wwwroot..." -ForegroundColor Yellow
Copy-Item -Path "frontend/dist/*" -Destination $backendRoot -Recurse -Force

# Step 3: Commit + Push
Write-Host "`n---> Committing changes..." -ForegroundColor Yellow
git add backend/wwwroot
git commit -m "Automated: build frontend + publish to backend wwwroot"
git push

Write-Host "`nDone! Your frontend build has been deployed to Railway via backend." -ForegroundColor Green
