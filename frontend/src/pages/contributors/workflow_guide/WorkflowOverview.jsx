import React from 'react';

const WorkflowOverview = () => {
    return (
        <div className="prose prose-blue max-w-none animate-fade-in">
            <h2>Development Workflow Overview</h2>
            <p className="lead">
                Setting up the database, server, and frontend is straight-forward once you pick your approach. Check out the setup guides in the tabs above for quick installation instructions.
            </p>

            <hr className="my-6" />

            <h2>1. Prerequisites (Install These First)</h2>
            <p>
                Before writing any code, you need a few tools installed on your machine.
            </p>

            <ul>
                <li>
                    <strong>Docker Desktop (Highly Recommended):</strong> <a href="https://www.docker.com/products/docker-desktop/" target="_blank" rel="noopener noreferrer">Download Here</a>. This manages complex server and database setup automatically. <em>(Windows: Ensure WSL 2 is enabled)</em>.
                    <br /><span className="text-sm text-gray-600">If you cannot run Docker, you will need to install <a href="https://www.postgresql.org/download/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">PostgreSQL manually</a>.</span>
                </li>
                <li>
                    <strong>Node.js (LTS Version):</strong> <a href="https://nodejs.org/en/download/" target="_blank" rel="noopener noreferrer">Download Here</a>. Required for running the React frontend.
                </li>
                <li>
                    <strong>Git &amp; VS Code:</strong> <a href="https://git-scm.com/downloads" target="_blank" rel="noopener noreferrer">Download Git</a> to get our code, and <a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer">Download VS Code</a> to edit it.
                </li>
            </ul>

            <hr className="my-6" />

            <h2>2. Cloning the Repository</h2>
            <p>
                Open your terminal and run the following commands to download our code and enter the folder.
            </p>
            <div className="bg-gray-800 text-white p-4 rounded-md not-prose mb-4">
                <pre><code>{`git clone https://github.com/BC-CS-Website-Team/CS_TA_Website.git
cd CS_TA_Website`}</code></pre>
            </div>

            <hr className="my-6" />

            <h2>3. Setup Guides</h2>
            <p>
                Use the tabs above to view step-by-step guides for getting the frontend, backend, and database running locally on your computer.
                <br /><br />
                <strong>Which setup should you use?</strong> Most users should use the <strong>Backend (Docker)</strong> since it avoids messy python environments and DB installations. The <strong>Backend (Local)</strong> is for developers preferring to run the Python server natively with VS Code debugger instead. You will always need to run the <strong>Frontend Setup</strong> regardless!
            </p>

            <hr className="my-6" />

            <h2>4. Summary of Daily Workflow</h2>
            <p>
                Once you are all set up, here is what you do every time you want to start coding:
            </p>
            <ol>
                <li>Open Docker Desktop (If using Docker for DB or backend).</li>
                <li>Open Terminal 1: Run <code>docker-compose up</code> (or <code>uv run fastapi dev src/main.py</code> if backend running locally).</li>
                <li>
                    <em>If database columns changed:</em> Run <code>docker-compose exec backend uv run alembic upgrade head</code> (or <code>uv run alembic upgrade head</code> if local).
                </li>
                <li>Open Terminal 2: Run <code>cd frontend && npm run dev</code>.</li>
                <li>Go to <a href="http://localhost:5173" target="_blank" rel="noopener noreferrer">http://localhost:5173</a>.</li>
            </ol>
        </div>
    );
};

export default WorkflowOverview;
