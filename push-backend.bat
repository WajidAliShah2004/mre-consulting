@echo off
echo ========================================
echo Pushing Backend to GitHub
echo ========================================
echo.

cd ..\server

echo Initializing git repository...
git init

echo Adding all files...
git add .

echo Committing files...
git commit -m "Backend ready for Railway deployment"

echo Setting main branch...
git branch -M main

echo Adding remote repository...
git remote add origin https://github.com/WajidAliShah2004/MRECAI.git

echo Pushing to GitHub...
git push -u origin main

echo.
echo ========================================
echo ? Backend pushed to GitHub!
echo ========================================
echo.
echo Next steps:
echo 1. Go to https://railway.app
echo 2. Click 'New Project' -^> 'Deploy from GitHub repo'
echo 3. Select 'MRECAI' repository
echo 4. Add environment variables
echo 5. Get your Railway URL
echo.
pause
