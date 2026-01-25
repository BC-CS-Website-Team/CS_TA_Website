import React from 'react';
import PropTypes from 'prop-types';

const Heading = ({ level = 1, children, className = '', ...props }) => {
    const Tag = `h${level}`;

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

Heading.propTypes = {
    level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
};

export default Heading;
