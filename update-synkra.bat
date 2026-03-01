@echo off
cd C:\apps\synkra
git pull origin claude/synkra-landing-page-ZM6Sd
npm run build
pm2 restart synkra
pm2 save
