FROM python:3.13-slim

# Install uv.
COPY --from=ghcr.io/astral-sh/uv:latest /uv /uvx /bin/

# Copy the project into the image.
ADD . /app

# Sync the project into a new environment, using the frozen lockfile.
WORKDIR /app
RUN uv sync --frozen

# Run the application.
# Note: We use `uv run` to ensure the command runs within the environment.
CMD ["uv", "run", "fastapi", "dev", "src/main.py", "--host", "0.0.0.0", "--port", "8000"]
