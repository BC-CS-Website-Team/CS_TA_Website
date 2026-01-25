const WorkflowGuide = () => {
    return (
        <div className="prose prose-blue max-w-none">
            <h1>Development Workflow</h1>
            <p className="lead">
                This guide covers how to set up your environment, make changes, and submit them for review.
            </p>

            <h2>1. Prerequisites</h2>
            <ul>
                <li><strong>Docker Desktop:</strong> The easiest way to run the full stack (Frontend + Backend + Database).</li>
                <li><strong>Git:</strong> For version control.</li>
                <li><strong>VS Code:</strong> Recommended editor.</li>
            </ul>

            <h2>2. Running the Project</h2>
            <p>
                We use Docker Compose to spin up all services with a single command.
            </p>
            <div className="bg-gray-800 text-white p-4 rounded-md not-prose">
                <code>docker-compose up --build</code>
            </div>
            <p>
                This will start:
            </p>
            <ul>
                <li>Frontend: <a href="http://localhost:5173" target="_blank">http://localhost:5173</a></li>
                <li>Backend API: <a href="http://localhost:8000" target="_blank">http://localhost:8000</a></li>
                <li>PostgreSQL Database</li>
            </ul>

            <h2>3. Contribution Steps</h2>

            <h3>Step 1: Create a Branch</h3>
            <p>Never work directly on <code>main</code>. Create a new branch for your feature or fix.</p>
            <pre><code>git checkout -b feature/my-new-feature</code></pre>

            <h3>Step 2: Make Changes</h3>
            <p>
                Edit the code. If you are working on the frontend, you should see hot-remeduling updates immediately.
                If you are working on the backend, the server will auto-reload on save.
            </p>

            <h3>Step 3: Commit and Push</h3>
            <pre><code>git add .
                git commit -m "feat: added new profile card component"
                git push origin feature/my-new-feature</code></pre>
            <p className="text-sm text-gray-500">
                Note: We follow <a href="https://www.conventionalcommits.org/" target="_blank">Conventional Commits</a> (e.g., <code>feat:</code>, <code>fix:</code>, <code>docs:</code>).
            </p>

            <h3>Step 4: Pull Request</h3>
            <p>
                Go to GitHub and open a Pull Request (PR) from your branch to <code>main</code>.
                Describe what you did and attach screenshots if it's a UI change.
            </p>

            <h2>Troubleshooting Common Issues</h2>
            <details>
                <summary className="cursor-pointer font-bold">Database connection failed?</summary>
                <div className="mt-2 text-gray-600">
                    Make sure Docker is running. If you are running the backend <em>locally</em> (outside Docker) but want to connect to the Docker database, ensure the ports are mapped correctly in <code>docker-compose.yml</code>.
                </div>
            </details>
            <details className="mt-4">
                <summary className="cursor-pointer font-bold">Frontend modules not found?</summary>
                <div className="mt-2 text-gray-600">
                    Try deleting <code>node_modules</code> and running <code>npm install</code> again.
                </div>
            </details>
        </div>
    );
};

export default WorkflowGuide;
