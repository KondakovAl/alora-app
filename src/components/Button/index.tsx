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
        <button>
          {children}
        </button>
        ) 
        : 
        (
        <a href={href} className={`button-container ${className ? `${className}-container` : ''} ${variant ? `--${variant}` : ''}`}
        onClick={onClick}>
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