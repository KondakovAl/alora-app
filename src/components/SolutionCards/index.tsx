import React, { useEffect, useRef, useState } from 'react';
import { CardsProps } from '../../types/types';

interface SolutionCardsProps {
  cards: CardsProps[];
  className?: string;
}

const SolutionCards = ({ cards, className }: SolutionCardsProps) => {
  const [isAnimated, setIsAnimated] = useState<undefined | boolean>();

  const animRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        setIsAnimated(true);
      }
    });
    observer.observe(animRef.current!);
  }, []);

  return (
    <div
      className={`${className ? `${className}__cards` : ''} cards`}
      ref={animRef}
    >
      {cards.map((card, index) => (
        <div
          className={`${className ? `${className}__card` : ''} card ${
            isAnimated ? `--animated` : ''
          }`}
          style={
            isAnimated
              ? { transitionDelay: `${index * 0.5}s` }
              : { transitionDelay: '0s' }
          }
          key={index}
        >
          <div className='card__image-container'>
            <img src={card.img} alt='' className='card__image' />
          </div>
          <span className='card__number'>{card.id}</span>
          <h3 className='card__title'>{card.title}</h3>
          <p className='card__text'>{card.description}</p>
        </div>
      ))}
    </div>
  );
};

export { SolutionCards };
