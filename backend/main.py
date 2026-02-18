from datetime import datetime
from typing import Optional, List

from fastapi import FastAPI, Depends
from pydantic import BaseModel, Field, EmailStr

from sqlalchemy import Integer, String, select, desc
from sqlalchemy.orm import DeclarativeBase, Mapped, mapped_column
from sqlalchemy.ext.asyncio import create_async_engine, AsyncSession, async_sessionmaker
from sqlalchemy.dialects.sqlite import JSON  # <- pentru SQLite JSON
import uuid

DATABASE_URL = "sqlite+aiosqlite:///./test.db"

engine = create_async_engine(DATABASE_URL, echo=False)
SessionLocal = async_sessionmaker(engine, expire_on_commit=False, class_=AsyncSession)

class Base(DeclarativeBase):
    pass

class CartItem(BaseModel):
    product_id: str
    name: str
    quantity: int = Field(gt=0)
    price: float = Field(gt=0)

# -------- MODEL (tabela orders) --------
class Order(Base):
    __tablename__ = "orders"

    id: Mapped[str] = mapped_column(String(36), primary_key=True, default=lambda: str(uuid.uuid4()))

    name: Mapped[str] = mapped_column(String(100), nullable=False)
    street: Mapped[str] = mapped_column(String(200), nullable=False)
    number: Mapped[str] = mapped_column(String(20), nullable=False)
    apartament: Mapped[str] = mapped_column(String(20), nullable=False)
    floor: Mapped[str] = mapped_column(String(20), nullable=False)
    scale: Mapped[str] = mapped_column(String(20), nullable=False)
    city: Mapped[str] = mapped_column(String(100), nullable=False)
    country: Mapped[str] = mapped_column(String(100), nullable=False)
    phone: Mapped[str] = mapped_column(String(20), nullable=False)
    email: Mapped[str] = mapped_column(String(255), index=True, nullable=False)
    note: Mapped[Optional[str]] = mapped_column(String(300), nullable=True)

    # stocăm lista de item-uri ca JSON în DB
    items: Mapped[list] = mapped_column(JSON, nullable=False)

# -------- SCHEMAS (input/output) --------
class OrderCreate(BaseModel):
    name: str
    street: str
    number: str
    apartament: str
    floor: str
    scale: str
    city: str
    country: str
    phone: str
    email: EmailStr
    note: Optional[str] = None
    items: List[CartItem] = Field(min_length=1)

class OrderOut(BaseModel):
    id: str
    name: str
    street: str
    number: str
    apartament: str
    floor: str
    scale: str
    city: str
    country: str
    phone: str
    email: EmailStr
    note: Optional[str] = None
    items: List[CartItem]

    model_config = {"from_attributes": True}

# -------- FASTAPI --------
app = FastAPI(title="Restaurant Orders API (SQLite)")

async def get_db():
    async with SessionLocal() as session:
        yield session

@app.on_event("startup")
async def startup():
    async with engine.begin() as conn:
        await conn.run_sync(Base.metadata.create_all)

@app.get("/api/health")
def health():
    return {"status": "ok"}

@app.post("/api/orders", response_model=OrderOut, status_code=201)
async def create_order(payload: OrderCreate, db: AsyncSession = Depends(get_db)):
    order = Order(
        name=payload.name,
        street=payload.street,
        number=payload.number,
        apartament=payload.apartament,
        floor=payload.floor,
        scale=payload.scale,
        city=payload.city,
        country=payload.country,
        phone=payload.phone,
        email=str(payload.email),
        note=payload.note,
        items=[item.model_dump() for item in payload.items],  # Pydantic -> dict pentru JSON
    )
    db.add(order)
    await db.commit()
    await db.refresh(order)
    return order

@app.get("/api/orders", response_model=list[OrderOut])
async def list_orders(limit: int = 50, db: AsyncSession = Depends(get_db)):
    res = await db.execute(select(Order).order_by(desc(Order.id)).limit(limit))
    return list(res.scalars().all())
