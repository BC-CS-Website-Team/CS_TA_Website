import React from 'react';
import { Heading, Text, Card, Link, CodeBlock } from '../../../components/atoms';

const DIRECTORY_TREE = `
backend/src/
├── main.py            # Entry point. Connects all routers.
├── config.py          # Configuration & Secrets.
├── database.py        # DB connection logic.
├── models.py          # Central registry for all Models.
│
├── auth/              # [Feature] Authentication
│   ├── router.py      # Endpoints (e.g. POST /login)
│   ├── schemas.py     # Pydantic (Input/Output shapes)
│   ├── models.py      # DB Tables (User, Role)
│   └── service.py     # Business Logic
│
└── opportunities/     # [Feature] Job Posts
    ├── router.py
    └── ...            # Same structure as auth
`.trim();

const BackendOverview: React.FC = () => {
    return (
        <div className="space-y-16">

            {/* Header */}
            <header className="border-b border-gray-200 pb-10">
                <Heading level={2} className="text-gray-900 mb-6">Backend Architecture Explained</Heading>
                <div className="prose prose-lg text-gray-600 max-w-none">
                    <Text className="text-xl leading-relaxed">
                        This is the master guide for the CS TA Website backend.
                        It explains the technology stack, security measures, architectural decisions, and setup instructions — not just <em>what</em> we use, but <em>why</em> we chose it and <em>how</em> it all connects.
                    </Text>
                </div>
                <div className="mt-8">
                    <Link
                        href="http://localhost:8000/docs"
                        external
                        className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 shadow-sm transition-colors"
                    >
                        Open Interactive API Docs (Swagger UI)
                    </Link>
                </div>
            </header>

            {/* Section 1: Tech Stack */}
            <section className="space-y-6">
                <Heading level={2}>1. Technology Stack</Heading>
                <div className="prose prose-lg text-gray-600 max-w-none space-y-4">
                    <Text>
                        We use a modern, high-performance Python stack designed for speed (async I/O) and scalability.
                    </Text>
                    <ul className="list-none space-y-4 pl-0">
                        <StackItem label="Language" value="Python 3.13+" desc="Latest stable Python for performance and strict type hinting." />
                        <StackItem label="Framework" value="FastAPI" desc="Chosen for its exceptional performance (Starlette), OpenAPI standards, and first-class Pydantic integration." />
                        <StackItem label="Database ORM" value="SQLAlchemy 2.0" desc="Industry-standard Python ORM. We use the 2.0 Async syntax for non-blocking queries." />
                        <StackItem label="Database Driver" value="asyncpg" desc="The fastest async PostgreSQL driver available for Python." />
                        <StackItem label="Validation" value="Pydantic v2" desc="Written in Rust — extremely fast data validation and settings management." />
                    </ul>
                </div>
            </section>

            {/* Section 2: Architecture */}
            <section className="space-y-6">
                <Heading level={2}>2. Server Architecture: Domain-Driven Design</Heading>
                <div className="prose prose-lg text-gray-600 max-w-none space-y-6">
                    <Text>
                        The codebase is organized by <strong>Feature Domain</strong> rather than technical layer (e.g., controllers/models/views).
                        This keeps related logic together, making the codebase easy to navigate and scale.
                    </Text>

                    <CodeBlock code={DIRECTORY_TREE} language="bash" filename="backend/src/ — Directory Structure" />

                    <div className="grid md:grid-cols-2 gap-6 mt-4">
                        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                            <Heading level={3} className="text-lg mb-2">Centralized Registry</Heading>
                            <Text className="text-sm">
                                <code>src/models.py</code> imports all models from each feature domain (<code>auth</code>, <code>opportunities</code>).
                                Alembic only needs to inspect this one file to see the entire database schema.
                            </Text>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                            <Heading level={3} className="text-lg mb-2">Service Layer</Heading>
                            <Text className="text-sm">
                                Complex business logic lives in <code>service.py</code>, keeping a clear separation from the HTTP layer in <code>router.py</code>. Routes focus on request/response; services focus on the actual work.
                            </Text>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 3: Security */}
            <section className="space-y-6">
                <Heading level={2}>3. Security & Encryption</Heading>
                <div className="prose prose-lg text-gray-600 max-w-none space-y-8">
                    <Text>
                        Security is a core priority. We do not "roll our own" crypto — we strictly use industry-recommended algorithms and libraries.
                    </Text>

                    <div>
                        <Heading level={3} className="text-xl text-gray-800 mb-3">Password Hashing: Argon2</Heading>
                        <Text className="mb-4">
                            We use <strong>Argon2</strong> (via <code>argon2-cffi</code>), the winner of the Password Hashing Competition (PHC) and recommended by OWASP.
                        </Text>
                        <ul className="list-disc pl-5 space-y-2">
                            <li><strong>Storage:</strong> We strictly store the <em>hash</em>, never the plain password.</li>
                            <li><strong>Salting:</strong> Every password is salted with a unique random string before hashing, preventing rainbow table attacks.</li>
                            <li><strong>Verification:</strong> When logging in, we re-hash the input and compare in constant time to prevent timing attacks.</li>
                        </ul>
                    </div>

                    <div>
                        <Heading level={3} className="text-xl text-gray-800 mb-3">Stateless Authentication: JWT</Heading>
                        <Text className="mb-4">
                            We use <strong>JSON Web Tokens (JWT)</strong> for stateless authentication. The server does not look up a session in the database on every request — greatly improving performance.
                        </Text>
                        <ol className="list-decimal pl-5 space-y-2">
                            <li><strong>Issue:</strong> Upon login, the server signs a JWT using a <code>SECRET_KEY</code> (HMAC-SHA256), containing the user's ID and expiration.</li>
                            <li><strong>Access:</strong> The frontend sends this token in the <code>Authorization: Bearer</code> header for every protected request.</li>
                            <li><strong>Validation:</strong> The backend cryptographically validates the signature. If valid, the request is processed.</li>
                        </ol>
                    </div>

                    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                        <Text className="text-sm text-yellow-800">
                            <strong>CORS Protection:</strong> We enforce strict Cross-Origin Resource Sharing (CORS) policies. Only trusted frontend origins (like this website) are permitted to call the API.
                        </Text>
                    </div>
                </div>
            </section>

            {/* Section 4: Getting Started */}
            <section className="space-y-6">
                <Heading level={2}>4. How to Start Developing</Heading>

                <div className="space-y-8 mt-4">
                    <div className="flex gap-4">
                        <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-gray-800 text-white font-bold text-sm">1</div>
                        <div className="space-y-2">
                            <Heading level={3} className="text-lg">Environment Setup</Heading>
                            <Text>The application will not start without secrets. Copy the example environment file:</Text>
                            <CodeBlock code="cp backend/.env.example backend/.env" language="bash" />
                            <Text className="text-sm text-gray-500 mt-2">Then edit <code>backend/.env</code> to include your database credentials.</Text>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-gray-800 text-white font-bold text-sm">2</div>
                        <div className="space-y-2">
                            <Heading level={3} className="text-lg">Database Migrations</Heading>
                            <Text>Initialize your database tables using Alembic. This ensures your local DB matches the code.</Text>
                            <CodeBlock code="cd backend && uv run alembic upgrade head" language="bash" />
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-gray-800 text-white font-bold text-sm">3</div>
                        <div className="space-y-2">
                            <Heading level={3} className="text-lg">Run the Server</Heading>
                            <Text>Start the hot-reloading development server:</Text>
                            <CodeBlock code="uv run fastapi dev src/main.py" language="bash" />
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

// Helper component for stack table rows
interface StackItemProps {
    label: string;
    value: string;
    desc: string;
}

const StackItem: React.FC<StackItemProps> = ({ label, value, desc }) => (
    <li className="flex flex-col sm:flex-row sm:items-baseline gap-2 border-b border-gray-100 pb-2 last:border-0">
        <span className="font-semibold text-gray-900 w-40 flex-shrink-0">{label}:</span>
        <span className="font-mono text-purple-700 bg-purple-50 px-2 py-0.5 rounded text-sm">{value}</span>
        <span className="text-gray-500 text-sm hidden sm:inline">— {desc}</span>
    </li>
);

export default BackendOverview;
