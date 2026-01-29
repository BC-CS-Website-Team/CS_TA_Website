from typing import Annotated, List, Optional
from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.ext.asyncio import AsyncSession
from database import get_db
from auth.models import User
from auth.dependencies import get_current_active_user
from preferences.schemas import UserPreferenceResponse, UserPreferenceUpdate
from preferences.service import get_user_preferences, update_user_preferences
from opportunities.constants import OpportunityType

router = APIRouter(
    prefix="/preferences",
    tags=["preferences"],
)

def parse_preference_response(pref) -> UserPreferenceResponse:
    # Convert DB CSV strings back to lists for Pydantic
    pref_days = pref.preferred_days.split(",") if pref.preferred_days else []
    
    rem_types = []
    if pref.reminder_types:
        # Filter empty strings and convert back to Enum
        raw_types = [t for t in pref.reminder_types.split(",") if t]
        # Safely map back to Enum, ignoring invalid ones if schema changed
        for rt in raw_types:
            try:
                rem_types.append(OpportunityType(rt))
            except ValueError:
                pass

    return UserPreferenceResponse(
        user_id=pref.user_id,
        email_frequency=pref.email_frequency,
        preferred_time=pref.preferred_time,
        preferred_days=pref_days,
        reminder_types=rem_types,
        days_before_deadline=pref.days_before_deadline
    )

@router.get("/me", response_model=UserPreferenceResponse)
async def read_my_preferences(
    current_user: Annotated[User, Depends(get_current_active_user)],
    db: Annotated[AsyncSession, Depends(get_db)],
):
    """Get current user's preferences."""
    pref = await get_user_preferences(db, current_user.id)
    return parse_preference_response(pref)

@router.put("/me", response_model=UserPreferenceResponse)
async def update_my_preferences(
    pref_in: UserPreferenceUpdate,
    current_user: Annotated[User, Depends(get_current_active_user)],
    db: Annotated[AsyncSession, Depends(get_db)],
):
    """Update current user's preferences."""
    pref = await update_user_preferences(db, current_user.id, pref_in)
    return parse_preference_response(pref)
