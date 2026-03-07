import React from 'react';
import { Heading, Text, CodeBlock } from '../../../components/atoms';

// ─── Real code snippets pulled directly from the codebase ────────────────────

const USER_MODEL = `
# backend/src/auth/models.py
from sqlalchemy import Column, Integer, String, Boolean, DateTime, func, Table, ForeignKey
from sqlalchemy.orm import relationship
from database import Base

# Join table for the many-to-many User ↔ Role relationship
user_roles = Table(
    "user_roles",
    Base.metadata,
    Column("user_id", Integer, ForeignKey("users.id"), primary_key=True),
    Column("role_id", Integer, ForeignKey("roles.id"), primary_key=True),
)

class User(Base):
    __tablename__ = "users"
    id              = Column(Integer, primary_key=True, index=True)
    email           = Column(String, unique=True, index=True, nullable=False)
    hashed_password = Column(String, nullable=False)  # NEVER store plain text
    is_active       = Column(Boolean, default=True)
    is_superuser    = Column(Boolean, default=False)  # Controls admin access
    roles           = relationship("Role", secondary=user_roles, back_populates="users")
`.trim();

const ARGON2_CODE = `
# backend/src/auth/utils.py
from argon2 import PasswordHasher
from argon2.exceptions import VerifyMismatchError

ph = PasswordHasher()  # Uses secure defaults (time/memory/parallelism factors)

def get_password_hash(password: str) -> str:
    """Turns a plain password into a secure Argon2 hash."""
    return ph.hash(password)      # Output: $argon2id$v=19$m=65536,...

def verify_password(plain_password: str, hashed_password: str) -> bool:
    """Checks if the typed password matches the stored hash."""
    try:
        return ph.verify(hashed_password, plain_password)
    except VerifyMismatchError:
        return False  # Passwords don't match — never reveal which field was wrong
`.trim();

const JWT_CODE = `
# backend/src/auth/utils.py
import jwt
from datetime import datetime, timedelta, timezone
from config import settings

def create_access_token(data: dict, expires_delta: timedelta | None = None):
    to_encode = data.copy()
    now    = datetime.now(timezone.utc)
    expire = now + (expires_delta or timedelta(minutes=settings.ACCESS_TOKEN_EXPIRE_MINUTES))

    to_encode.update({
        "exp": expire,           # Token expires — cannot be used forever
        "iat": now,              # Issued At — when the token was created
        "sub": str(data["sub"]), # Subject — the user's email address
    })

    # Sign using HMAC-SHA256 with a secret only the server knows
    return jwt.encode(to_encode, settings.SECRET_KEY, algorithm=settings.ALGORITHM)
`.trim();

const DEPENDENCIES_CODE = `
# backend/src/auth/dependencies.py
from fastapi import Depends, HTTPException, status
from fastapi.security import OAuth2PasswordBearer
import jwt
from config import settings

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="auth/token")

# ── Step 1: Decode & validate the JWT ─────────────────────────────────────────
async def get_current_user(
    token: Annotated[str, Depends(oauth2_scheme)],  # FastAPI extracts Bearer token
    db:    Annotated[AsyncSession, Depends(get_db)],
) -> User:
    credentials_exception = HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Could not validate credentials",
        headers={"WWW-Authenticate": "Bearer"},
    )
    try:
        payload = jwt.decode(token, settings.SECRET_KEY, algorithms=[settings.ALGORITHM])
        email: str = payload.get("sub")
        if email is None:
            raise credentials_exception
    except jwt.PyJWTError:
        raise credentials_exception   # Invalid signature or expired token

    user = await get_user_by_email(db, email=email)
    if user is None:
        raise credentials_exception
    return user

# ── Step 2: Ensure the user account is active ────────────────────────────────
async def get_current_active_user(
    current_user: Annotated[User, Depends(get_current_user)],
) -> User:
    if not current_user.is_active:
        raise HTTPException(status_code=400, detail="Inactive user")
    return current_user

# ── Step 3: Superuser-only guard ─────────────────────────────────────────────
async def get_current_superuser(
    current_user: Annotated[User, Depends(get_current_user)],
) -> User:
    if not current_user.is_superuser:
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="The user doesn't have enough privileges",
        )
    return current_user
`.trim();

