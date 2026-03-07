import React from 'react';
import { Heading, Text, CodeBlock } from '../../../components/atoms'; // removed card mar 7

const MODEL_CODE = `
# backend/src/opportunities/models.py

from sqlalchemy import Column, Integer, String, Boolean, DateTime, func, ForeignKey, Enum as SAEnum
from sqlalchemy.orm import relationship
from database import Base
from opportunities.constants import OpportunityType

class Opportunity(Base):
    __tablename__ = "opportunities"  # 1. The literal table name in PostgreSQL

    # 2. Primary Key — auto-increments on every insert
    id = Column(Integer, primary_key=True, index=True)

    # 3. Standard columns
    name = Column(String, nullable=True)
    in_house = Column(Boolean, default=False, nullable=True)

    # 4. Enum: restricts values to the OpportunityType class (e.g. "internship", "research")
    opportunity_type = Column(SAEnum(OpportunityType), nullable=True)

    # 5. Timestamp with an automatic server-side default
    date_added = Column(DateTime(timezone=True), server_default=func.now(), nullable=True)

    # 6. Foreign Key: stores the integer ID of the user who uploaded this
    opportunity_uploader_id = Column(Integer, ForeignKey("users.id"), nullable=True)

    # 7. Relationship: lets you do opportunity.opportunity_uploader to get the full User object
    opportunity_uploader = relationship("User", backref="opportunities")
`.trim();

const REGISTRY_CODE = `
# backend/src/models.py
# This is the ONLY file Alembic looks at to discover tables.
# Every model you create must be imported here.

from auth.models import User, Role
from opportunities.models import Opportunity

# When you add a new feature, add its import below:
from events.models import Event
`.trim();

const MIGRATION_1 = `cd backend && uv run alembic revision --autogenerate -m "Added Event table"`.trim();
const MIGRATION_2 = `uv run alembic upgrade head`.trim();
const SCHEMA_EXPORT = `uv run alembic upgrade head --sql > schema.sql`.trim();

const BackendDatabase: React.FC = () => {
    return (
        <div className="space-y-12 animate-fade-in">
            {/* Header */}
            <div>
                <Heading level={2} className="text-gray-900 mb-4">Database & Models</Heading>
                <Text className="text-lg max-w-3xl">
                    A practical guide to modifying the database schema. We use <strong>SQLAlchemy 2.0</strong> to define Python classes (Models) that represent PostgreSQL tables, and <strong>Alembic</strong> to translate those class changes into safe, version-controlled SQL migrations.
                </Text>
            </div>

            {/* Section 1: Real Model Example */}
            <section className="space-y-6">
                <Heading level={2}>1. How to Define a Table</Heading>
                <div className="space-y-4">
                    <Text className="text-gray-600">
                        Instead of raw SQL, we define tables as Python classes that extend <code>Base</code>. Here is the real, annotated <code>Opportunity</code> model from the codebase — every line is explained:
                    </Text>
                    <CodeBlock code={MODEL_CODE} language="python" filename="backend/src/opportunities/models.py" />

                    <div className="grid md:grid-cols-2 gap-6 mt-4">
                        <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
                            <Heading level={4} className="text-md mb-2 text-gray-800">nullable vs default</Heading>
                            <Text className="text-sm text-gray-600">
                                <code>nullable=True</code> means a row can exist with this column as NULL (empty).
                                <code>default=False</code> sets a Python-level fallback before saving.
                                Use <code>nullable=False</code> when a value is required.
                            </Text>
                        </div>
                        <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
                            <Heading level={4} className="text-md mb-2 text-gray-800">ForeignKey vs relationship</Heading>
                            <Text className="text-sm text-gray-600">
                                <code>ForeignKey("users.id")</code> enforces the link at the SQL level — it stores an integer.
                                <code>relationship("User")</code> goes further and lets you access the full <code>User</code> Python object in your code without an extra query.
                            </Text>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 2: Registration */}
            <section className="space-y-6">
                <Heading level={2}>2. Registering New Models (Critical Step)</Heading>
                <div className="space-y-4">
                    <Text>
                        Every new model file must be registered in the central barrel file at{' '}
                        <code className="text-red-600 font-bold bg-red-50 px-1 py-0.5 rounded">backend/src/models.py</code>.
                        Alembic only inspects this one file to detect what tables should exist.
                    </Text>
                    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                        <Text className="text-sm text-yellow-800 font-bold">
                            If you create a new <code>models.py</code> file for a feature and skip this step, Alembic will silently ignore it and your table will never be created.
                        </Text>
                    </div>
                    <CodeBlock code={REGISTRY_CODE} language="python" filename="backend/src/models.py — Barrel Registry" />
                </div>
            </section>

            {/* Section 3: Workflow */}
            <section className="space-y-6">
                <Heading level={2}>3. Applying Changes to the Database</Heading>
                <Text>
                    Once your Python model is written and registered, run these two commands from the <code>backend/</code> directory:
                </Text>

                <div className="space-y-8">
                    <div className="flex gap-4">
                        <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-gray-800 text-white font-bold text-sm">1</div>
                        <div className="space-y-2 w-full">
                            <Heading level={3} className="text-lg">Generate the Migration File</Heading>
                            <Text className="text-sm text-gray-500">
                                Alembic compares your Python models against the current database state and generates a patch file inside <code>backend/alembic/versions/</code>.
                            </Text>
                            <CodeBlock code={MIGRATION_1} language="bash" />
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-gray-800 text-white font-bold text-sm">2</div>
                        <div className="space-y-2 w-full">
                            <Heading level={3} className="text-lg">Apply the Migration</Heading>
                            <Text className="text-sm text-gray-500">
                                Executes the generated SQL, actually altering your PostgreSQL database to match the new schema.
                            </Text>
                            <CodeBlock code={MIGRATION_2} language="bash" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 4: Verify */}
            <section className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <Heading level={3} className="text-lg text-gray-700 mb-3">Inspecting the Raw SQL</Heading>
                <Text className="mb-4 text-sm">
                    To preview exactly what SQL Alembic would run — without actually running it — export it to a file:
                </Text>
                <CodeBlock code={SCHEMA_EXPORT} language="bash" />
            </section>

        </div>
    );
};

export default BackendDatabase;
