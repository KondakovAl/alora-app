import React from 'react';

interface ButtonProps {
    children: React.ReactNode;
    className?: string;
    variant?: 'light' | 'purple';
    href: string;
}

const Button = ({className, variant, children, href} : ButtonProps) => {
    return (
        <a href={href} className={`button-container ${className ? `${className}-container` : ''} ${variant ? `--${variant}` : ''}`}>
        <span className={`button ${className ? className : ''}`}>
            {children}
        </span>
        </a>
    );
};

export {Button};