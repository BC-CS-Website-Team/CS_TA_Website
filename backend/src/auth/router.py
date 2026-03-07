
from datetime import timedelta
from typing import Annotated
from fastapi import APIRouter, Depends, HTTPException, status
from fastapi.security import OAuth2PasswordRequestForm
from sqlalchemy.ext.asyncio import AsyncSession

from database import get_db
from config import settings
from auth.schemas import Token, UserCreate, UserResponse, UserUpdate
from auth.service import authenticate_user, create_user, update_user
from auth.dependencies import get_current_active_user, get_current_superuser
from auth.models import User
from auth.exceptions import UserAlreadyExists

router = APIRouter(
    prefix="/auth",
    tags=["auth"],
)

@router.get("/admin-only")
async def admin_only_test(current_user: Annotated[User, Depends(get_current_superuser)]):
    return {"message": "Welcome, Almighty Admin!", "user": current_user.email}

@router.post("/register", response_model=UserResponse)
async def register(user_in: UserCreate, db: Annotated[AsyncSession, Depends(get_db)]):
    try:
        user = await create_user(db, user_in)
        return user
    except UserAlreadyExists:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Email already registered",
        )

@router.post("/token", response_model=Token)
async def login_for_access_token(
    form_data: Annotated[OAuth2PasswordRequestForm, Depends()],
    db: Annotated[AsyncSession, Depends(get_db)],
):
    try:
        user = await authenticate_user(db, form_data.username, form_data.password)
    except Exception as e:
         # Handle potential DB errors gracefully
         raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Internal Server Error during authentication",
        )

    if not user:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect username or password",
            headers={"WWW-Authenticate": "Bearer"},
        )
    
    from auth.utils import create_access_token # Import here to avoid circular dependencies if any
    
    access_token_expires = timedelta(minutes=settings.ACCESS_TOKEN_EXPIRE_MINUTES)
    access_token = create_access_token(
        data={"sub": user.email}, expires_delta=access_token_expires
    )
    return Token(access_token=access_token, token_type="bearer")

@router.get("/me", response_model=UserResponse)
async def read_users_me(
    current_user: Annotated[User, Depends(get_current_active_user)],
):
    return current_user

@router.patch("/me", response_model=UserResponse)
async def update_users_me(
    user_update: UserUpdate,
    current_user: Annotated[User, Depends(get_current_active_user)],
    db: Annotated[AsyncSession, Depends(get_db)],
):
    """Update current user's profile."""
    updated_user = await update_user(db, current_user.id, user_update)
    return updated_user

# --- Role Management Endpoints (Admin Only) ---
from auth.schemas import RoleCreate, RoleResponse, UserRoleAssign, UserAdminUpdate
from auth.service import create_role, get_all_roles, get_all_users_with_roles, assign_roles_to_user, set_user_admin_status

@router.post("/roles", response_model=RoleResponse)
async def create_new_role(
    role_in: RoleCreate,
    current_user: Annotated[User, Depends(get_current_superuser)],
    db: Annotated[AsyncSession, Depends(get_db)],
):
    """Create a new role (Admin only)."""
    return await create_role(db, role_in)

@router.get("/roles", response_model=list[RoleResponse])
async def read_roles(
    current_user: Annotated[User, Depends(get_current_superuser)],
    db: Annotated[AsyncSession, Depends(get_db)],
):
    """Get all roles (Admin only)."""
    return await get_all_roles(db)

@router.get("/users", response_model=list[UserResponse])
async def read_all_users(
    current_user: Annotated[User, Depends(get_current_superuser)],
    db: Annotated[AsyncSession, Depends(get_db)],
):
    """Get all users (Admin only)."""
    return await get_all_users_with_roles(db)

@router.post("/users/{user_id}/roles", response_model=UserResponse)
async def assign_user_roles(
    user_id: int,
    role_data: UserRoleAssign,
    current_user: Annotated[User, Depends(get_current_superuser)],
    db: Annotated[AsyncSession, Depends(get_db)],
):
    """Assign roles to a user (Admin only)."""
    user = await assign_roles_to_user(db, user_id, role_data.role_ids)
    if not user:
         raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="User not found",
        )
    return user

@router.patch("/users/{user_id}/admin", response_model=UserResponse)
async def update_user_admin_status(
    user_id: int,
    admin_data: UserAdminUpdate,
    current_user: Annotated[User, Depends(get_current_superuser)],
    db: Annotated[AsyncSession, Depends(get_db)],
):
    """Promote or demote a user to/from admin (Admin only)."""
    user = await set_user_admin_status(db, user_id, admin_data.is_superuser)
    if not user:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="User not found",
        )
    return user

# --- Profile Picture Upload ---
from fastapi import File, UploadFile
import shutil
from pathlib import Path
import uuid
from auth.service import update_user_profile_picture

@router.post("/me/profile-picture", response_model=UserResponse)
async def upload_profile_picture(
    current_user: Annotated[User, Depends(get_current_active_user)],
    db: Annotated[AsyncSession, Depends(get_db)],
    file: UploadFile = File(...),
):
    """Upload a profile picture for the current user."""
    # simple validation
    if not file.content_type.startswith("image/"):
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="File must be an image",
        )
    
    # Create unique filename
    file_extension = Path(file.filename).suffix
    unique_filename = f"{current_user.id}_{uuid.uuid4()}{file_extension}"
    file_path = f"static/profile_pictures/{unique_filename}"
    
    # Save file
    # NOTE: 
    # this should be changed to upload to S3 or compatible object storage. I have to decide for sure if db will be on school server
    try:
        with open(file_path, "wb") as buffer:
            shutil.copyfileobj(file.file, buffer)
    except Exception as e:
         raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Could not save file: {e}",
        )
        
    # Update DB - store the URL path (relative to backend url)
    # The frontend will prepend the backend URL.
    db_path = f"/static/profile_pictures/{unique_filename}"
    return await update_user_profile_picture(db, current_user.id, db_path)
