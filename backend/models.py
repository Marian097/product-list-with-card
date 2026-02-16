from sqlalchemy.orm import Mapped, mapped_column
from sqlalchemy import String, Integer
from db import Base


class User(Base):
    __tablename__ = "users"
    id:Mapped[int] = mapped_column(Integer, primary_key = True)
    email:Mapped[str] = mapped_column(String, unique = True,index = True, nullable = False)
    name:Mapped[str] = mapped_column(String(100), nullable = False)