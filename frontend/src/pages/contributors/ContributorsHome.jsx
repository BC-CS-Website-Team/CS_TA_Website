import { Link } from 'react-router-dom';
import { FaGithub, FaReact, FaPython } from 'react-icons/fa';

const ContributorsHome = () => {
    return (
        <div className="space-y-8">
            <div className="text-center max-w-2xl mx-auto">
                <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl mb-4">
                    Become a Contributor
                </h1>
                <p className="text-lg text-gray-600">
                    Welcome to the CS TA Website project! This guide is designed to take you from "I don't know React" to "I just merged my first PR."
                </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
                <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
                    <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-4 text-2xl">
                        <FaReact />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Frontend</h3>
                    <p className="text-gray-600 mb-4 text-sm">
                        Learn how we use React, Vite, and Atomic Design to build reusable components.
                    </p>
                    <Link to="/contributors/frontend" className="text-blue-600 font-medium hover:text-blue-800 text-sm">
                        Explore Frontend &rarr;
                    </Link>
                </div>

                <div className="bg-green-50 rounded-xl p-6 border border-green-100">
                    <div className="w-12 h-12 bg-green-100 text-green-600 rounded-lg flex items-center justify-center mb-4 text-2xl">
                        <FaPython />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Backend</h3>
                    <p className="text-gray-600 mb-4 text-sm">
                        Understand how FastAPI and SQLAlchemy power our database and API endpoints.
                    </p>
                    <Link to="/contributors/backend" className="text-green-600 font-medium hover:text-green-800 text-sm">
                        Explore Backend &rarr;
                    </Link>
                </div>

                <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                    <div className="w-12 h-12 bg-gray-200 text-gray-700 rounded-lg flex items-center justify-center mb-4 text-2xl">
                        <FaGithub />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Workflow</h3>
                    <p className="text-gray-600 mb-4 text-sm">
                        Learn the git flow, how to run Docker, and how to submit your first Pull Request.
                    </p>
                    <Link to="/contributors/workflow" className="text-gray-600 font-medium hover:text-gray-900 text-sm">
                        View Workflow &rarr;
                    </Link>
                </div>
            </div>

            <div className="prose prose-blue max-w-none mt-12">
                <h2>Why Contribute?</h2>
                <ul>
                    <li><strong>Gain Real World Experience:</strong> Work on a live production application used by hundreds of students.</li>
                    <li><strong>Learn Modern Tech Stack:</strong> specific experience with React, FastAPI, Docker, and PostgreSQL is highly employable.</li>
                    <li><strong>Leave a Legacy:</strong> Your code will help future generations of CS students.</li>
                </ul>

                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6">
                    <div className="flex">
                        <div className="flex-shrink-0">
                            <svg className="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <div className="ml-3">
                            <p className="text-sm text-yellow-700">
                                <strong>New here?</strong> Don't worry if you break something locally. That's what `git reset --hard` is for!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContributorsHome;
