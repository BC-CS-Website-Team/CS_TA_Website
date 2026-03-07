from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.future import select
from sqlalchemy.orm import selectinload
from auth.models import User, Role
from auth.schemas import UserCreate, RoleCreate, UserUpdate
from auth.utils import get_password_hash, verify_password
from auth.exceptions import UserAlreadyExists


async def get_user_by_email(db: AsyncSession, email: str):
    """Fetch a single user by email."""
    result = await db.execute(select(User).where(User.email == email).options(selectinload(User.roles)))
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
        first_name=user_in.first_name,
        last_name=user_in.last_name,
    )

    # We then save to the DB
    db.add(db_user)
    await db.commit()
    # Reload with roles to prevent MissingGreenlet error
    result = await db.execute(
        select(User)
        .options(selectinload(User.roles))
        .where(User.id == db_user.id)
    )
    return result.scalar_one()


async def authenticate_user(db: AsyncSession, email: str, password: str):
    """Checks credentials and returns User if valid, else None."""
    # We first get the user by email
    # Check if the user exists and eagerly load roles
    result = await db.execute(select(User).where(User.email == email).options(selectinload(User.roles)))
    user = result.scalars().first()
    
    if not user:
        return None

    # We then verify the password
    if not verify_password(password, user.hashed_password):
        return None

    return (
        user  # We return false for both cases so that we protect against timing attacks
    )

async def create_role(db: AsyncSession, role_in: RoleCreate):
    """Creates a new role."""
    role = Role(name=role_in.name)
    db.add(role)
    await db.commit()
    await db.refresh(role)
    return role

async def get_all_roles(db: AsyncSession):
    """Returns all roles."""
    result = await db.execute(select(Role))
    return result.scalars().all()

async def get_all_users_with_roles(db: AsyncSession):
    """Returns all users with their roles eagerly loaded."""
    result = await db.execute(select(User).options(selectinload(User.roles)))
    return result.scalars().all()

async def assign_roles_to_user(db: AsyncSession, user_id: int, role_ids: list[int]):
    """Assigns (replaces) roles for a user."""
    # Fetch user with roles
    result = await db.execute(select(User).where(User.id == user_id).options(selectinload(User.roles)))
    user = result.scalars().first()
    
    if not user:
        return None
        
    # Fetch roles
    role_result = await db.execute(select(Role).where(Role.id.in_(role_ids)))
    roles = role_result.scalars().all()
    
    # Update roles
    user.roles = list(roles)
    await db.commit()
    await db.refresh(user)
    return user

async def set_user_admin_status(db: AsyncSession, user_id: int, is_superuser: bool):
    """Sets or removes superuser (admin) status for a user."""
    result = await db.execute(select(User).where(User.id == user_id).options(selectinload(User.roles)))
    user = result.scalars().first()

    if not user:
        return None

    user.is_superuser = is_superuser
    await db.commit()
    await db.refresh(user)
    return user

async def update_user_profile_picture(db: AsyncSession, user_id: int, image_path: str):
    """Updates the user's profile picture URL."""
    result = await db.execute(select(User).where(User.id == user_id).options(selectinload(User.roles)))
    user = result.scalars().first()
    
    if user:
        user.profile_picture = image_path
    return user


async def update_user(db: AsyncSession, user_id: int, user_update: UserUpdate):
    """Updates user profile information."""
    # Fetch user
    result = await db.execute(select(User).where(User.id == user_id).options(selectinload(User.roles)))
    user = result.scalars().first()
    
    if not user:
        return None
        
    # Update fields if provided
    if user_update.first_name is not None:
        user.first_name = user_update.first_name
    if user_update.last_name is not None:
        user.last_name = user_update.last_name
    # if user_update.email is not None: # careful with email updates
    #    user.email = user_update.email
        
    await db.commit()
    await db.refresh(user)
    return user

