from typing import Annotated
from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.exc import SQLAlchemyError

from database import get_db
from auth.schemas import UserResponse
from users.service import get_users_by_role


router = APIRouter(
    prefix="/users",
    tags=["users"],
)


@router.get("/by-role/{role_name}", response_model=list[UserResponse])
async def get_users_by_role_endpoint(
    role_name: str,
    db: Annotated[AsyncSession, Depends(get_db)],
):
    """
    Get all users with a specific role.
    
    This is a public endpoint (no authentication required) that returns users
    filtered by role name. It's generic and works with any role (Alumni, TA, 
    Programmer, etc.).
    
    Args:
        role_name: The role to filter by (e.g., "Alumni", "TA", "Programmer")
        db: Database session
        
    Returns:
        List of users with the specified role
        
    Raises:
        HTTPException: 500 if database error occurs
    """
    try:
        users = await get_users_by_role(db, role_name)
        return users
    except SQLAlchemyError as e:
        # Log the error server-side (in production, use proper logging)
        print(f"Database error fetching users by role '{role_name}': {e}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="An error occurred while fetching user data"
        )
