from typing import Annotated, List
from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.ext.asyncio import AsyncSession
from database import get_db
from auth.models import User
from auth.dependencies import get_current_active_user
from opportunities.schemas import OpportunityCreate, OpportunityResponse, OpportunityUpdate
from opportunities.service import (
    get_all_opportunities,
    create_opportunity,
    get_opportunity_by_id,
    update_opportunity,
    delete_opportunity,
)

router = APIRouter(
    prefix="/opportunities",
    tags=["opportunities"],
)

@router.get("/", response_model=List[OpportunityResponse])
async def read_opportunities(
    db: Annotated[AsyncSession, Depends(get_db)],
):
    """Get all opportunities (Public)."""
    return await get_all_opportunities(db)

@router.post("/", response_model=OpportunityResponse)
async def create_new_opportunity(
    opportunity_in: OpportunityCreate,
    current_user: Annotated[User, Depends(get_current_active_user)],
    db: Annotated[AsyncSession, Depends(get_db)],
):
    """Create a new opportunity (Authenticated users)."""
    return await create_opportunity(db, opportunity_in, current_user.id)

@router.put("/{opportunity_id}", response_model=OpportunityResponse)
async def update_existing_opportunity(
    opportunity_id: int,
    opportunity_in: OpportunityUpdate,
    current_user: Annotated[User, Depends(get_current_active_user)],
    db: Annotated[AsyncSession, Depends(get_db)],
):
    """Update an opportunity (Only the uploader)."""
    opportunity = await get_opportunity_by_id(db, opportunity_id)
    if not opportunity:
        raise HTTPException(status_code=404, detail="Opportunity not found")
    
    # Check ownership or admin status
    if opportunity.opportunity_uploader_id != current_user.id and not current_user.is_superuser:
        raise HTTPException(status_code=403, detail="Not authorized to update this opportunity")
        
    return await update_opportunity(db, opportunity, opportunity_in)

@router.delete("/{opportunity_id}")
async def delete_existing_opportunity(
    opportunity_id: int,
    current_user: Annotated[User, Depends(get_current_active_user)],
    db: Annotated[AsyncSession, Depends(get_db)],
):
    """Delete an opportunity (Only the uploader or Admin)."""
    opportunity = await get_opportunity_by_id(db, opportunity_id)
    if not opportunity:
        raise HTTPException(status_code=404, detail="Opportunity not found")
    
    # Check ownership or admin status
    if opportunity.opportunity_uploader_id != current_user.id and not current_user.is_superuser:
        raise HTTPException(status_code=403, detail="Not authorized to delete this opportunity")
    
    await delete_opportunity(db, opportunity)
    return {"message": "Opportunity deleted successfully"}
