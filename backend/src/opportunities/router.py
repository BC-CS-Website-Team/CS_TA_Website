from typing import Annotated, List
from fastapi import APIRouter, Depends, HTTPException, status, File, UploadFile
import shutil
import uuid
from pathlib import Path
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

@router.post("/upload-image", response_model=dict)
async def upload_opportunity_image(
    current_user: Annotated[User, Depends(get_current_active_user)],
    file: UploadFile = File(...),
):
    """Upload an image for an opportunity."""
    # Validate file type
    if not file.content_type.startswith("image/"):
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="File must be an image",
        )
    
    # Create unique filename with UUID
    file_extension = Path(file.filename).suffix
    unique_filename = f"{current_user.id}_{uuid.uuid4()}{file_extension}"
    
    # Define upload directory and file path
    upload_dir = Path("uploads/opportunity_images")
    upload_dir.mkdir(parents=True, exist_ok=True)
    file_path = upload_dir / unique_filename
    
    # Save file to disk
    try:
        with open(file_path, "wb") as buffer:
            shutil.copyfileobj(file.file, buffer)
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Could not save file: {e}",
        )
    
    # Return the URL path (relative to backend URL)
    return {"url": f"/uploads/opportunity_images/{unique_filename}"}

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
