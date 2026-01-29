import React from 'react';
import PropTypes from 'prop-types';

const Text = ({ as = 'p', children, className = '', ...props }) => {
    const Tag = as;
    return (
        <Tag className={`text-gray-600 ${className}`} {...props}>
            {children}
        </Tag>
    );
};

Text.propTypes = {
    as: PropTypes.oneOf(['p', 'span', 'div', 'label']),
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
};

export default Text;
