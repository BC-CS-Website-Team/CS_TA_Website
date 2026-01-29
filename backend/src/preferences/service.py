from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.future import select
from preferences.models import UserPreference
from preferences.schemas import UserPreferenceUpdate

async def get_user_preferences(db: AsyncSession, user_id: int) -> UserPreference:
    result = await db.execute(select(UserPreference).where(UserPreference.user_id == user_id))
    pref = result.scalar_one_or_none()
    
    if not pref:
        # Create default if not exists
        pref = UserPreference(user_id=user_id)
        db.add(pref)
        await db.commit()
        await db.refresh(pref)
        
    return pref

async def update_user_preferences(db: AsyncSession, user_id: int, pref_in: UserPreferenceUpdate) -> UserPreference:
    pref = await get_user_preferences(db, user_id)
    
    data = pref_in.model_dump(exclude_unset=True)
    
    # Handle list to string conversion
    if "preferred_days" in data:
        data["preferred_days"] = ",".join(data["preferred_days"]) if data["preferred_days"] else ""
        
    if "reminder_types" in data:
         # Convert Enum list to comma string
        types = [t.value if hasattr(t, 'value') else str(t) for t in data["reminder_types"]]
        data["reminder_types"] = ",".join(types) if types else ""

    for field, value in data.items():
        setattr(pref, field, value)
        
    await db.commit()
    await db.refresh(pref)
    return pref
