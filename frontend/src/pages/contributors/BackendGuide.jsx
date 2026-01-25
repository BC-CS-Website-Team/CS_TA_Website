import { FaDatabase, FaServer, FaLock } from 'react-icons/fa';

const BackendGuide = () => {
    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-4">Backend Architecture</h1>
                <p className="text-lg text-gray-600">
                    Our backend is built with <strong>FastAPI</strong>, a modern, fast (high-performance), web framework for building APIs with Python 3.7+ based on standard Python type hints.
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
                <div className="border border-gray-200 rounded-lg p-6">
                    <div className="flex items-center mb-3">
                        <FaServer className="text-green-500 w-6 h-6 mr-3" />
                        <h3 className="font-bold text-gray-900">FastAPI</h3>
                    </div>
                    <p className="text-sm text-gray-600">
                        Handles HTTP requests, validation (Pydantic), and routing. Located in `backend/src/main.py` and other modules.
                    </p>
                </div>
                <div className="border border-gray-200 rounded-lg p-6">
                    <div className="flex items-center mb-3">
                        <FaDatabase className="text-blue-500 w-6 h-6 mr-3" />
                        <h3 className="font-bold text-gray-900">PostgreSQL</h3>
                    </div>
                    <p className="text-sm text-gray-600">
                        Our relational database. We use **SQLAlchemy** as our ORM to interact with it using Python classes.
                    </p>
                </div>
                <div className="border border-gray-200 rounded-lg p-6">
                    <div className="flex items-center mb-3">
                        <FaLock className="text-red-500 w-6 h-6 mr-3" />
                        <h3 className="font-bold text-gray-900">Auth</h3>
                    </div>
                    <p className="text-sm text-gray-600">
                        JWT based authentication. Passwords are hashed. See `backend/src/auth`.
                    </p>
                </div>
            </div>

            <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Project Structure</h2>
                <div className="bg-gray-900 text-gray-300 p-4 rounded-lg font-mono text-sm overflow-x-auto">
                    {`backend/src/
├── auth/            # Authentication logic & router
├── database.py      # DB connection & session handling
├── main.py          # Entry point, app initialization
├── models.py        # SQLAlchemy database models
└── config.py        # Env vars & settings`}
                </div>
            </section>

            <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Concepts</h2>

                <div className="space-y-6">
                    <div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">1. Dependency Injection</h3>
                        <p className="text-gray-600 mb-2">
                            FastAPI uses a powerful dependency injection system. You'll see `Depends()` used frequently in route functions.
                        </p>
                        <pre className="bg-gray-100 p-3 rounded text-sm overflow-x-auto">
                            {`def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.get("/items/")
def read_items(db: Session = Depends(get_db)):
    ...`}
                        </pre>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">2. Pydantic Models vs SQLAlchemy Models</h3>
                        <ul className="list-disc pl-5 text-gray-600 space-y-2">
                            <li><strong>SQLAlchemy Models (`models.py`):</strong> Represent tables in the database. Used for DB operations.</li>
                            <li><strong>Pydantic Schemas:</strong> Used for request/response validation. They define what JSON data the API expects and returns.</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">API Documentation</h2>
                <p className="text-gray-600 mb-4">
                    FastAPI automatically generates interactive API documentation.
                </p>
                <a
                    href="http://localhost:8000/docs"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700"
                >
                    Open Swagger UI (Localhost)
                </a>
            </section>
        </div>
    );
};

export default BackendGuide;
