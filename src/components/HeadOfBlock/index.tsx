import React from 'react';

interface HeadOfBlockProps {
    header: {
        title: string;
        subtitle: string;
        description: string;
        link: string;
    }
    className?: string,
    apperance: 'horizontal' | 'vertical',
    color?: 'dark' | 'light',
}

const HeadOfBlock = ({ header, className,  apperance, color}:HeadOfBlockProps) => {
  return (
    <div className={`head ${className ? `head__${className}` : ''} --${apperance} ${color ? `--${color}` : ''}`}>
      {apperance === 'horizontal' && (
        <>
      <div className='head__container'>
        <h1 className='head__title'>{header.title}</h1>
        <h2 className='head__subtitle'>{header.subtitle}</h2>
      </div>
      <div className='head__container'>
        <p className='head__description'>{header.description}</p>
        <a className='head__link'>{header.link}</a>
      </div>
      </>
      )}
      {apperance === 'vertical' && (
        <>
        <h1 className='head__title'>{header.title}</h1>
        <h2 className='head__subtitle'>{header.subtitle}</h2>
        <p className='head__description'>{header.description}</p>
        <a className='head__link'>{header.link}</a>
      </>
      )}
    </div>
  );
};

export default HeadOfBlock;
