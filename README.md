# Video Surveillance Platform (VSVP)

Платформа, которая объединяет:
- **специалистов** по установке видеонаблюдения,
- **клиентов**, которым нужны услуги,
- **администратора** для модерации и обратной связи.

## Уровни доступа
- `ADMIN` — управление платформой и обратная связь специалистам/клиентам.
- `SPECIALIST` — поиск клиентов на карте, просмотр клиентов списком.
- `CLIENT` — поиск специалистов на карте, просмотр специалистов списком.

## Технологический стек

### Frontend
- React.js
- Redux
- Webpack
- TypeScript
- Yandex Maps API (интерактивная карта)

### Backend
- Python (`backend/user-service`) — API пользователей/клиентов/специалистов.
- Java (`backend/auth-service`, `backend/map-service`) — высоконагруженные сервисы.
- Node.js (`backend/realtime-service`) — real-time события/уведомления.
- Go (`backend/feedback-service`) — микросервис обратной связи.

### Data layer
- PostgreSQL
- Docker Compose

## Быстрый старт

### Только база данных
```bash
cd database
docker compose -f docker-compose.db.yml up -d
```

### Вся система
```bash
cd backend/shared
cp .env.example .env
docker compose up -d --build
```

### Если Docker Hub недоступен (proxy/DNS)
1. Укажите зеркало или локальный образ Postgres в `backend/shared/.env` через `POSTGRES_IMAGE`.
2. Проверьте резолв Docker Registry:
```bash
docker pull ${POSTGRES_IMAGE:-postgres:16}
```
3. При корпоративной сети настройте proxy/DNS в Docker Desktop.

## Структура проекта
Актуальная структура хранится в `docs/structure.txt`.
