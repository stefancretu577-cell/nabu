@echo off
rem Porneste Nabu pe http://localhost:8765 (camera merge doar pe localhost sau https).
cd /d "%~dp0"
start "" cmd /c "timeout /t 2 >nul & start http://localhost:8765"
python -m http.server 8765
