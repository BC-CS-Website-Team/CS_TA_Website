from sqlalchemy.ext.asyncio import AsyncSession
from opportunities.schemas import OpportunityCreate
from opportunities.constants import OpportunityType
from opportunities.service import create_opportunity
from database import AsyncSessionLocal # We need a fresh session for background tasks

async def extract_opportunity_from_text(text: str) -> OpportunityCreate:
    """
    Simulates AI Extraction (Option A).
    In the future, this will call Google Gemini or OpenAI.
    """
    
    # PLACEHOLDER LOGIC:
    # If text contains "internship", mark as internship. extract title as first few words.
    
    # 1. Determine Type
    opp_type = OpportunityType.OTHER
    text_lower = text.lower()
    if "internship" in text_lower:
        opp_type = OpportunityType.INTERNSHIP
    elif "job" in text_lower:
        opp_type = OpportunityType.JOB
    elif "hackathon" in text_lower:
        opp_type = OpportunityType.HACKATHON
        
    # 2. Extract Title (Naive)
    # Assume the first line is the title
    title = text.split("\n")[0][:100]
    
    # 3. Create Object
    return OpportunityCreate(
        name=title,
        opportunity_description=text,
        opportunity_type=opp_type,
        in_house=False # Default for external slack posts
    )

async def process_slack_event(event: dict):
    """
    Background Task: Processes the event.
    """
    print(f"Processing Slack Event: {event}")
    
    text = event.get("text", "")
    if not text:
        return

    # 1. AI Extraction
    opportunity_data = await extract_opportunity_from_text(text)
    
    # 2. Save to DB
    # Since this is a background task, we need a new session
    async with AsyncSessionLocal() as db:
        # We pass user_id=None or a specific "Slack Bot" user ID if we created one.
        # For now, we will leave it as None (allowed by our model nullable=True).
        try:
             # Find or create a 'Slack Bot' user? 
             # For simplicity, we create with user_id=None as foreign key is nullable.
             await create_opportunity(db, opportunity_data, user_id=None, source="slack")
             print(f"Successfully created opportunity from Slack: {opportunity_data.name}")
        except Exception as e:
            print(f"Error saving Slack opportunity: {e}")
