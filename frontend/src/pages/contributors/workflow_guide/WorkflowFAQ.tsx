import React from 'react';

const WorkflowFAQ: React.FC = () => {
    return (
        <div className="prose prose-blue max-w-none">
            <h2>Frequently Asked Questions</h2>
            <p className="lead">
                Common questions about our setup and workflow.
            </p>

            <details className="mb-4 p-4 border rounded-md">
                <summary className="font-bold text-lg cursor-pointer">Why do we run the frontend locally but the backend in Docker?</summary>
                <div className="mt-2 text-gray-700">
                    <p>
                        We run the <strong>Frontend</strong> locally to take advantage of "Hot Module Replacement" (HMR).
                        This means when you save a file, the browser updates instantly without refreshing. running frontend in Docker uses more memory and is slower to update.
                    </p>
                    <p className="mt-2">
                        We run the <strong>Backend</strong> in Docker to ensure everyone has the exact same Python environment and Database setup.
                        It eliminates "it works on my machine" bugs.
                    </p>
                </div>
            </details>

            <details className="mb-4 p-4 border rounded-md">
                <summary className="font-bold text-lg cursor-pointer">Do I need to rebuild Docker every time I change code?</summary>
                <div className="mt-2 text-gray-700">
                    <p>
                        <strong>No!</strong> We use "Volumes" to mirror your code into the container.
                        When you save a Python file in VS Code, it updates inside Docker immediately, and the server auto-reloads.
                    </p>
                    <p className="mt-2">
                        <strong>You ONLY need to rebuild</strong> (<code>docker-compose up --build</code>) if you add a new library to
                        <code>pyproject.toml</code> or change the <code>Dockerfile</code>.
                    </p>
                </div>
            </details>

            <details className="mb-4 p-4 border rounded-md">
                <summary className="font-bold text-lg cursor-pointer">Should I connect to the production database?</summary>
                <div className="mt-2 text-gray-700">
                    <p>
                        <strong>Never.</strong> It is standard professional practice to develop against a <em>local</em> copy of the database.
                        Connecting to production carries a high risk of accidentally deleting or corrupting real data.
                    </p>
                </div>
            </details>

            <details className="mb-4 p-4 border rounded-md">
                <summary className="font-bold text-lg cursor-pointer">Troubleshooting: Backend connection failed?</summary>
                <div className="mt-2 text-gray-700">
                    <p>
                        1. Check if Docker Desktop is running and the icon is green.<br />
                        2. If running locally, did you update your `.env` to use `localhost`?<br />
                        3. If running in Docker, did you see "Application startup complete" in the logs?
                    </p>
                </div>
            </details>
        </div>
    );
};

export default WorkflowFAQ;
