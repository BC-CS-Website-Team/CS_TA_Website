import React from 'react';
import { Heading, Text, CodeBlock } from '../../../components/atoms';

const PYDANTIC_CODE = `
# backend/src/opportunities/schemas.py

from pydantic import BaseModel
from datetime import datetime
from typing import Optional
from opportunities.constants import OpportunityType

# ── Base ─────────────────────────────────────────────────────────────────────
# Shared fields used by both Create and Response schemas.
class OpportunityBase(BaseModel):
    name: Optional[str] = None
    deadline: Optional[datetime] = None
    opportunity_type: Optional[OpportunityType] = None
    in_house: Optional[bool] = False
    opportunity_image: Optional[str] = None
    link: Optional[str] = None
    opportunity_description: Optional[str] = None

# ── Input: What the frontend SENDS when creating ──────────────────────────────
class OpportunityCreate(OpportunityBase):
    pass  # Inherits all base fields. Add extra required fields here if needed.

# ── Output: What the backend RETURNS to the frontend ─────────────────────────
class OpportunityResponse(OpportunityBase):
    id: int                                          # The auto-generated DB id
    date_added: Optional[datetime] = None            # Set automatically by the DB
    opportunity_uploader_id: Optional[int] = None
    opportunity_uploader: Optional[UserSummary] = None

    class Config:
        from_attributes = True  # <-- Allows reading from SQLAlchemy model objects
`.trim();

const ROUTER_CODE = `
# backend/src/opportunities/router.py

from typing import Annotated, List
from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.ext.asyncio import AsyncSession
from database import get_db
from auth.dependencies import get_current_active_user
from auth.models import User
from opportunities.schemas import OpportunityCreate, OpportunityResponse, OpportunityUpdate
from opportunities.service import get_all_opportunities, create_opportunity, get_opportunity_by_id, update_opportunity, delete_opportunity

router = APIRouter(
    prefix="/opportunities",  # All endpoints in this file start with /opportunities
    tags=["opportunities"],   # Groups them in the Swagger UI
)

# ── PUBLIC endpoint — no login required ────────────────────────────────────────
@router.get("/", response_model=List[OpportunityResponse])
async def read_opportunities(
    db: Annotated[AsyncSession, Depends(get_db)],  # DB session injected automatically
):
    return await get_all_opportunities(db)

# ── PROTECTED endpoint — valid JWT token required ──────────────────────────────
@router.post("/", response_model=OpportunityResponse)
async def create_new_opportunity(
    opportunity_in: OpportunityCreate,                              # Pydantic validates the body
    current_user: Annotated[User, Depends(get_current_active_user)],  # Auth check happens here
    db: Annotated[AsyncSession, Depends(get_db)],
):
    return await create_opportunity(db, opportunity_in, current_user.id)

# ── Owner-only PUT endpoint ────────────────────────────────────────────────────
@router.put("/{opportunity_id}", response_model=OpportunityResponse)
async def update_existing_opportunity(
    opportunity_id: int,
    opportunity_in: OpportunityUpdate,
    current_user: Annotated[User, Depends(get_current_active_user)],
    db: Annotated[AsyncSession, Depends(get_db)],
):
    opportunity = await get_opportunity_by_id(db, opportunity_id)
    if not opportunity:
        raise HTTPException(status_code=404, detail="Opportunity not found")

    # Only the uploader OR a superuser can edit
    if opportunity.opportunity_uploader_id != current_user.id and not current_user.is_superuser:
        raise HTTPException(status_code=403, detail="Not authorized to update this opportunity")

    return await update_opportunity(db, opportunity, opportunity_in)
`.trim();

const MAIN_REGISTRATION = `
# backend/src/main.py

from fastapi import FastAPI
from opportunities.router import router as opportunities_router

app = FastAPI()

# Register every feature's router here
app.include_router(opportunities_router)
`.trim();

