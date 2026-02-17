from pathlib import Path
from pydantic_settings import BaseSettings

BASE_DIR = Path(__file__).resolve().parent

class Settings(BaseSettings):
    DATABASE_URL: str

    class Config:
        env_file = BASE_DIR / ".env" 
        extra = "ignore"

settings = Settings()
