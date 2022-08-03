import React from 'react';
import { CardsProps } from '../../types/types';

interface SolutionCardsProps {
    cards: CardsProps[];
    className?: string,
}

const SolutionCards = ({cards, className}:SolutionCardsProps) => {
    return (
        <div className={`${className ? `${className}__cards` : ''} cards`}>
            {cards.map((card, index) => (
                <div className={`${className ? `${className}__card` : ''} card`} key={index}>
                <div className="card__image-container">
                    <img src={card.img}  alt="" className="card__image" />
                </div>
                <span className="card__number">{card.id}</span>
                <h3 className="card__title">{card.title}</h3>
                <p className="card__text">{card.description}</p>
            </div> 
            ))}    
        </div>
    );
};

export {SolutionCards};