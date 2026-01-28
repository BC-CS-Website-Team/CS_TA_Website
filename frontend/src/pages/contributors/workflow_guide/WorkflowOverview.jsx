import React from 'react';

const WorkflowOverview = () => {
    return (
        <div className="prose prose-blue max-w-none">
            <h2>Development Workflow Overview</h2>
            <p className="lead">
                We use existing tools to make setting up the database and server as easy as possible, but it still requires a few specific steps.
            </p>

            <hr className="my-6" />

            <h2>1. Prerequisites (Install These First)</h2>
            <p>
                Before writing any code, you need a few tools installed on your machine.
                If you already have them, you can skip this section.
            </p>

            <h3>1. Docker Desktop</h3>
            <p>
                This is the most important tool for our backend. Instead of making you install Python, PostgreSQL, and setting up databases manually,
                we use Docker to run a "container" (like a lightweight virtual machine) that has everything pre-installed.
            </p>
            <ul>
                <li>
                    <a href="https://www.docker.com/products/docker-desktop/" target="_blank" rel="noopener noreferrer">
                        <strong>Download Docker Desktop Here</strong>
                    </a>
                </li>
                <li>
                    <em>Note for Windows Users:</em> Ensure WSL 2 (Windows Subsystem for Linux) is enabled when prompted during installation.
                </li>
            </ul>

            <h3>2. Node.js (for Frontend)</h3>
            <p>
                Our frontend is built with React. You need Node.js to run it.
            </p>
            <ul>
                <li>
                    <a href="https://nodejs.org/en/download/" target="_blank" rel="noopener noreferrer">
                        <strong>Download Node.js (LTS Version)</strong>
                    </a>
                </li>
            </ul>

            <h3>3. Git & VS Code</h3>
            <ul>
                <li><a href="https://git-scm.com/downloads" target="_blank" rel="noopener noreferrer">Download Git</a> - To download our code.</li>
                <li><a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer">Download VS Code</a> - The recommended code editor.</li>
            </ul>

            <hr className="my-6" />

            <h2>2. Cloning the Repository</h2>
            <p>
                Open your terminal (Command Prompt, PowerShell, or Terminal on Mac) and run the following commands to download our code and enter the folder.
            </p>
            <div className="bg-gray-800 text-white p-4 rounded-md not-prose mb-4">
                <pre><code>
                    git clone https://github.com/BC-CS-Website-Team/CS_TA_Website.git
                    cd CS_TA_Website
                </code></pre>
            </div>

            <hr className="my-6" />

            <h2>3. Setting Up the Backend (The Docker Part)</h2>
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
                Open the <strong>Docker Desktop</strong> application on your computer and wait until the engine has started (the bottom left corner of the app should explicitly say "Engine running" or be green).
                If you don't do this, the next command will fail.
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
                You will see a lot of text scrolling by. It might take 2-5 minutes the first time.
                Eventually, you should see logs saying <code>Application startup complete</code>.
            </p>
            <p>
                <strong>Verify it works:</strong> Open <a href="http://localhost:8000/docs" target="_blank" rel="noopener noreferrer">http://localhost:8000/docs</a> in your browser.
                If you see a green/blue API documentation page, the backend is running!
            </p>

            <hr className="my-6" />

            <h2>4. Running Backend Locally (Optional)</h2>
            <p>
                If you prefer to run the backend Python code on your actual machine (instead of inside Docker), follow these steps.
                This is often faster for debugging and lets you use VS Code's Python tools natively.
            </p>
            <div className="bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-4 mb-4" role="alert">
                <p className="font-bold">Pro Tip</p>
                <p>You only need to run locally if you want to use the VS Code Debugger or if Docker is running slowly on your computer. For most tasks, the Docker setup above is easier and recommended.</p>
            </div>


            <h3>Step 1: Install uv (The Python Tool)</h3>
            <p>
                We use <strong>uv</strong> to manage Python and dependencies. It is extremely fast and replaces pip/poetry.
            </p>
            <ul>
                <li>
                    <a href="https://docs.astral.sh/uv/getting-started/installation/" target="_blank" rel="noopener noreferrer">
                        <strong>Installation Instructions for uv</strong>
                    </a>
                </li>
            </ul>
            <p className="text-sm text-gray-600 mb-4">
                (Mac/Linux users can typically run: <code>curl -LsSf https://astral.sh/uv/install.sh | sh</code>)
            </p>

            <h3>Step 2: Update Your .env</h3>
            <p>
                By default, your correct <code>backend/.env</code> file (which you created earlier) points to the Docker database container name (<code>db</code>).
                If you run locally, you need to point it to <code>localhost</code>.
            </p>
            <div className="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4 mb-4" role="alert">
                <p>Open <code>backend/.env</code> and change the <code>DATABASE_URL</code> to use <code>localhost</code> instead of <code>db</code>.</p>
                <code className="block mt-2 font-bold">DATABASE_URL=postgresql://myuser:password@localhost:5432/fastapi_database</code>
            </div>

            <h3>Step 3: Start ONLY the Database</h3>
            <p>
                You still need the database running! Use Docker to start just the database:
            </p>
            <div className="bg-gray-800 text-white p-4 rounded-md not-prose mb-4">
                <pre><code>docker-compose up -d db</code></pre>
            </div>

            <h3>Step 4: Install & Run Backend</h3>
            <p>
                Now install dependencies and start the server:
            </p>
            <div className="bg-gray-800 text-white p-4 rounded-md not-prose mb-4">
                <pre><code>
                    cd backend
                    uv sync
                    uv run fastapi dev src/main.py
                </code></pre>
            </div>
            <p>
                The server will start at <a href="http://localhost:8000" target="_blank">http://localhost:8000</a>.
            </p>

            <hr className="my-6" />

            <h2>5. Initialize the Database</h2>
            <p>
                When you start the project for the first time, the database is empty (no tables). You need to run "migrations" to create them.
            </p>

            <h3>If running with Docker:</h3>
            <div className="bg-gray-800 text-white p-4 rounded-md not-prose mb-4">
                <pre><code>docker-compose exec backend uv run alembic upgrade head</code></pre>
            </div>

            <h3>If running Locally:</h3>
            <div className="bg-gray-800 text-white p-4 rounded-md not-prose mb-4">
                <pre><code>
                    cd backend
                    uv run alembic upgrade head
                </code></pre>
            </div>

            <hr className="my-6" />

            <h2>6. Setting Up the Frontend</h2>
            <p>
                We run the frontend locally (not in Docker) so updates are instant while you edit code.
            </p>

            <h3>Step 1: Open a NEW Terminal</h3>
            <p>
                Leave your previous terminal running (it's keeping the server alive). Open a <strong>new</strong> terminal window (or tab) and make sure you are in the <code>CS_TA_Website</code> folder.
            </p>

            <h3>Step 2: Install Dependencies</h3>
            <p>
                Navigate to the frontend folder and install the required libraries:
            </p>
            <div className="bg-gray-800 text-white p-4 rounded-md not-prose mb-4">
                <pre><code>cd frontend
                    npm install</code></pre>
            </div>

            <h3>Step 3: Run the Development Server</h3>
            <div className="bg-gray-800 text-white p-4 rounded-md not-prose mb-4">
                <pre><code>npm run dev</code></pre>
            </div>
            <p>
                You should see a message saying the server is running at <code>http://localhost:5173</code>.
                <br />
                <strong>Click that link to see the app!</strong>
            </p>

            <hr className="my-6" />

            <h2>Summary of Daily Workflow</h2>
            <p>
                Once you are all set up, here is what you do every time you want to start coding:
            </p>
            <ol>
                <li>Open Docker Desktop.</li>
                <li>Open Terminal 1: Run <code>docker-compose up</code> (or <code>uv run fastapi dev src/main.py</code> if local).</li>
                <li>
                    <em>If database columns changed:</em> Run <code>docker-compose exec backend uv run alembic upgrade head</code>.
                </li>
                <li>Open Terminal 2: Run <code>cd frontend && npm run dev</code>.</li>
                <li>Go to <a href="http://localhost:5173" target="_blank">http://localhost:5173</a>.</li>
            </ol>
        </div>
    );
};

export default WorkflowOverview;
