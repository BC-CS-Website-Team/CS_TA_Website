from contextlib import asynccontextmanager
from fastapi import FastAPI
from sqlalchemy import text
from database import engine


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


app = FastAPI(lifespan=lifespan)


@app.get("/")
def read_root():
    return {"Hello": "from backend!"}


if __name__ == "__main__":
    import uvicorn

    uvicorn.run(app, host="0.0.0.0", port=8000)
