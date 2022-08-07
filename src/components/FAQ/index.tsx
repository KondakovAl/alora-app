import React, {useState} from 'react';
import {Arrow} from '../../images/index';

const dataFAQ = {
    pagination: [
      {name: 'General inQuiries'},
      {name: 'Services'},
      {name: 'Billing & Support'},
    ],
    faq: [
      {
      category: ['General inQuiries'],
      question: 'Can you design my Website?',
      answer: 'Include large and wonderful examples of your work, not just provide a few lines of neat text about each project. Tell their story. Write a case study. Include examples of prototypes you created. Describe the steps they took and how your role ultimately helped your customers achieve their goals.',
      },
      {
      category: ['General inQuiries'],
      question: 'What kind of consulting do you offer?',
      answer: 'Include large and wonderful examples of your work, not just provide a few lines of neat text about each project. Tell their story. Write a case study. Include examples of prototypes you created. Describe the steps they took and how your role ultimately helped your customers achieve their goals.',
      },
      {
      category: ['General inQuiries'],
      question: 'Where are you located?',
      answer: 'Include large and wonderful examples of your work, not just provide a few lines of neat text about each project. Tell their story. Write a case study. Include examples of prototypes you created. Describe the steps they took and how your role ultimately helped your customers achieve their goals.',
      },
      {
      category: ['Billing & Support'],
      question: 'How do I set up a call?',
      answer: 'Include large and wonderful examples of your work, not just provide a few lines of neat text about each project. Tell their story. Write a case study. Include examples of prototypes you created. Describe the steps they took and how your role ultimately helped your customers achieve their goals.',
      },
      {
      category: ['General inQuiries'],
      question: 'Can you manage my social networks?',
      answer: 'Include large and wonderful examples of your work, not just provide a few lines of neat text about each project. Tell their story. Write a case study. Include examples of prototypes you created. Describe the steps they took and how your role ultimately helped your customers achieve their goals.',
      },
      {
      category: ['Services'],
      question: 'Can I get an estimated cost for your services?',
      answer: 'Include large and wonderful examples of your work, not just provide a few lines of neat text about each project. Tell their story. Write a case study. Include examples of prototypes you created. Describe the steps they took and how your role ultimately helped your customers achieve their goals.',
      },
      {
      category: ['Billing & Support'],
      question: 'Do you provide customer support?',
      answer: 'Include large and wonderful examples of your work, not just provide a few lines of neat text about each project. Tell their story. Write a case study. Include examples of prototypes you created. Describe the steps they took and how your role ultimately helped your customers achieve their goals.',
      },
      {
      category: ['Billing & Support'],
      question: 'What is your return policy?',
      answer: 'Include large and wonderful examples of your work, not just provide a few lines of neat text about each project. Tell their story. Write a case study. Include examples of prototypes you created. Describe the steps they took and how your role ultimately helped your customers achieve their goals.',
      },
      {
      category: ['Services'],
      question: 'How much traffic can the hosting handle?',
      answer: 'Include large and wonderful examples of your work, not just provide a few lines of neat text about each project. Tell their story. Write a case study. Include examples of prototypes you created. Describe the steps they took and how your role ultimately helped your customers achieve their goals.',
      },
    ]
  }

interface FAQItemProps {
    index: number;
    faq: {
        category: string[];
        question: string;
        answer: string;
    };
    variant: string;
    setVariant: Function;

}

const FAQItem = ({
    index,
    faq,
    variant,
    setVariant,
    } : FAQItemProps) => {

        const [isOpen, setIsOpen] = useState(true);
        
    return (
      <>
      {faq.category.includes(variant) && (
        <div className={`faq__item ${isOpen ? '--show' : ' '}`} 
               onClick={()=> {
               !isOpen && setIsOpen(true);
               }}
               key={index}
                >
                  
                 <h4 className="faq__question"
                  onClick={()=> {
                     setIsOpen(!isOpen);
                    }}
               >
                   {faq.question}
                   <div className="faq__icon-container">
                     <Arrow/>
                 </div>
                 </h4>
                  <p className="faq__answer">
                    {faq.answer}
                  </p>
                 </div> 
      )}
      </> 
    );
};


const FAQ = () => {

    const [variant, setVariant] = useState('General inQuiries');
  
    return (
      <>
        <ul className="pagination__list">
          {dataFAQ.pagination.map((pag, index) => (
            <li className={`pagination__list-item ${variant === pag.name ? '--active': ''}`} onClick={()=> setVariant(pag.name)} key={index}>{pag.name}</li>
          ))}
        </ul>
        <div className="faq">      
            {dataFAQ.faq.map((faq, index) => (
               <FAQItem index={index} faq={faq} variant={variant} setVariant={setVariant}/>
            ))}
        </div>
        </>
    );
  };

export {FAQ};