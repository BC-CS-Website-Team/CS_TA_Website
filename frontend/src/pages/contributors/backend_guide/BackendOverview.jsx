import React from 'react';
import { FaDatabase, FaServer, FaLock, FaPython, FaCode, FaShieldAlt } from 'react-icons/fa';
import Heading from '../../../components/atoms/Heading';
import Text from '../../../components/atoms/Text';
import Card from '../../../components/atoms/Card';
import Badge from '../../../components/atoms/Badge';
import Link from '../../../components/atoms/Link';

const BackendOverview = () => {
    return (
        <div className="space-y-16">

            {/* Header */}
            <header className="border-b border-gray-200 pb-10">
                <Heading level={2} className="text-gray-900 mb-6">Backend Architecture Explained</Heading>
                <div className="prose prose-lg text-gray-600 max-w-none">
                    <Text className="text-xl leading-relaxed">
                        This document serves as the master guide for the backend of the CS TA Website.
                        It details the technology stack, security measures, architectural decisions, and setup instructions in depth.
                        Unlike a simple list of tools, this guide explains <em>why</em> we chose them and <em>how</em> they work together.
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
                <div className="flex items-center gap-4">
                    <div className="p-3 bg-blue-100 rounded-lg text-blue-600">
                        <FaPython className="w-6 h-6" />
                    </div>
                    <Heading level={2}>1. Technology Stack</Heading>
                </div>
                <div className="prose prose-lg text-gray-600 max-w-none space-y-4">
                    <Text>
                        We utilize a modern, high-performance Python stack designed explicitly for speed (async I/O) and scalability.
                    </Text>
                    <ul className="list-none space-y-4 pl-0">
                        <StackItem label="Language" value="Python 3.13+" desc="We use the latest stable Python for performance improvements and strict type hinting." />
                        <StackItem label="Framework" value="FastAPI" desc="Chosen for its exceptional performance (Starlette), standardization (OpenAPI), and developer experience (Pydantic)." />
                        <StackItem label="Database ORM" value="SQLAlchemy 2.0" desc="The industry standard for Python ORMs. We use the 2.0 Async syntax for non-blocking database queries." />
                        <StackItem label="Database Driver" value="asyncpg" desc="The fastest asynchronous PostgreSQL driver available for Python." />
                        <StackItem label="Validation" value="Pydantic v2" desc="Written in Rust, it provides extremely fast data validation and settings management." />
                    </ul>
                </div>
            </section>

            {/* Section 2: Architecture */}
            <section className="space-y-6">
                <div className="flex items-center gap-4">
                    <div className="p-3 bg-green-100 rounded-lg text-green-600">
                        <FaServer className="w-6 h-6" />
                    </div>
                    <Heading level={2}>2. Server Architecture: Domain-Driven Design</Heading>
                </div>
                <div className="prose prose-lg text-gray-600 max-w-none space-y-6">
                    <Text>
                        The codebase is organized by <strong>Feature Domain</strong> rather than technical layer (e.g., controllers/models).
                        This keeps related logic together, making the codebase easier to navigate and maintain as it grows.
                    </Text>

                    <Card className="bg-gray-900 border-gray-800 text-gray-300 p-6 font-mono text-sm shadow-xl overflow-x-auto">
                        <pre>{`backend/src/
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
    └── ...            # Same structure as auth`}</pre>
                    </Card>

                    <div className="grid md:grid-cols-2 gap-6 mt-4">
                        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                            <Heading level={3} className="text-lg mb-2">Centralized Registry</Heading>
                            <Text className="text-sm">
                                Note `src/models.py`. It imports all models from sub-domains (`auth`, `opportunities`).
                                Alembic only needs to look at this one file to see the entire database schema.
                            </Text>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                            <Heading level={3} className="text-lg mb-2">Service Layer</Heading>
                            <Text className="text-sm">
                                Complex business logic (calculations, heavy data processing) lives in `service.py`,
                                keeping distinct separation from the API routes in `router.py`.
                            </Text>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 3: Security */}
            <section className="space-y-6">
                <div className="flex items-center gap-4">
                    <div className="p-3 bg-purple-100 rounded-lg text-purple-600">
                        <FaShieldAlt className="w-6 h-6" />
                    </div>
                    <Heading level={2}>3. Security & Encryption</Heading>
                </div>
                <div className="prose prose-lg text-gray-600 max-w-none space-y-8">
                    <Text>
                        Security is a core priority. We do not "roll our own" crypto; we strictly use industry-recommended algorithms and libraries alongside standard protocols.
                    </Text>

                    <div>
                        <Heading level={3} className="text-xl text-gray-800 mb-3">Password Hashing: Argon2</Heading>
                        <Text className="mb-4">
                            We use <strong>Argon2</strong> (via `argon2-cffi`), which is the winner of the Password Hashing Competition (PHC) and recommended by OWASP.
                        </Text>
                        <ul className="list-disc pl-5 space-y-2">
                            <li><strong>Storage:</strong> We strictly store the <em>hash</em>, never the plain password.</li>
                            <li><strong>Salting:</strong> Every password is salted with a unique random string before hashing, preventing rainbow table attacks.</li>
                            <li><strong>Verification:</strong> When logging in, we re-hash the input and compare it to the stored hash in constant time to prevent timing attacks.</li>
                        </ul>
                    </div>

                    <div>
                        <Heading level={3} className="text-xl text-gray-800 mb-3">Stateless Authentication: JWT</Heading>
                        <Text className="mb-4">
                            We use <strong>JSON Web Tokens (JWT)</strong> for stateless authentication. This means the server does not need to look up a session in the database for every single request, greatly improving performance.
                        </Text>
                        <ol className="list-decimal pl-5 space-y-2">
                            <li><strong>Issue:</strong> Upon login, the server signs a JWT using a <code>SECRET_KEY</code> (HMAC-SHA256). This token contains the user's ID and an expiration.</li>
                            <li><strong>Access:</strong> The frontend sends this token in the <code>Authorization: Bearer</code> header for every protected request.</li>
                            <li><strong>Validation:</strong> The backend cryptographically validates the signature. If valid, the request is processed.</li>
                        </ol>
                    </div>

                    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                        <div className="flex">
                            <div className="ml-3">
                                <Text className="text-sm text-yellow-800">
                                    <strong>CORS Protection:</strong> We implement strict Cross-Origin Resource Sharing policies. Only trusted frontend origins (like this website) are allowed to communicate with the API.
                                </Text>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* Section 4: Getting Started */}
            <section className="space-y-6">
                <div className="flex items-center gap-4">
                    <div className="p-3 bg-indigo-100 rounded-lg text-indigo-600">
                        <FaCode className="w-6 h-6" />
                    </div>
                    <Heading level={2}>4. How to Start Developing</Heading>
                </div>

                <div className="space-y-8 mt-4">
                    <div className="flex gap-4">
                        <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-gray-200 text-gray-600 font-bold text-sm">1</div>
                        <div className="space-y-2">
                            <Heading level={3} className="text-lg">Environment Setup</Heading>
                            <Text>
                                The application will not start without secrets. Copy the example environment file:
                            </Text>
                            <code className="bg-gray-100 px-2 py-1 rounded text-sm block w-fit mt-2">cp backend/.env.example backend/.env</code>
                            <Text className="text-sm text-gray-500 mt-2">Then edit <code>backend/.env</code> to include your database credentials.</Text>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-gray-200 text-gray-600 font-bold text-sm">2</div>
                        <div className="space-y-2">
                            <Heading level={3} className="text-lg">Database Migrations</Heading>
                            <Text>
                                Initialize your database tables using Alembic. This ensures your local DB matches the code.
                            </Text>
                            <code className="bg-gray-100 px-2 py-1 rounded text-sm block w-fit mt-2">cd backend && uv run alembic upgrade head</code>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-gray-200 text-gray-600 font-bold text-sm">3</div>
                        <div className="space-y-2">
                            <Heading level={3} className="text-lg">Run the Server</Heading>
                            <Text>
                                Start the hot-reloading development server:
                            </Text>
                            <code className="bg-gray-100 px-2 py-1 rounded text-sm block w-fit mt-2">uv run fastapi dev src/main.py</code>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

// Helper component for clean detailed list items
const StackItem = ({ label, value, desc }) => (
    <li className="flex flex-col sm:flex-row sm:items-baseline gap-2 border-b border-gray-100 pb-2 last:border-0">
        <span className="font-semibold text-gray-900 w-40 flex-shrink-0">{label}:</span>
        <span className="font-mono text-purple-700 bg-purple-50 px-2 py-0.5 rounded text-sm">{value}</span>
        <span className="text-gray-500 text-sm hidden sm:inline">- {desc}</span>
    </li>
);

export default BackendOverview;
