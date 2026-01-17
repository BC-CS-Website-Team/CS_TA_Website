from sqlalchemy import Column, Integer, String, Boolean, DateTime, func
from database import Base


class User(Base):
    __tablename__ = "users"
    id = Column(Integer, primary_key=True, index=True)
    email = Column(
        String, unique=True, index=True, nullable=False
    )  # index I made true as we will be using it for lookups!
    hashed_password = Column(String, nullable=False)
    is_active = Column(Boolean, default=True)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(
        DateTime(timezone=True), server_default=func.now(), onupdate=func.now()
    )
    is_superuser = Column(Boolean, default=False)
    # major = Column(String, nullable=True)
