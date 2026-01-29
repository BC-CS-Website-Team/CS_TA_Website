from sqlalchemy import Column, Integer, String, Boolean, Time, ForeignKey, Enum as SAEnum
from sqlalchemy.orm import relationship
from database import Base
import enum

class EmailFrequency(str, enum.Enum):
    DAILY = "daily"
    WEEKLY = "weekly"
    NONE = "none"

class UserPreference(Base):
    __tablename__ = "user_preferences"

    # We use user_id as Primary Key for 1-to-1 simplicity
    user_id = Column(Integer, ForeignKey("users.id"), primary_key=True)
    
    email_frequency = Column(SAEnum(EmailFrequency), default=EmailFrequency.NONE)
    preferred_time = Column(Time, nullable=True) # UTC time
    
    # Stored as comma-separated strings for simplicity in SQLite/Postgres compatibility without JSON types dependencies
    # e.g. "Mon,Tue"
    preferred_days = Column(String, nullable=True) 
    
    # e.g. "internship,job"
    reminder_types = Column(String, nullable=True)
    
    days_before_deadline = Column(Integer, default=3)

    user = relationship("User", back_populates="preferences")
