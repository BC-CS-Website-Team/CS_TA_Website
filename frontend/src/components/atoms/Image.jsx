import React from 'react';
import PropTypes from 'prop-types';

const Image = ({ src, alt, className = '', onError, ...props }) => {
    return (
        <img
            src={src}
            alt={alt}
            className={`object-cover ${className}`}
            onError={onError}
            {...props}
        />
    );
};

Image.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    className: PropTypes.string,
    onError: PropTypes.func,
};

export default Image;
