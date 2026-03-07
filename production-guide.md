# Production Deployment Guide

This guide is intended for System Administrators responsible for deploying the CS TA Website. The application is fully containerized using Docker

## Architecture Overview

The application consists of three Docker containers orchestrated via `docker-compose.prod.yml`:
1.  **Frontend (Nginx)**: Serves the compiled React static files on port `80` and acts as a reverse proxy, routing API traffic to the backend. This is the **only** container exposed to the host machine.
2.  **Backend (FastAPI/Python)**: Runs the application logic using a production-ready server (`uvicorn` via `fastapi run`). It communicates internally with the DB and Frontend.
3.  **Database (PostgreSQL)**: Stores application data. The database data is persisted using a Docker volume.

---

## Initial Setup & Deployment

Follow these steps to deploy the application for the first time on a Linux server with Docker and Docker Compose installed.

### 1. Clone the Repository
Clone the production branch of the repository onto the server:
```bash
git clone -b prod https://github.com/BC-CS-Website-Team/CS_TA_Website.git
cd CS_TA_Website
```

### 2. Configure Environment Variables
The application reads sensitive credentials from a `.env` file. You need to create this file in the root of the repository (`/CS_TA_Website/.env`).

Run the following command to securely generate a random 32-character hex string for the `SECRET_KEY` and create the `.env` file:

```bash
# Run this inside the CS_TA_Website directory
cat <<EOF > .env
# Database Credentials
POSTGRES_USER=myuser
POSTGRES_PASSWORD=your_secure_db_password
POSTGRES_DB=fastapi_database

# Backend Security
# (We automatically generated a secure random key for you below)
SECRET_KEY="$(openssl rand -hex 32)"
EOF
```
*Note: Make sure to change `your_secure_db_password` to a strong passwords before running the command, or edit the `.env` file manually afterward.*

### 3. Build and Start the Containers
Once the repository is checked out and the `.env` file is in place, you can build the production images and start the services in detached mode (background):

```bash
docker-compose -f docker-compose.prod.yml up -d --build
```

**Verifying the Deployment:**
*   The application should now be running. The Nginx frontend container maps its internal port 80 to the host machine's port 80.
*   You can verify the containers are running securely by typing `docker ps`. You should see the three `csta-*-prod` containers active.

### 4. Initialize the Database (First Run Only)
Because this is a brand new database volume, the tables have not been created yet. You must run the database migrations once to initialize the schema:

```bash
docker-compose -f docker-compose.prod.yml exec backend uv run alembic upgrade head
```

### 5. Create the Initial Admin User (First Run Only)
In app, admins can create other admins, but we need an initial administrator account. I have provided a script to create one.

Run this command, replacing the final four arguments with the actual email, secure password, first name, and last name you want to use for the admin:

```bash
docker-compose -f docker-compose.prod.yml exec backend uv run python scripts/create_superuser.py admin@berea.edu SuperSecurePassword123! "First" "Last"
```

---

## Updating the Application

When developers merge new code into the `prod` branch on GitHub, **the server does not update automatically.** The IT department must manually pull the changes and restart the containers.

Because the source code is baked directly into the Docker images during the build phase, you must rebuild the images when pulling new code.

To apply an update with zero down-time for data (and minimal downtime for the web service), run these commands:

```bash
# 1. Navigate to the project directory
cd /path/to/CS_TA_Website

# 2. Pull the latest production code
git pull origin prod

# 3. Rebuild the images and recreate the containers.
# Docker Compose is smart enough to only restart containers whose images changed.
docker-compose -f docker-compose.prod.yml up -d --build

# 4. (If applicable) Run database migrations in case the update included database schema changes.
docker-compose -f docker-compose.prod.yml exec backend uv run alembic upgrade head
```

### Explanation of the Update Process:
You do **not** need to manually stop (`docker-compose down`) the containers first. Running `up -d --build` tells Docker to:
1. Re-evaluate the Dockerfiles against the new code.
2. Build new images for the Frontend and Backend.
3. Gracefully stop the old containers.
4. Start the new containers using the new images on the exact same Docker network.
5. The PostgreSQL database container and its data volume will not be touched unless its specific configuration changed.
