from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from .database.connection import create_tables
from .routes import users, specialists, clients  # Убедимся что clients импортирован
from .config import settings

# Создаем таблицы при запуске
create_tables()

app = FastAPI(
    title="User Service - Video Surveillance Platform",
    description="Микросервис для управления пользователями, специалистами и клиентами",
    version="1.0.0"
)

# Настройка CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # React app
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Подключаем все роуты
app.include_router(users.router, prefix="/api/v1")
app.include_router(specialists.router, prefix="/api/v1")
app.include_router(clients.router, prefix="/api/v1")  # Добавляем роуты клиентов

@app.get("/")
def read_root():
    return {"message": "User Service is running", "version": "1.0.0"}

@app.get("/health")
def health_check():
    return {"status": "healthy", "service": "user-service"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)