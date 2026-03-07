import React from 'react';

const WorkflowDocker = () => {
    return (
        <div className="prose prose-blue max-w-none animate-fade-in">
            <h2>Setting Up the Backend with Docker</h2>
            <p>
                We use Docker to run the <strong>Database (PostgreSQL)</strong> and the <strong>Backend API (FastAPI)</strong>.
                This ensures everyone has the exact same database setup without installing messy drivers on their computer.
            </p>

            <h3>Step 1: Configure Environment Variables</h3>
            <p>
                We have <strong>two</strong> environment files to set up: one for Docker (at the root) and one for the Backend.
            </p>

            <ol className="list-decimal list-inside space-y-4 ml-2">
                <li>
                    <strong>Root Env (For Docker):</strong>
                    <p className="ml-5 mt-1">Copy the example file in the root folder:</p>
                    <div className="bg-gray-800 text-white p-3 rounded-md not-prose ml-5 mt-2">
                        <pre><code>cp .env.example .env</code></pre>
                    </div>
                    <p className="ml-5 mt-2 text-sm text-gray-700">
                        The default values (user: <code>myuser</code>, pass: <code>password</code>) are fine for local development.
                    </p>
                </li>
                <li>
                    <strong>Backend Env (For Python):</strong>
                    <p className="ml-5 mt-1">Copy the example file in the backend folder:</p>
                    <div className="bg-gray-800 text-white p-3 rounded-md not-prose ml-5 mt-2">
                        <pre><code>cp backend/.env.example backend/.env</code></pre>
                    </div>
                    <p className="ml-5 mt-2 text-sm text-gray-700">
                        <strong>Important:</strong> You should generate a random secret key for security. Run this in your terminal:
                        <br />
                        <code className="bg-gray-200 px-1 py-0.5 rounded text-red-600">openssl rand -hex 32</code>
                        <br />
                        Copy the output and paste it into your new <code>backend/.env</code> file as the <code>SECRET_KEY</code>.
                    </p>
                </li>
            </ol>
            <p className="text-sm text-gray-600 mt-4">
                <em>Windows users:</em> You can just copy/paste and rename these files in File Explorer if `cp` doesn't work.
            </p>

            <h3>Step 2: Turn on Docker Desktop</h3>
            <p>
                Open the <strong>Docker Desktop</strong> application on your computer and wait until the engine has started.
            </p>

            <h3>Step 3: Build and Run</h3>
            <p>
                Run this command to tell Docker to download Postgres, build our Python backend, and connect them together:
            </p>
            <div className="bg-gray-800 text-white p-4 rounded-md not-prose mb-4">
                <pre><code>docker-compose up --build</code></pre>
            </div>
            <p>
                <strong>What to expect:</strong>
                <br />
                You will see logs saying <code>Application startup complete</code>.
            </p>
            <p>
                <strong>Verify it works:</strong> Open <a href="http://localhost:8000/docs" target="_blank" rel="noopener noreferrer">http://localhost:8000/docs</a> in your browser.
            </p>

            <h3>Step 4: Initialize the Database</h3>
            <p>
                When you start the project for the first time, the database is empty. Make sure the container is running, then run:
            </p>
            <div className="bg-gray-800 text-white p-4 rounded-md not-prose mb-4">
                <pre><code>docker-compose exec backend uv run alembic upgrade head</code></pre>
            </div>
        </div>
    );
};

export default WorkflowDocker;
