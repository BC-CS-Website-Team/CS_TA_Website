from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.future import select
from fastapi import HTTPException, status
from opportunities.models import Opportunity
from opportunities.schemas import OpportunityCreate, OpportunityUpdate
from sqlalchemy.orm import joinedload

async def get_all_opportunities(db: AsyncSession):
    result = await db.execute(select(Opportunity).options(joinedload(Opportunity.opportunity_uploader)))
    return result.scalars().all()

async def get_opportunity_by_id(db: AsyncSession, opportunity_id: int):
    result = await db.execute(
        select(Opportunity)
        .options(joinedload(Opportunity.opportunity_uploader))
        .where(Opportunity.id == opportunity_id)
    )
    return result.scalar_one_or_none()

async def create_opportunity(db: AsyncSession, opportunity_in: OpportunityCreate, user_id: int, source: str = "web"):
    # Prepare the dictionary of data
    data = opportunity_in.model_dump()
    
    # Add the uploader ID and source
    data["opportunity_uploader_id"] = user_id
    data["source"] = source
    
    # Create the db object
    db_opportunity = Opportunity(**data)
    
    db.add(db_opportunity)
    await db.commit()
    await db.refresh(db_opportunity)
    
    # Reload with relation
    result = await db.execute(
        select(Opportunity)
        .options(joinedload(Opportunity.opportunity_uploader))
        .where(Opportunity.id == db_opportunity.id)
    )
    return result.scalar_one()

async def update_opportunity(db: AsyncSession, opportunity: Opportunity, opportunity_in: OpportunityUpdate):
    for field, value in opportunity_in.model_dump(exclude_unset=True).items():
        setattr(opportunity, field, value)
    
    await db.commit()
    await db.refresh(opportunity)
    # Reload with relation
    result = await db.execute(
        select(Opportunity)
        .options(joinedload(Opportunity.opportunity_uploader))
        .where(Opportunity.id == opportunity.id)
    )
    return result.scalar_one()

async def delete_opportunity(db: AsyncSession, opportunity: Opportunity):
    await db.delete(opportunity)
    await db.commit()
    return True
