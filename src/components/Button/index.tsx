import React from 'react';

interface ButtonProps {
    children: React.ReactNode;
    className?: string;
    variant?: 'light' | 'purple';
    isForm?: boolean;
    href?: string;
    onClick?: () => void;
}

const Button = ({className, variant, isForm ,children, href, onClick} : ButtonProps) => {
    return (
        <>
        {isForm ? (
        <button className={`button ${className ? className : ''} ${isForm ? `--form `: ''}`} onClick={onClick}>
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