from pydantic_settings import BaseSettings
from typing import Optional

class Settings(BaseSettings):
    # URL для подключения к базе данных PostgreSQL со значением по умолчанию
    DATABASE_URL: str = "postgresql://admin:admin123@localhost:5432/surveillance_platform"
    # Секретный ключ для подписи JWT токенов со значением по умолчанию
    SECRET_KEY: str = "your-secret-key-here-change-in-production"
    # Алгоритм шифрования для JWT токенов (по умолчанию HS256)
    ALGORITHM: str = "HS256"
    # Время жизни access токена в минутах (по умолчанию 30 минут)
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 30
    
    class Config:
        env_file = ".env"

settings = Settings()