from pydantic import BaseModel
from datetime import datetime
from typing import Optional
from opportunities.constants import OpportunityType

class OpportunityBase(BaseModel):
    name: Optional[str] = None
    deadline: Optional[datetime] = None
    opportunity_type: Optional[OpportunityType] = None
    in_house: Optional[bool] = False
    opportunity_image: Optional[str] = None
    opportunity_description: Optional[str] = None

class OpportunityCreate(OpportunityBase):
    pass

class OpportunityUpdate(OpportunityBase):
    pass

class OpportunityResponse(OpportunityBase):
    id: int
    date_added: Optional[datetime] = None
    opportunity_uploader_id: Optional[int] = None
    source: Optional[str] = "web"

    class Config:
        from_attributes = True
