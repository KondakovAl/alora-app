import React from 'react';

interface ButtonProps {
    children: React.ReactNode;
    className?: string;
    variant: 'light' | 'purple' | 'form';
    href?: string;
    onClick?: () => void;
}

const Button = ({className, variant, children, href, onClick} : ButtonProps) => {
    return (
        <>
        {variant === 'form' ? (
        <button className={`button ${className ? className : ''} ${variant ? `--${variant}` : ''}`} onClick={onClick}>
          {children}
        </button>
        ) 
        : 
        (
        <a href={href} className={`button-container ${className ? `${className}-container` : ''} ${variant ? `--${variant}` : ''}`}
        >
        <span className={`button ${className ? className : ''}`}>
            {children}
        </span>
        </a>
        )
        }
       </> 
    );
};

export {Button};