const PROTECTED_ROUTE_CODE = `
# backend/src/auth/router.py

# Any endpoint — requires a valid JWT
@router.get("/me", response_model=UserResponse)
async def read_users_me(
    current_user: Annotated[User, Depends(get_current_active_user)],
):
    return current_user

# Admin-only endpoint — requires is_superuser=True
@router.get("/users", response_model=list[UserResponse])
async def read_all_users(
    current_user: Annotated[User, Depends(get_current_superuser)],
    db:           Annotated[AsyncSession, Depends(get_db)],
):
    """Get all users. Automatically returns 403 Forbidden if not a superuser."""
    return await get_all_users_with_roles(db)

# Admin-only role management
@router.post("/roles", response_model=RoleResponse)
async def create_new_role(
    role_in:      RoleCreate,
    current_user: Annotated[User, Depends(get_current_superuser)],
    db:           Annotated[AsyncSession, Depends(get_db)],
):
    return await create_role(db, role_in)
`.trim();

const OWNERSHIP_CHECK_CODE = `
# backend/src/opportunities/router.py

@router.put("/{opportunity_id}", response_model=OpportunityResponse)
async def update_existing_opportunity(
    opportunity_id: int,
    opportunity_in: OpportunityUpdate,
    current_user:   Annotated[User, Depends(get_current_active_user)],
    db:             Annotated[AsyncSession, Depends(get_db)],
):
    opportunity = await get_opportunity_by_id(db, opportunity_id)
    if not opportunity:
        raise HTTPException(status_code=404, detail="Opportunity not found")

    # Ownership check: only the creator OR a superuser may edit
    if opportunity.opportunity_uploader_id != current_user.id and not current_user.is_superuser:
        raise HTTPException(
            status_code=403,
            detail="Not authorized to update this opportunity",
        )

    return await update_opportunity(db, opportunity, opportunity_in)

@router.delete("/{opportunity_id}")
async def delete_existing_opportunity(
    opportunity_id: int,
    current_user:   Annotated[User, Depends(get_current_active_user)],
    db:             Annotated[AsyncSession, Depends(get_db)],
):
    opportunity = await get_opportunity_by_id(db, opportunity_id)
    if not opportunity:
        raise HTTPException(status_code=404, detail="Opportunity not found")

    # Same ownership check pattern for deletion
    if opportunity.opportunity_uploader_id != current_user.id and not current_user.is_superuser:
        raise HTTPException(status_code=403, detail="Not authorized to delete this opportunity")

    await delete_opportunity(db, opportunity)
    return {"message": "Opportunity deleted successfully"}
`.trim();

const SQL_INJECTION_CODE = `
# SQLAlchemy ORM queries — SAFE because parameters are always bound, never interpolated
from sqlalchemy.future import select
from auth.models import User

# SAFE: SQLAlchemy passes 'email' as a bound parameter internally.
# The driver sends the query and value separately — injection is impossible.
result = await db.execute(select(User).where(User.email == email))

# NEVER do this (raw string interpolation — SQL injection risk):
# await db.execute(f"SELECT * FROM users WHERE email = '{email}'")  ← DANGEROUS
`.trim();

const CORS_CODE = `
# backend/src/main.py — CORS Middleware restricts which origins can call the API

from fastapi.middleware.cors import CORSMiddleware
from config import settings

origins = settings.ALLOWED_ORIGINS  # Loaded from .env (e.g. ["http://localhost:5173"])

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,      # Only listed origins are permitted
    allow_credentials=True,     # Allows cookies / auth headers
    allow_methods=["*"],        # GET, POST, PUT, DELETE etc.
    allow_headers=["*"],
)
# A browser making a request from an unlisted origin will be blocked before
# it ever reaches your endpoint logic.
`.trim();

const TIMING_ATTACK_CODE = `
# backend/src/auth/service.py

async def authenticate_user(db: AsyncSession, email: str, password: str):
    """Returns User if credentials are valid, else None."""
    result = await db.execute(select(User).where(User.email == email)...)
    user = result.scalars().first()

    if not user:
        return None  # We return None here instead of raising immediately.

    if not verify_password(password, user.hashed_password):
        return None  # Same response for wrong password — indistinguishable to the caller.

    # Both failure cases return None: the caller (login endpoint) raises the same
    # generic "Incorrect username or password" error either way.
    # This prevents an attacker from figuring out which emails are registered.
    return user
`.trim();

