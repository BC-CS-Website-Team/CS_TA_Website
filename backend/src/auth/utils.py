import jwt
from datetime import datetime, timedelta, timezone
from argon2 import PasswordHasher
from argon2.exceptions import VerifyMismatchError
from config import settings

# Argon2 Hashing
ph = PasswordHasher()


def get_password_hash(password: str) -> str:
    """Turns a plain password into a secure Argon2 hash."""
    return ph.hash(password)


def verify_password(plain_password: str, hashed_password: str) -> bool:
    """Checks if the typed password matches the stored hash."""
    try:
        return ph.verify(hashed_password, plain_password)
    except VerifyMismatchError:
        return False


# JWT Token Creation
def create_access_token(data: dict, expires_delta: timedelta | None = None):
    to_encode = data.copy()

    # UTC for consistency
    now = datetime.now(timezone.utc)
    if expires_delta:
        expire = now + expires_delta
    else:
        expire = now + timedelta(minutes=settings.ACCESS_TOKEN_EXPIRE_MINUTES)

    # iat = Issued At, nbf = Not Before
    to_encode.update(
        {
            "exp": expire,
            "iat": now,
            "sub": str(data.get("sub")),  # Ensures the subject is a string
        }
    )

    encoded_jwt = jwt.encode(
        to_encode, settings.SECRET_KEY, algorithm=settings.ALGORITHM
    )
    return encoded_jwt
