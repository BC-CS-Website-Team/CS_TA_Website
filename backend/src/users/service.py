from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.future import select
from sqlalchemy.orm import selectinload
from sqlalchemy import func
from auth.models import User, Role


async def get_users_by_role(db: AsyncSession, role_name: str) -> list[User]:
    """
    Fetch all users with a specific role.
    
    Args:
        db: Async database session
        role_name: Name of the role to filter by (case-insensitive)
        
    Returns:
        List of User objects with the specified role, with roles eagerly loaded
    """
    # Query users who have the specified role (case-insensitive)
    # Join User -> user_roles -> Role, filter by role name
    # Use eager loading to avoid N+1 queries
    result = await db.execute(
        select(User)
        .join(User.roles)
        .where(func.lower(Role.name) == role_name.lower())
        .options(selectinload(User.roles))
    )
    
    users = result.scalars().all()
    return list(users)
