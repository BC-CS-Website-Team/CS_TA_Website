import React from 'react';

const WorkflowFrontend = () => {
    return (
        <div className="prose prose-blue max-w-none animate-fade-in">
            <h2>Setting Up the Frontend</h2>
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
        </div>
    );
};

export default WorkflowFrontend;
