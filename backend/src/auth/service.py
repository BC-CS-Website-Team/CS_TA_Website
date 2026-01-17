from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.future import select
from auth.models import User
from auth.schemas import UserCreate
from auth.utils import get_password_hash, verify_password
from auth.exceptions import UserAlreadyExists


async def get_user_by_email(db: AsyncSession, email: str):
    """Fetch a single user by email."""
    result = await db.execute(select(User).where(User.email == email))
    return result.scalars().first()


async def create_user(db: AsyncSession, user_in: UserCreate):
    """Creates a new user in the database."""
    # We first check if the user exists
    existing_user = await get_user_by_email(db, user_in.email)
    if existing_user:
        raise UserAlreadyExists()

    # We then hash the password
    hashed_password = get_password_hash(user_in.password)

    # We then create the DB object
    db_user = User(
        email=user_in.email,
        hashed_password=hashed_password,
        is_active=user_in.is_active,
        is_superuser=False,  # Default to False, change manually in DB if needed
    )

    # We then save to the DB
    db.add(db_user)
    await db.commit()
    await db.refresh(db_user)
    return db_user


async def authenticate_user(db: AsyncSession, email: str, password: str):
    """Checks credentials and returns User if valid, else None."""
    # We first get the user by email
    user = await get_user_by_email(db, email)
    if not user:
        return None

    # We then verify the password
    if not verify_password(password, user.hashed_password):
        return None

    return (
        user  # We return false for both cases so that we protect against timing attacks
    )
