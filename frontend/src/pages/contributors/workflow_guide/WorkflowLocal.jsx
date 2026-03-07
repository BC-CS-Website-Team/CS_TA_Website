import React from 'react';

const WorkflowLocal = () => {
    return (
        <div className="prose prose-blue max-w-none animate-fade-in">
            <h2>Running Backend Locally</h2>
            <p>
                If you prefer to run the backend Python code on your actual machine (instead of inside Docker), follow these steps.
                This is often faster for debugging and lets you use VS Code's Python tools natively.
            </p>

            <h3>Step 1: Install uv</h3>
            <p>
                We use <strong>uv</strong> to manage Python and dependencies.
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
                By default, your correct <code>backend/.env</code> file points to the Docker database container name (<code>db</code>).
                If you run locally, you need to point it to <code>localhost</code>.
            </p>
            <div className="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4 mb-4" role="alert">
                <p>Open <code>backend/.env</code> and change the <code>DATABASE_URL</code> to use <code>localhost</code> instead of <code>db</code>.</p>
                <code className="block mt-2 font-bold">DATABASE_URL=postgresql://myuser:password@localhost:5432/fastapi_database</code>
            </div>

            <h3>Step 3: Start the Database</h3>
            <p>
                You still need the database running! The easiest way is to use Docker to start just the database:
            </p>
            <div className="bg-gray-800 text-white p-4 rounded-md not-prose mb-4">
                <pre><code>docker-compose up -d db</code></pre>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 text-blue-800 p-4 mb-6" role="alert">
                <h4 className="font-bold mb-2 mt-0">Alternative: Local PostgreSQL (No Docker)</h4>
                <p className="mb-2 text-sm">If you don't have Docker, you need to set up a local Postgres instance:</p>
                <ol className="list-decimal list-inside space-y-2 ml-2 text-sm">
                    <li><a href="https://www.postgresql.org/download/" target="_blank" rel="noopener noreferrer" className="font-semibold underline">Download &amp; Install PostgreSQL</a>. Remember the password you set during installation!</li>
                    <li>Open <strong>pgAdmin</strong> (which installs with Postgres) or use <code>psql</code> in your terminal.</li>
                    <li>Create the required user and database by running this SQL query:
                        <div className="bg-gray-800 text-gray-200 p-3 rounded-md not-prose mt-2 mb-2">
                            <pre className="text-xs"><code>{`CREATE USER myuser WITH PASSWORD 'password';
CREATE DATABASE fastapi_database OWNER myuser;`}</code></pre>
                        </div>
                    </li>
                    <li>Make sure your Postgres service is active (it usually starts automatically in the background).</li>
                </ol>
            </div>

            <h3>Step 4: Install &amp; Run Backend</h3>
            <div className="bg-gray-800 text-white p-4 rounded-md not-prose mb-4">
                <pre><code>
                    cd backend
                    uv sync
                    uv run fastapi dev src/main.py
                </code></pre>
            </div>
            <p>
                The server will start at <a href="http://localhost:8000" target="_blank" rel="noopener noreferrer">http://localhost:8000</a>.
            </p>

            <h3>Step 5: Initialize the Database</h3>
            <div className="bg-gray-800 text-white p-4 rounded-md not-prose mb-4">
                <pre><code>
                    cd backend
                    uv run alembic upgrade head
                </code></pre>
            </div>
        </div>
    );
};

export default WorkflowLocal;
