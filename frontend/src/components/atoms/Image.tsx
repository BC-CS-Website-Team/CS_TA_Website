import React, { ImgHTMLAttributes } from 'react';

export interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
    src: string;
    alt: string;
    className?: string;
}

const Image: React.FC<ImageProps> = ({ src, alt, className = '', onError, ...props }) => {
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

export default Image;
