import React from 'react';
import { Heading, Text, CodeBlock } from '../../../components/atoms';

interface StepProps {
    number: number;
    title: string;
    children: React.ReactNode;
}

const Step: React.FC<StepProps> = ({ number, title, children }) => (
    <div className="flex gap-5">
        <div className="flex-shrink-0 flex items-center justify-center w-9 h-9 rounded-full bg-gray-800 text-white font-bold text-sm mt-1">
            {number}
        </div>
        <div className="space-y-3 w-full">
            <Heading level={3} className="text-lg">{title}</Heading>
            {children}
        </div>
    </div>
);

const WorkflowGit: React.FC = () => {
    return (
        <div className="animate-fade-in space-y-10">

            {/* Header */}
            <div>
                <Heading level={2} className="text-gray-900 mb-3">Git Workflow</Heading>
                <Text className="text-lg text-gray-600 max-w-3xl">
                    Git is how we collaborate without stepping on each other's work. The core rule is simple:
                    <strong> never commit directly to <code>main</code></strong>. Every change goes through its own branch and a pull request review.
                    Here is the full process from start to finish.
                </Text>
            </div>

            {/* The Golden Rule */}
            <div className="bg-blue-50 border-l-4 border-blue-500 p-5 rounded-r-lg">
                <Text className="text-sm text-blue-800">
                    <strong>The Golden Rule:</strong> One branch per feature. Small, focused pull requests. Descriptive commits.
                    Code that is easy to review gets merged faster — huge PRs with hundreds of changed files sit in review for days.
                </Text>
            </div>

            {/* Steps */}
            <div className="space-y-10">

                <Step number={1} title="Create a Branch for Your Feature">
                    <Text className="text-gray-600">
                        Before writing a single line of code, create a branch named after what you are working on.
                        Branch names should be lowercase with hyphens. Be specific — <code>add-opportunities-filter</code>
                        is better than <code>my-changes</code>.
                    </Text>
                    <CodeBlock language="bash" code={`git switch -c feature/your-feature-name

# Examples:
# git switch -c feature/add-opportunities-filter
# git switch -c fix/login-redirect-bug
# git switch -c docs/update-backend-guide`} />
                    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                        <Text className="text-sm text-yellow-800">
                            <strong>Tip:</strong> Use <code>feature/</code> for new features, <code>fix/</code> for bug fixes,
                            and <code>docs/</code> for documentation changes. This makes the branch list easy to scan.
                        </Text>
                    </div>
                </Step>

                <Step number={2} title="Check What You've Changed">
                    <Text className="text-gray-600">
                        Before committing, always run <code>git status</code> to see exactly which files have been modified,
                        added, or deleted. Never commit blindly.
                    </Text>
                    <CodeBlock language="bash" code={`git status

# You'll see output like:
# Changes not staged for commit:
#   modified:   src/pages/career/Opportunities.tsx
# Untracked files:
#   src/components/atoms/CodeBlock.tsx`} />
                </Step>

                <Step number={3} title="Stage Your Changes">
                    <Text className="text-gray-600">
                        Use <code>git add</code> to stage the files you want to include in your commit.
                        Stage everything at once with <code>.</code>, or stage individual files to keep your commits focused.
                    </Text>
                    <CodeBlock language="bash" code={`# Stage everything at once
git add .

# OR stage specific files (preferred for clean, focused commits)
git add src/pages/career/Opportunities.tsx
git add src/components/atoms/CodeBlock.tsx`} />
                </Step>

                <Step number={4} title="Commit with a Descriptive Message">
                    <Text className="text-gray-600">
                        A good commit message answers two questions: <strong>what</strong> changed, and <strong>why</strong>.
                        Start with a short summary. The goal is that anyone reading the Git history can understand what
                        happened without opening the code.
                    </Text>
                    <CodeBlock language="bash" code={`git commit -m "Add filter by type to Opportunities page"

# More examples of good commit messages:
# "Fix redirect loop after login when user was already authenticated"
# "Add CodeBlock atom with One Dark syntax highlighting"
# "Update Opportunity model to include deadline column"

# Avoid vague messages like:
# "fix stuff"  ← bad
# "changes"    ← bad
# "wip"        ← bad`} />
                    <div className="bg-gray-50 border border-gray-200 p-4 rounded-lg">
                        <Text className="text-sm text-gray-600">
                            <strong>Small commits are better.</strong> If your commit message needs the word "and"
                            (e.g., "add filter and fix bug and update readme"), you probably have three separate commits worth of work.
                            Smaller commits are easier to review, easier to revert if something goes wrong, and easier to understand.
                        </Text>
                    </div>
                </Step>

                <Step number={5} title="Push Your Branch to GitHub">
                    <Text className="text-gray-600">
                        Push your branch up to the remote repository. The first time you push a new branch,
                        you need to tell Git where to push it.
                    </Text>
                    <CodeBlock language="bash" code={`git push origin feature/your-feature-name

# If Git asks you to set an upstream, run:
# git push --set-upstream origin feature/your-feature-name`} />
                </Step>

                <Step number={6} title="Open a Pull Request on GitHub">
                    <Text className="text-gray-600">
                        Go to the repository on GitHub. You will see a banner at the top offering to create a pull request
                        from your recently pushed branch — click it. Fill in the title and description explaining what your
                        PR does and why. Then submit it for review.
                    </Text>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
                            <Heading level={4} className="text-sm mb-2 text-green-800">Good PR habits</Heading>
                            <ul className="list-disc pl-4 space-y-1 text-sm text-green-700">
                                <li>Link to the issue or task it addresses</li>
                                <li>Keep it focused on one feature or fix</li>
                                <li>Self-review before requesting a reviewer</li>
                                <li>Respond to review comments promptly</li>
                            </ul>
                        </div>
                        <div className="bg-red-50 border border-red-200 p-4 rounded-lg">
                            <Heading level={4} className="text-sm mb-2 text-red-800">What slows PRs down</Heading>
                            <ul className="list-disc pl-4 space-y-1 text-sm text-red-700">
                                <li>Too many files changed at once</li>
                                <li>Mixing unrelated changes in one PR</li>
                                <li>No description of what or why</li>
                                <li>Failing build or TypeScript errors</li>
                            </ul>
                        </div>
                    </div>
                </Step>

                <Step number={7} title="Keep Your Branch Up To Date">
                    <Text className="text-gray-600">
                        While your PR is in review, other changes may land on <code>main</code>. Pull them into your branch
                        periodically to avoid large merge conflicts later.
                    </Text>
                    <CodeBlock language="bash" code={`# Fetch the latest changes from GitHub
git fetch origin

# Merge main into your current branch
git merge origin/main

# Resolve any conflicts, then commit the merge`} />
                </Step>

            </div>

            {/* Quick Reference */}
            <div className="border border-gray-200 rounded-lg overflow-hidden">
                <div className="bg-gray-800 px-5 py-3">
                    <Text className="text-white font-semibold text-sm">Quick Reference — The Full Flow</Text>
                </div>
                <div className="p-0">
                    <CodeBlock language="bash" code={`# 1. Create your branch
git switch -c feature/my-feature

# 2. Make your changes, then check what changed
git status

# 3. Stage everything (or specific files)
git add .

# 4. Commit with a clear message
git commit -m "Describe what you did and why"

# 5. Push to GitHub
git push origin feature/my-feature

# 6. Go to GitHub → open a Pull Request → request a review`} />
                </div>
            </div>

        </div>
    );
};

export default WorkflowGit;
