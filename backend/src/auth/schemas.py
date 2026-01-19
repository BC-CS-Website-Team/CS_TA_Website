from pydantic import BaseModel, EmailStr, ConfigDict, field_validator
from datetime import datetime
import re


# Schemas here is basically the gatekeeper for the application. Users need to put in a password, and we ensure its validity here.
class UserBase(BaseModel):
    email: EmailStr
    is_active: bool = True


# Properties to receive via API on creation
class UserCreate(UserBase):
    password: str

    @field_validator("password")
    @classmethod
    def validate_password(cls, v: str) -> str:
        if len(v) < 8:
            raise ValueError("Password must be at least 8 characters")

        if not re.search(r"[A-Z]", v):
            raise ValueError("Password must contain an uppercase letter")

        if not re.search(r"[a-z]", v):
            raise ValueError("Password must contain a lowercase letter")

        if not re.search(r"[^\w\s]", v):
            raise ValueError("Password must contain a symbol")

        return v


# Role Schemas
class RoleBase(BaseModel):
    name: str

class RoleCreate(RoleBase):
    pass

class RoleResponse(RoleBase):
    id: int

    model_config = ConfigDict(from_attributes=True)

class UserRoleAssign(BaseModel):
    role_ids: list[int]


# Properties to return per User
class UserResponse(UserBase):
    id: int
    created_at: datetime
    is_superuser: bool
    roles: list[RoleResponse] = []
    profile_picture: str | None = None
    # updated_at: datetime

    # ConfigDict is needed for Pydantic to read ORM models
    model_config = ConfigDict(from_attributes=True)


# Token Schemas (for the login response)
class Token(BaseModel):
    access_token: str
    token_type: str


class TokenData(BaseModel):
    email: str | None = None
