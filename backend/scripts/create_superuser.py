import asyncio
import sys
import os

# Ensure we can import from the src directory
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

from database import AsyncSessionLocal
from auth.models import User
from auth.utils import get_password_hash
from sqlalchemy.future import select

async def create_superuser(email: str, password: str, first_name: str, last_name: str):
    async with AsyncSessionLocal() as db:
        # Check if user already exists
        result = await db.execute(select(User).where(User.email == email))
        user = result.scalars().first()

        if user:
            print(f"User {email} already exists. Updating to superuser...")
            user.is_superuser = True
            if not user.first_name:
                user.first_name = first_name
            if not user.last_name:
                user.last_name = last_name
        else:
            print(f"Creating new superuser {email}...")
            user = User(
                email=email,
                hashed_password=get_password_hash(password),
                is_active=True,
                is_superuser=True,
                first_name=first_name,
                last_name=last_name,
            )
            db.add(user)

        await db.commit()
        print("Success! You can now log in with this account.")

if __name__ == "__main__":
    if len(sys.argv) != 5:
        print("Usage: uv run python scripts/create_superuser.py <email> <password> <first_name> <last_name>")
        sys.exit(1)

    email = sys.argv[1]
    password = sys.argv[2]
    first_name = sys.argv[3]
    last_name = sys.argv[4]

    asyncio.run(create_superuser(email, password, first_name, last_name))
