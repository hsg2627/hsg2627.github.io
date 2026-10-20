@echo off
chcp 65001 > nul
title Game Trả Bài: Trộm Trứng Gà & Bị UFO Túm
echo ========================================================
echo  ĐANG KHỞI ĐỘNG GAME TRẢ BÀI: TRỘM TRỨNG & UFO...
echo ========================================================
echo.
python antigravity_egg_ufo_game.py
if errorlevel 1 (
    echo.
    echo [LỖI] Không thể chạy game. Đang cài đặt thư viện pygame...
    pip install pygame
    echo Đang thử khởi động lại...
    python antigravity_egg_ufo_game.py
)
pause
