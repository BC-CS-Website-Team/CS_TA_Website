import React, { AnchorHTMLAttributes, ReactNode } from 'react';
import { Link as RouterLink, LinkProps as RouterLinkProps } from 'react-router-dom';

export interface LinkProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {
    to?: RouterLinkProps['to'];
    href?: string;
    children: ReactNode;
    className?: string;
    external?: boolean;
}

const Link: React.FC<LinkProps> = ({ to, href, children, className = '', external = false, ...props }) => {
    const baseStyle = "text-primary-600 hover:text-primary-800 transition-colors duration-200";
    const combinedClassName = `${baseStyle} ${className}`;

    if (external || href) {
        return (
            <a
                href={href || (to as string)}
                className={combinedClassName}
                target="_blank"
                rel="noopener noreferrer"
                {...props}
            >
                {children}
            </a>
        );
    }

    if (!to) {
        return null; // Safety check
    }

    return (
        <RouterLink to={to} className={combinedClassName} {...(props as Omit<RouterLinkProps, 'to'>)}>
            {children}
        </RouterLink>
    );
};

export default Link;
