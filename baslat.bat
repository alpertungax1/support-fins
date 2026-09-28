@echo off
chcp 65001 >nul
echo ========================================================
echo Support Fins Yerel Sunucusu Baslatiliyor...
echo Tarayicinizda su adresi acin: http://localhost:8731/
echo Kapatmak icin bu pencereyi kapatabilir veya Ctrl+C yapabilirsiniz.
echo ========================================================
.\.venv\Scripts\python.exe dev-server.py --host 0.0.0.0
pause
