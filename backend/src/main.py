from contextlib import asynccontextmanager
from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from sqlalchemy import text
from database import engine
import os
from pathlib import Path

# Define uploads directory - this will be persistent across container restarts
UPLOADS_DIR = Path("uploads")
PROFILE_PICTURES_DIR = UPLOADS_DIR / "profile_pictures"
OPPORTUNITY_IMAGES_DIR = UPLOADS_DIR / "opportunity_images"

# Ensure upload directories exist
PROFILE_PICTURES_DIR.mkdir(parents=True, exist_ok=True)
OPPORTUNITY_IMAGES_DIR.mkdir(parents=True, exist_ok=True)

@asynccontextmanager
async def lifespan(app: FastAPI):
    # Startup: Check DB connection
    try:
        print("Checking DB connection...")
        async with engine.begin() as conn:
            await conn.execute(text("SELECT 1"))
        print("DB connection successful.")
    except Exception as e:
        print(f"DB Connection failed: {e}")
    yield
    # Shutdown
    await engine.dispose()


from auth.router import router as auth_router

from config import settings

app = FastAPI(lifespan=lifespan)

# Mount uploads directory to serve uploaded files
app.mount("/uploads", StaticFiles(directory=str(UPLOADS_DIR)), name="uploads")

from fastapi.middleware.cors import CORSMiddleware

origins = settings.ALLOWED_ORIGINS

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth_router)

from opportunities.router import router as opportunities_router
app.include_router(opportunities_router)

from preferences.router import router as preferences_router
app.include_router(preferences_router)

from slack.router import router as slack_router
app.include_router(slack_router)

from users.router import router as users_router
app.include_router(users_router, prefix="/api")


@app.get("/")
def read_root():
    return {"Hello": "from backend!"}


if __name__ == "__main__":
    import uvicorn

    uvicorn.run(app, host="0.0.0.0", port=8000)
