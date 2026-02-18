from pathlib import Path
from pydantic_settings import BaseSettings
from pydantic import ConfigDict

BASE_DIR = Path(__file__).resolve().parent

class Settings(BaseSettings):
    DATABASE_URL: str

    model_config = ConfigDict(
        env_file=BASE_DIR / ".env",
        extra="ignore"
    )

settings = Settings()
