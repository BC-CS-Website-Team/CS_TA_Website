import React, { ReactNode, HTMLAttributes } from 'react';

export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
    level?: 1 | 2 | 3 | 4 | 5 | 6;
    children: ReactNode;
    className?: string;
}

const Heading: React.FC<HeadingProps> = ({ level = 1, children, className = '', ...props }) => {
    const Tag = `h${level}` as Extract<keyof JSX.IntrinsicElements, 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'>;

    // Base styles for each level (can be overridden by className)
    const baseStyles = {
        1: 'text-4xl font-bold',
        2: 'text-3xl font-bold',
        3: 'text-2xl font-bold',
        4: 'text-xl font-bold',
        5: 'text-lg font-bold',
        6: 'text-base font-bold',
    };

    return (
        <Tag className={`${baseStyles[level]} ${className}`} {...props}>
            {children}
        </Tag>
    );
};



export default Heading;
