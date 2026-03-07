/**
 * CodeBlock.tsx
 * Atom: A reusable code block with IDE-style syntax highlighting.
 * Uses react-syntax-highlighter with the "One Dark" theme for maximum readability.
 */

import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

interface CodeBlockProps {
    /** The code string to display. Use template literals for multi-line. */
    code: string;
    /** Programming language for syntax highlighting (e.g. "python", "typescript", "bash"). */
    language?: string;
    /** Optional file name label displayed above the block. */
    filename?: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ code, language = 'python', filename }) => {
    return (
        <div className="rounded-lg overflow-hidden border border-gray-700 shadow-2xl">
            {filename && (
                <div className="bg-gray-800 px-4 py-2 flex items-center gap-2 border-b border-gray-700">
                    <span className="text-xs font-mono text-gray-400">{filename}</span>
                </div>
            )}
            <SyntaxHighlighter
                language={language}
                style={atomOneDark}
                customStyle={{
                    margin: 0,
                    padding: '1.5rem',
                    fontSize: '0.875rem',
                    lineHeight: '1.65',
                    background: '#1a1d23',
                }}
                showLineNumbers={false}
                wrapLongLines={false}
            >
                {code.trim()}
            </SyntaxHighlighter>
        </div>
    );
};

export default CodeBlock;
