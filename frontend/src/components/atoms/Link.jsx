import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const Link = ({ to, href, children, className = '', external = false, ...props }) => {
    const baseStyle = "text-primary-600 hover:text-primary-800 transition-colors duration-200";
    const combinedClassName = `${baseStyle} ${className}`;

    if (external || href) {
        return (
            <a
                href={href || to}
                className={combinedClassName}
                target="_blank"
                rel="noopener noreferrer"
                {...props}
            >
                {children}
            </a>
        );
    }

    return (
        <RouterLink to={to} className={combinedClassName} {...props}>
            {children}
        </RouterLink>
    );
};

Link.propTypes = {
    to: PropTypes.string,
    href: PropTypes.string,
    children: PropTypes.node,
    className: PropTypes.string,
    external: PropTypes.bool,
};

export default Link;
