
from datetime import timedelta
from typing import Annotated
from fastapi import APIRouter, Depends, HTTPException, status
from fastapi.security import OAuth2PasswordRequestForm
from sqlalchemy.ext.asyncio import AsyncSession

from database import get_db
from config import settings
from auth.schemas import Token, UserCreate, UserResponse
from auth.service import authenticate_user, create_user
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
