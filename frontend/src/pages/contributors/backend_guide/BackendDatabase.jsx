import React from 'react';
import { FaDatabase, FaTable, FaCode, FaTerminal, FaExclamationTriangle } from 'react-icons/fa';
import Heading from '../../../components/atoms/Heading';
import Text from '../../../components/atoms/Text';
import Card from '../../../components/atoms/Card';

const BackendDatabase = () => {
    return (
        <div className="space-y-12 animate-fade-in">
            {/* Header */}
            <div>
                <Heading level={2} className="text-gray-900 mb-4">Database & Migrations</Heading>
                <Text className="text-lg max-w-3xl">
                    A practical guide to modifying the database schema. We use <strong>SQLAlchemy</strong> for determining the structure and <strong>Alembic</strong> for applying changes safely.
                </Text>
            </div>

            {/* Section 1: Where to Edit */}
            <section className="space-y-6">
                <div className="flex items-center gap-4">
                    <div className="p-3 bg-blue-100 rounded-lg text-blue-600">
                        <FaTable className="w-6 h-6" />
                    </div>
                    <Heading level={2}>1. Where to Make Changes</Heading>
                </div>
                <div className="prose prose-lg text-gray-600 max-w-none">
                    <Text>
                        Tables are defined as Python classes (Models) inside the feature directories.
                    </Text>
                    <div className="grid md:grid-cols-2 gap-6 mt-6">
                        <Card className="p-6 border-l-4 border-blue-500">
                            <Heading level={4} className="mb-2">Auth & Users</Heading>
                            <code className="bg-gray-100 px-2 py-1 rounded text-sm text-blue-700">backend/src/auth/models.py</code>
                        </Card>
                        <Card className="p-6 border-l-4 border-green-500">
                            <Heading level={4} className="mb-2">New Features</Heading>
                            <code className="bg-gray-100 px-2 py-1 rounded text-sm text-green-700">
                                backend/src/[feature]/models.py
                            </code>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Section 2: Registration */}
            <section className="space-y-6">
                <div className="flex items-center gap-4">
                    <div className="p-3 bg-yellow-100 rounded-lg text-yellow-600">
                        <FaExclamationTriangle className="w-6 h-6" />
                    </div>
                    <Heading level={2}>2. Registering New Models (Crucial)</Heading>
                </div>
                <div className="space-y-4">
                    <Text>
                        We use a central <strong>Barrel File</strong> at <code className="text-red-500 font-bold">backend/src/models.py</code>.
                        Alembic only looks at this one file to discover tables.
                    </Text>
                    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                        <div className="flex">
                            <div className="ml-3">
                                <Text className="text-sm text-yellow-800 font-bold">
                                    If you create a NEW model file, you MUST add it to this registry, or Alembic will ignore it.
                                </Text>
                            </div>
                        </div>
                    </div>

                    <Card className="bg-gray-900 border-gray-800 text-gray-300 p-6 font-mono text-sm shadow-xl overflow-x-auto">
                        <pre>{`# backend/src/models.py

# Import all your models here so Alembic can see them:
from auth.models import User, Role
from opportunities.models import Opportunity

# ... add your new import here:
from new_feature.models import NewTable`}</pre>
                    </Card>
                </div>
            </section>

            {/* Section 3: Workflow */}
            <section className="space-y-6">
                <div className="flex items-center gap-4">
                    <div className="p-3 bg-purple-100 rounded-lg text-purple-600">
                        <FaTerminal className="w-6 h-6" />
                    </div>
                    <Heading level={2}>3. Migration Workflow</Heading>
                </div>
                <Text>
                    Once you have edited your Python models and registered them, run these commands in the <code>backend/</code> directory.
                </Text>

                <div className="space-y-8">
                    <div className="flex gap-4">
                        <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-gray-200 text-gray-600 font-bold text-sm">1</div>
                        <div className="space-y-2 w-full">
                            <Heading level={3} className="text-lg">Generate Migration Script</Heading>
                            <Text className="text-sm text-gray-500">Creates a new Python file in `migrations/versions` describing your changes.</Text>
                            <Card className="bg-gray-800 text-green-400 p-4 font-mono text-sm">
                                uv run alembic revision --autogenerate -m "Describe change"
                            </Card>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-gray-200 text-gray-600 font-bold text-sm">2</div>
                        <div className="space-y-2 w-full">
                            <Heading level={3} className="text-lg">Apply Changes (Upgrade)</Heading>
                            <Text className="text-sm text-gray-500">Executes the SQL to update your local database.</Text>
                            <Card className="bg-gray-800 text-green-400 p-4 font-mono text-sm">
                                uv run alembic upgrade head
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 4: Visualization */}
            <section className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <div className="flex items-center gap-3 mb-4">
                    <FaCode className="text-gray-400" />
                    <Heading level={3} className="text-lg text-gray-700">Visualizing the Schema</Heading>
                </div>
                <Text className="mb-3 text-sm">
                    To see the raw SQL that creates your current database structure without running it:
                </Text>
                <code className="bg-white border border-gray-300 px-3 py-2 rounded text-sm text-gray-600 block w-fit">
                    uv run alembic upgrade head --sql {'>'} schema.sql
                </code>
            </section>

        </div>
    );
};

export default BackendDatabase;
