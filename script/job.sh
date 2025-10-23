#!/bin/bash
set -e  # ❗ остановить выполнение при любой ошибке

echo "🚀 Начинаю деплой..."

cd /root/pet_restaurants
git pull
docker compose build
docker compose up -d

echo "✅ Деплой завершён успешно"