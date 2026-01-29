from sqlalchemy import Column, Integer, String, Boolean, DateTime, func, ForeignKey, Enum as SAEnum
from sqlalchemy.orm import relationship
from database import Base
from opportunities.constants import OpportunityType

class Opportunity(Base):
    __tablename__ = "opportunities"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, nullable=True)
    date_added = Column(DateTime(timezone=True), server_default=func.now(), nullable=True)
    deadline = Column(DateTime(timezone=True), nullable=True)
    opportunity_type = Column(SAEnum(OpportunityType), nullable=True)
    in_house = Column(Boolean, default=False, nullable=True)
    opportunity_image = Column(String, nullable=True)
    opportunity_description = Column(String, nullable=True)
    link = Column(String, nullable=True)
    source = Column(String, default="web", nullable=True)

    # Foreign Key to User
    opportunity_uploader_id = Column(Integer, ForeignKey("users.id"), nullable=True)
    
    # Relationship
    opportunity_uploader = relationship("User", backref="opportunities")
