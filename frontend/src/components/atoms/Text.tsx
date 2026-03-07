import React, { ReactNode, HTMLAttributes } from 'react';

export interface TextProps extends HTMLAttributes<HTMLElement> {
    as?: 'p' | 'span' | 'div' | 'label';
    children: ReactNode;
    className?: string;
}

const Text: React.FC<TextProps> = ({ as = 'p', children, className = '', ...props }) => {
    const Tag = as as Extract<keyof JSX.IntrinsicElements, 'p' | 'span' | 'div' | 'label'>;
    return (
        <Tag className={`text-gray-600 ${className}`} {...props}>
            {children}
        </Tag>
    );
};

export default Text;
