# Video Surveillance Platform

Платформа для соединения специалистов по установке видеонаблюдения и клиентов.

## Технологии

### Frontend
- React.js с TypeScript
- Redux для управления состоянием
- Webpack для сборки

### Backend
- Python (FastAPI) - User Service
- Java - Auth Service & Map Service  
- Node.js - Real-time Service & API Gateway
- Go - Feedback Service

### База данных
- PostgreSQL
- Docker Compose

## Быстрый старт

1. Клонируйте репозиторий
2. Запустите базу данных: `cd database && docker-compose -f docker-compose.db.yml up -d`
3. Проверьте доступность БД: `http://localhost:8080` (pgAdmin)

## Структура проекта
video-surveillance-platform/
├── frontend/ # React приложение
├── backend/ # Микросервисы
├── database/ # Миграции и конфигурация БД
└── docs/ # Документация

## Разработка

Следуйте инструкциям в папках каждого сервиса для локальной разработки.
