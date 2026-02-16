from fastapi import FastAPI, Depends, HTTPException
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select
from contextlib import asynccontextmanager

from db import engine, Base, get_db
from models import User
from schemas import UserCreate, UserOut


app = FastAPI()


@asynccontextmanager
async def lifespan():
    async with engine.begin() as conn:
        await conn.run_sync(Base.metadata.create_all)
    yield
    await engine.dispose()


@app.get("/api/health")
def health():
    return {"status": "ok", "message": "Backendul merge"}

@app.get("/api/users", response_model=list[UserOut])
async def list_users(db: AsyncSession = Depends(get_db)):
    res = await db.execute(select(User).order_by(User.id))
    return list(res.scalars().all())

@app.post("/api/users", response_model=UserOut, status_code=201)
async def create_user(payload: UserCreate, db: AsyncSession = Depends(get_db)):
    res = await db.execute(select(User).where(User.email == payload.email))
    if res.scalar_one_or_none():
        raise HTTPException(status_code=409, detail="Email already exists")

    user = User(email=payload.email, name=payload.name)
    db.add(user)
    await db.commit()
    await db.refresh(user)
    return user
