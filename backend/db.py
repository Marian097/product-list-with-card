from sqlalchemy.ext.asyncio import create_async_engine, async_sessionmaker, AsyncSession
from sqlalchemy.orm import DeclarativeBase
from settings import settings


engine = create_async_engine(settings.DATABASE_URL, echo = False)

from sqlalchemy.engine.url import make_url

print("ENGINE URL =", make_url(settings.DATABASE_URL).render_as_string(hide_password=False))


SessionLocal = async_sessionmaker(engine, expire_on_commit = False, class_=AsyncSession)


class Base(DeclarativeBase):
    pass

async def get_db():
    async with SessionLocal() as session:
        yield session