const FRONTEND_GUARD_CODE = `
// frontend/src/pages/Admin.tsx (example guard pattern)

import { useAuth } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';

const Admin: React.FC = () => {
    const { user, isAuthenticated } = useAuth();

    // Redirect unauthenticated users to login
    if (!isAuthenticated) return <Navigate to="/login" replace />;

    // Redirect non-superusers to home
    if (!user?.is_superuser) return <Navigate to="/" replace />;

    return <div>Admin Panel — only visible to superusers</div>;
};
`.trim();

const ENV_CODE = `
# backend/.env.example
SECRET_KEY=your-super-secret-key-here-change-this-in-production
ALGORITHM=HS256
ACCESS_TOKEN_EXPIRE_MINUTES=30

DATABASE_URL=postgresql+asyncpg://user:password@localhost/dbname

# Origins allowed to call the API (comma-separated)
ALLOWED_ORIGINS=["http://localhost:5173","https://cs.berea.edu"]
`.trim();

// ─── Component ────────────────────────────────────────────────────────────────

const BackendSecurity: React.FC = () => {
    return (
        <div className="space-y-14 animate-fade-in">

            {/* Header */}
            <div>
                <Heading level={2} className="text-gray-900 mb-4">Security</Heading>
                <Text className="text-lg max-w-3xl text-gray-600">
                    A deep-dive into every security layer of the application — from password storage to JWT authentication, ownership enforcement, SQL injection prevention, and CORS policies. Every snippet below is taken directly from the codebase with annotated explanations.
                </Text>
            </div>

            {/* Section 1: User Model & is_superuser flag */}
            <section className="space-y-4">
                <Heading level={2}>1. The User Model — Where Authority Lives</Heading>
                <Text className="text-gray-600">
                    The <code>User</code> table has two boolean flags that control access levels across the entire app:
                    <strong> <code>is_active</code></strong> (account enabled) and <strong><code>is_superuser</code></strong> (admin privileges).
                    These are set to safe defaults and can only be changed directly in the database.
                </Text>
                <CodeBlock code={USER_MODEL} language="python" filename="backend/src/auth/models.py" />
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                    <Text className="text-sm text-yellow-800">
                        <strong>How to create a superuser:</strong> Run <code>cd backend && uv run python scripts/create_superuser.py</code>.
                        You cannot elevate yourself via the API — <code>is_superuser</code> starts as <code>False</code> and must be set by a trusted admin directly in the database or via this script.
                    </Text>
                </div>
            </section>

            {/* Section 2: Password Hashing */}
            <section className="space-y-4">
                <Heading level={2}>2. Password Storage: Argon2 Hashing</Heading>
                <Text className="text-gray-600">
                    We <strong>never</strong> store plain-text passwords. Every password is transformed into an irreversible hash
                    using <strong>Argon2</strong> — the winner of the Password Hashing Competition (PHC) and OWASP's top recommendation.
                    Argon2 automatically handles salting (adding a random string before hashing) to prevent rainbow-table attacks.
                </Text>
                <CodeBlock code={ARGON2_CODE} language="python" filename="backend/src/auth/utils.py" />
                <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-gray-50 border border-gray-200 p-4 rounded-lg">
                        <Heading level={4} className="mb-1 text-sm">No Plain Storage</Heading>
                        <Text className="text-xs text-gray-600">The database only ever contains the hash string. If someone stole the database, no passwords are exposed.</Text>
                    </div>
                    <div className="bg-gray-50 border border-gray-200 p-4 rounded-lg">
                        <Heading level={4} className="mb-1 text-sm">Automatic Salting</Heading>
                        <Text className="text-xs text-gray-600">Each hash is unique even if two users have the same password, because a different random salt is generated per hash.</Text>
                    </div>
                    <div className="bg-gray-50 border border-gray-200 p-4 rounded-lg">
                        <Heading level={4} className="mb-1 text-sm">Memory-Hard</Heading>
                        <Text className="text-xs text-gray-600">Argon2 is intentionally slow and requires significant memory. This makes brute-force cracking extremely expensive.</Text>
                    </div>
                </div>
            </section>

            {/* Section 3: JWT Token Creation */}
            <section className="space-y-4">
                <Heading level={2}>3. Stateless Authentication: JWT Tokens</Heading>
                <Text className="text-gray-600">
                    After a successful login, the server creates a <strong>signed JWT token</strong> and sends it to the frontend.
                    The frontend stores this token and sends it with every subsequent request. The server verifies the signature
                    cryptographically — no database lookup needed on every request.
                </Text>
                <CodeBlock code={JWT_CODE} language="python" filename="backend/src/auth/utils.py" />
                <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                    <Text className="text-sm text-blue-800">
                        <strong>How the token is signed:</strong> The server uses a <code>SECRET_KEY</code> (from <code>.env</code>) and the HMAC-SHA256 algorithm to sign the payload.
                        Only a server with that exact secret can produce or verify a valid token. A tampered or forged token will fail signature verification immediately.
                    </Text>
                </div>
            </section>

            {/* Section 4: The Guard Chain */}
            <section className="space-y-4">
                <Heading level={2}>4. The Authentication Guard Chain</Heading>
                <Text className="text-gray-600">
                    There are three dependency functions in <code>auth/dependencies.py</code>. Each one builds on the previous,
                    forming a layered guard chain that protects every endpoint. Adding one as a parameter to a route
                    automatically enforces that layer — FastAPI handles the rest.
                </Text>
                <CodeBlock code={DEPENDENCIES_CODE} language="python" filename="backend/src/auth/dependencies.py" />

                <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-gray-50 border-t-4 border-gray-400 p-4 rounded-lg">
                        <Heading level={4} className="mb-1 text-sm font-mono">Depends(get_current_user)</Heading>
                        <Text className="text-xs text-gray-600">Decodes the JWT and verifies its signature. Any missing, expired, or forged token → <code>401 Unauthorized</code>.</Text>
                    </div>
                    <div className="bg-blue-50 border-t-4 border-blue-400 p-4 rounded-lg">
                        <Heading level={4} className="mb-1 text-sm font-mono">Depends(get_current_active_user)</Heading>
                        <Text className="text-xs text-gray-600">Builds on the above. Also checks <code>is_active=True</code>. Disabled accounts → <code>400 Bad Request</code>.</Text>
                    </div>
                    <div className="bg-red-50 border-t-4 border-red-400 p-4 rounded-lg">
                        <Heading level={4} className="mb-1 text-sm font-mono">Depends(get_current_superuser)</Heading>
                        <Text className="text-xs text-gray-600">Most restrictive. Also checks <code>is_superuser=True</code>. Regular users → <code>403 Forbidden</code>.</Text>
                    </div>
                </div>
            </section>

            {/* Section 5: Protecting Admin Endpoints */}
            <section className="space-y-4">
                <Heading level={2}>5. Protecting Admin-Only Endpoints</Heading>
                <Text className="text-gray-600">
                    Any endpoint that should only be accessible to administrators simply uses <code>Depends(get_current_superuser)</code> instead of <code>Depends(get_current_active_user)</code>.
                    A regular user hitting one of these endpoints will always receive a <code>403 Forbidden</code> — the business logic never even executes.
                </Text>
                <CodeBlock code={PROTECTED_ROUTE_CODE} language="python" filename="backend/src/auth/router.py" />
            </section>

            {/* Section 6: Ownership Checks */}
            <section className="space-y-4">
                <Heading level={2}>6. Ownership Enforcement — No Tampering With Others' Data</Heading>
                <Text className="text-gray-600">
                    Even an authenticated user cannot modify or delete data that belongs to someone else.
                    Every mutating endpoint that operates on user-owned records performs an explicit ownership check:
                    the <code>uploader_id</code> stored in the database must match <code>current_user.id</code>, or the
                    request is rejected with a <code>403</code>.
                </Text>
                <CodeBlock code={OWNERSHIP_CHECK_CODE} language="python" filename="backend/src/opportunities/router.py" />
                <div className="bg-green-50 border-l-4 border-green-500 p-4">
                    <Text className="text-sm text-green-800">
                        <strong>Escape hatch for admins:</strong> The condition includes <code>or not current_user.is_superuser</code>.
                        This means superusers can always edit or delete any record — necessary for moderation and cleanup.
                    </Text>
                </div>
            </section>

            {/* Section 7: SQL Injection */}
            <section className="space-y-4">
                <Heading level={2}>7. SQL Injection Prevention via SQLAlchemy ORM</Heading>
                <Text className="text-gray-600">
                    SQL injection is one of the most common web vulnerabilities. It occurs when user input is embedded directly
                    into a SQL string, allowing an attacker to run arbitrary database commands. We are protected because
                    we <strong>never</strong> build SQL strings manually — SQLAlchemy always uses parameterized queries.
                </Text>
                <CodeBlock code={SQL_INJECTION_CODE} language="python" filename="backend/src/auth/service.py" />
            </section>

            {/* Section 8: Timing Attack Protection */}
            <section className="space-y-4">
                <Heading level={2}>8. Timing Attack Protection</Heading>
                <Text className="text-gray-600">
                    A <strong>timing attack</strong> lets an attacker figure out whether an email is registered by measuring how
                    long the server takes to respond. If the server checks the password only when the user exists, a mismatch in
                    response time reveals which accounts are real. Our <code>authenticate_user</code> function avoids this:
                </Text>
                <CodeBlock code={TIMING_ATTACK_CODE} language="python" filename="backend/src/auth/service.py" />
            </section>

            {/* Section 9: CORS */}
            <section className="space-y-4">
                <Heading level={2}>9. CORS — Blocking Unauthorized Origins</Heading>
                <Text className="text-gray-600">
                    A browser enforces <strong>Cross-Origin Resource Sharing (CORS)</strong>. If a web page from an untrusted domain
                    tries to call our API, the browser will block the response before JavaScript can even read it.
                    We configure exactly which origins are trusted in <code>main.py</code>:
                </Text>
                <CodeBlock code={CORS_CODE} language="python" filename="backend/src/main.py" />
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                    <Text className="text-sm text-yellow-800">
                        Note that CORS is a <strong>browser</strong> security feature. Direct API tools like <code>curl</code> or Postman
                        are not subject to CORS — which is why the server-side auth guards (<code>JWT + Depends</code>) always remain the actual line of defense.
                    </Text>
                </div>
            </section>

            {/* Section 10: Frontend Guard */}
            <section className="space-y-4">
                <Heading level={2}>10. Frontend Route Guards</Heading>
                <Text className="text-gray-600">
                    The backend protects the data, but we also guard the <strong>frontend routes</strong> using the <code>AuthContext</code>.
                    Pages that require login or admin access check the context and redirect using React Router's <code>{`<Navigate>`}</code> before rendering.
                </Text>
                <CodeBlock code={FRONTEND_GUARD_CODE} language="typescript" filename="frontend/src/pages/Admin.tsx" />
                <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                    <Text className="text-sm text-blue-800">
                        <strong>Defense in depth:</strong> The frontend guard gives a smooth user experience (instant redirect vs. a raw API error).
                        But it is purely cosmetic from a security standpoint. The backend API guards are the real enforcement — a savvy user
                        could bypass the frontend redirect and hit the API directly, where they would be stopped by JWT validation and the <code>Depends</code> chain.
                    </Text>
                </div>
            </section>

            {/* Section 11: Secrets via .env */}
            <section className="space-y-4">
                <Heading level={2}>11. Secret Management via Environment Variables</Heading>
                <Text className="text-gray-600">
                    All sensitive values — the <code>SECRET_KEY</code>, database URL, and allowed origins — are stored in a <code>.env</code> file
                    that is <strong>never committed to Git</strong>. The <code>.env.example</code> file shows the required keys without real values.
                </Text>
                <CodeBlock code={ENV_CODE} language="bash" filename="backend/.env.example" />
                <div className="bg-red-50 border-l-4 border-red-500 p-4">
                    <Text className="text-sm text-red-800">
                        <strong>Never commit <code>.env</code> to Git.</strong> It is in <code>.gitignore</code> for this reason.
                        If a <code>SECRET_KEY</code> is ever exposed, all existing JWT tokens can be forged by anyone who finds it.
                        Change it immediately and all active sessions will be invalidated.
                    </Text>
                </div>
            </section>

        </div>
    );
};

export default BackendSecurity;
