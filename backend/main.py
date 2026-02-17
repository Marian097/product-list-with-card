from datetime import datetime
from typing import Optional

from fastapi import FastAPI, Depends
from pydantic import BaseModel, Field
from pydantic import BaseModel, EmailStr

from sqlalchemy import Integer, String, select, desc
from sqlalchemy.orm import DeclarativeBase, Mapped, mapped_column
from sqlalchemy.ext.asyncio import create_async_engine, AsyncSession, async_sessionmaker

# SQLite async URL (fișier local)
DATABASE_URL = "sqlite+aiosqlite:///./app.db"

engine = create_async_engine(DATABASE_URL, echo=False)
SessionLocal = async_sessionmaker(engine, expire_on_commit=False, class_=AsyncSession)

class Base(DeclarativeBase):
    pass


class CartItem(BaseModel):
    product_id: str
    name:str
    quantity: int = Field(gt = 0)
    price: float = Field(gt = 0)

# -------- MODEL (tabela orders) --------
class Order(Base):
    __tablename__ = "orders"
    id:Mapped[int] = mapped_column(Integer, primary_key = True)
    name:Mapped[str] = mapped_column(String(100), nullable = False)
    adress:Mapped[str] = mapped_column(String(200), nullable = False)
    city:Mapped[str] = mapped_column(String(100), nullable = False)
    country:Mapped[str] = mapped_column(String(100), nullable = False)
    phone:Mapped[str] = mapped_column(String(10), nullable = False)
    email:Mapped[str] = mapped_column(String, unique = False, index = True, nullable = False)
    note:Mapped[str] = mapped_column(String(300))
    items: list[CartItem] = Field(min_length=1)


# -------- SCHEMAS (input/output) --------
class OrderCreate(BaseModel):
    name:str
    adress:str
    city:str
    country:str
    phone:str
    email: EmailStr
    note: Optional[str] = None
    quantity:Integer
    items: list[CartItem] = Field(min_length=1)
    
    
    
class OrderOut(BaseModel):
    id: int
    name:str
    adress:str
    city:str
    country:str
    phone:str
    email: EmailStr
    note: Optional[str] = None
    quantity:Integer
    items: list[CartItem] = Field(min_length=1)
    
    class Config:
        from_attributes = True
# -------- FASTAPI --------
app = FastAPI(title="Restaurant Orders API (SQLite)")

async def get_db():
    async with SessionLocal() as session:
        yield session

@app.on_event("startup")
async def startup():
    # creează tabelele dacă nu există
    async with engine.begin() as conn:
        await conn.run_sync(Base.metadata.create_all)

@app.get("/api/health")
def health():
    return {"status": "ok"}

@app.post("/api/orders", response_model=OrderOut, status_code=201)
async def create_order(payload: OrderCreate, db: AsyncSession = Depends(get_db)):
    order = Order(
        name=payload.name,
        address=payload.adress,
        city = payload.city,
        country = payload.country,
        phone=payload.phone,
        email=payload.email,
        notes=payload.note,
        status="new",
    )
    db.add(order)
    await db.commit()
    await db.refresh(order)
    return order

@app.get("/api/orders", response_model=list[OrderOut])
async def list_orders(limit: int = 50, db: AsyncSession = Depends(get_db)):
    res = await db.execute(select(Order).order_by(desc(Order.id)).limit(limit))
    return list(res.scalars().all())
