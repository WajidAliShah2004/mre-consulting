echo ========================================
echo Pushing Backend to GitHub
echo ========================================
echo.

cd server

echo Step 1: Initializing git...
git init

echo Step 2: Adding files (excluding .env)...
git add .

echo Step 3: Committing...
git commit -m "Backend ready for Railway deployment"

echo Step 4: Setting main branch...
git branch -M main

echo Step 5: Adding remote...
git remote add origin https://github.com/WajidAliShah2004/MRECAI.git

echo Step 6: Pushing to GitHub...
git push -u origin main --force

echo.
echo ========================================
echo Done! Backend pushed to GitHub
echo ========================================
echo.
echo Next: Deploy on Railway
echo 1. Go to https://railway.app
echo 2. New Project -^> Deploy from GitHub
echo 3. Select MRECAI repo
echo.
pause
