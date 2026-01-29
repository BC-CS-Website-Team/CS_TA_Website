from fastapi import APIRouter, Request, BackgroundTasks, Depends, HTTPException
from slack.dependencies import verify_slack_signature
from slack.schemas import SlackEventWrapper, SlackChallenge
from slack.service import process_slack_event

router = APIRouter(
    prefix="/slack",
    tags=["slack"],
)

@router.post("/events")
async def slack_events(
    request: Request,
    background_tasks: BackgroundTasks,
    # We verify signature manually inside or dependency, 
    # but for url_verification challenge Slack sends different payload sometimes 
    # so we might need to handle verifying AFTER reading body.
    # For now, we use our dependency:
    _ = Depends(verify_slack_signature) 
):
    """
    Public endpoint for Slack Event Subscriptions.
    """
    # 1. Parse JSON
    try:
        payload = await request.json()
    except Exception:
        raise HTTPException(status_code=400, detail="Invalid JSON")

    # 2. Handle URL Verification Challenge (Handshake)
    if "challenge" in payload:
        return {"challenge": payload["challenge"]}

    # 3. Handle Events
    if "event" in payload:
        event = payload["event"]
        
        # Filter: Only care about message events in channels (not bot messages usually)
        if event.get("type") == "message" and not event.get("bot_id"):
             # Process in background to return 200 OK fast
             background_tasks.add_task(process_slack_event, event)
    
    return {"status": "ok"}
