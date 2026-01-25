from pydantic import BaseModel
from typing import Optional, List
from datetime import time
from preferences.models import EmailFrequency
from opportunities.constants import OpportunityType

class UserPreferenceBase(BaseModel):
    email_frequency: Optional[EmailFrequency] = EmailFrequency.NONE
    preferred_time: Optional[time] = None
    preferred_days: Optional[List[str]] = [] # e.g. ["Mon", "Wed"]
    reminder_types: Optional[List[OpportunityType]] = []
    days_before_deadline: Optional[int] = 3

class UserPreferenceUpdate(UserPreferenceBase):
    pass

class UserPreferenceResponse(UserPreferenceBase):
    user_id: int

    class Config:
        from_attributes = True