const BackendAPI: React.FC = () => {
    return (
        <div className="space-y-12 animate-fade-in">
            {/* Header */}
            <div>
                <Heading level={2} className="text-gray-900 mb-4">API & Endpoints</Heading>
                <Text className="text-lg max-w-3xl">
                    This page covers how data enters and exits the backend: <strong>Pydantic schemas</strong> guarantee
                    that every request and response is correctly structured, and <strong>FastAPI routers</strong> define
                    the HTTP endpoints that the frontend calls. We use the <code>Opportunities</code> feature as a complete, real-world walkthrough.
                </Text>
            </div>

            {/* Section 1: Pydantic */}
            <section className="space-y-6">
                <Heading level={2}>1. Data Validation with Pydantic</Heading>
                <div className="space-y-6">
                    <Text className="text-gray-600">
                        Before a request ever reaches the database, it passes through a <strong>Pydantic Schema</strong>.
                        Pydantic enforces types, rejects invalid data automatically, and documents exactly what
                        shape the request body must have. Schemas live in{' '}
                        <code className="bg-gray-100 px-2 py-1 rounded text-sm text-gray-800">backend/src/[feature]/schemas.py</code>.
                    </Text>

                    <CodeBlock code={PYDANTIC_CODE} language="python" filename="backend/src/opportunities/schemas.py" />

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-gray-50 border border-gray-200 p-5 rounded-lg">
                            <Heading level={4} className="mb-2">Input vs Output Schemas</Heading>
                            <Text className="text-sm text-gray-600">
                                <code>OpportunityCreate</code> defines what the frontend is allowed to send.
                                <code>OpportunityResponse</code> defines exactly what is returned — including computed fields like <code>id</code> and <code>date_added</code> that the frontend never has to worry about sending.
                            </Text>
                        </div>
                        <div className="bg-gray-50 border border-gray-200 p-5 rounded-lg">
                            <Heading level={4} className="mb-2">from_attributes = True</Heading>
                            <Text className="text-sm text-gray-600">
                                Without this config flag, Pydantic can only read Python dictionaries.
                                Setting it to <code>True</code> allows Pydantic to read from SQLAlchemy model instances directly — crucial since that's what the database layer returns.
                            </Text>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 2: FastAPI Routers */}
            <section className="space-y-6">
                <Heading level={2}>2. Creating Endpoints with FastAPI Routers</Heading>
                <div className="space-y-6">
                    <Text className="text-gray-600">
                        Routers connect HTTP paths (like <code>GET /opportunities</code>) to Python functions.
                        They live in <code className="bg-gray-100 px-2 py-1 rounded text-sm text-gray-800">backend/src/[feature]/router.py</code>.
                    </Text>

                    <CodeBlock code={ROUTER_CODE} language="python" filename="backend/src/opportunities/router.py" />

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-gray-50 border border-gray-200 p-5 rounded-lg">
                            <Heading level={4} className="mb-2">Dependency Injection: Depends(get_db)</Heading>
                            <Text className="text-sm text-gray-600">
                                Adding <code>Depends(get_db)</code> to a parameter tells FastAPI to automatically open
                                a database session, provide it to the function as <code>db</code>, and close it
                                when the function returns. You never manually manage connections.
                            </Text>
                        </div>
                        <div className="bg-gray-50 border border-gray-200 p-5 rounded-lg">
                            <Heading level={4} className="mb-2">Authentication: Depends(get_current_active_user)</Heading>
                            <Text className="text-sm text-gray-600">
                                Adding this dependency to an endpoint makes it protected. FastAPI automatically
                                reads the <code>Authorization: Bearer</code> header, validates the JWT, and injects
                                the <code>User</code> object — or rejects the request with a 401 if the token is missing or invalid.
                            </Text>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 3: Registering the Router */}
            <section className="space-y-6">
                <Heading level={2}>3. Connecting the Router to the App</Heading>
                <Text className="text-gray-600">
                    After creating a router, you must register it in <code>src/main.py</code> so
                    FastAPI knows about it. Without this step, none of your endpoints will be reachable.
                </Text>
                <CodeBlock code={MAIN_REGISTRATION} language="python" filename="backend/src/main.py" />
            </section>
        </div>
    );
};

export default BackendAPI;
