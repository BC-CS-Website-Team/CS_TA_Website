from pydantic import BaseModel, Field
from typing import Optional, Dict, Any

class SlackEvent(BaseModel):
    type: str
    user: Optional[str] = None
    text: Optional[str] = None
    channel: Optional[str] = None
    ts: Optional[str] = None

class SlackChallenge(BaseModel):
    token: Optional[str] = None
    challenge: Optional[str] = None
    type: str

class SlackEventWrapper(BaseModel):
    token: Optional[str] = None
    team_id: Optional[str] = None
    api_app_id: Optional[str] = None
    event: Optional[SlackEvent] = None
    type: str
    event_id: Optional[str] = None
    event_time: Optional[int] = None
    challenge: Optional[str] = None # For URL verification
