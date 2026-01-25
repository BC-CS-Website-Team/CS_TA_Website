from contextlib import asynccontextmanager
from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from sqlalchemy import text
from database import engine
import os

# Ensure static directory exists
os.makedirs("static/profile_pictures", exist_ok=True)
os.makedirs("static/opportunity_images", exist_ok=True)

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

app = FastAPI(lifespan=lifespan)

# Mount static files
app.mount("/static", StaticFiles(directory="static"), name="static")

from fastapi.middleware.cors import CORSMiddleware

origins = [
    "http://localhost:5173",
    "http://localhost:5174",
    "http://127.0.0.1:5173",
    "http://127.0.0.1:5174",
]

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


@app.get("/")
def read_root():
    return {"Hello": "from backend!"}


if __name__ == "__main__":
    import uvicorn

    uvicorn.run(app, host="0.0.0.0", port=8000)
