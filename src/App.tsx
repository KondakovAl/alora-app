import React from 'react';

/* components */
import  HeadOfBlock  from './components/HeadOfBlock/index';
import  {Button}  from './components/Button/index';

/* scss */
import './assets/scss/index.scss';

/* images */
import { 
  logo, 
  introLogo,
  introImg1,
  introImg2,
  introImg3,
  promoImg1,
  promoImg2,
  promoImg3,
  promoImg4,
  promoImg5,
  promoImg6,
  SocialFirst,
  SocialSecond 
} from './images/index';

import { HeadProps } from './types/types';




const data = {
  header: {
    navigation:
      [
        {name: 'Work', href: ''},
        {name: 'Services', href: ''},
      ],
    contacts:
      [
        {name: '+1123 456 7890', href: 'tel:+1123 456 7890'},
        {name: 'hello@medium.com', href: 'mailto:hello@medium.com'},
        {name: `Let's talk`, href: ''},
    ],
    socials:
      [
        {icon: <SocialFirst fill='#373C42'/>, href: ''},
        {icon: <SocialSecond fill='#373C42'/>, href: ''},
    ]
  },
  intro: {
    header: {
      title: {
        date: '2016-22', 
        logo: introLogo, 
        title: 'Allora = design + thinking' 
      },
      subtitle: 'Award winning digital design agency based in California',
      description: 'Allora is a beautiful and simple Webflow Portfolio Template for those creatives and digital studios that want to have a powerful yet simple website where they can showcase their work and services. Allora. is the perfect fit for your business.',
    },
    images: [
      {image: introImg1, alt: 'intro-image_1'},
      {image: introImg2, alt: 'intro-image_1'},
      {image: introImg3, alt: 'intro-image_1'},
    ]
  },
  promo: {
    images: [
      {image: promoImg1, alt: 'promo-image_1', href: ''},
      {image: promoImg2, alt: 'promo-image_2', href: ''},
      {image: promoImg3, alt: 'promo-image_3', href: ''},
      {image: promoImg4, alt: 'promo-image_4', href: ''},
      {image: promoImg5, alt: 'promo-image_5', href: ''},
      {image: promoImg6, alt: 'promo-image_6', href: ''},
    ]
  },
  solutions: {
    header: {
      title: 'beautiful creative solutions',
      subtitle: 'Expect nothing less than perfect',
      description: 'Setting up your own portfolio site is an awesome method for communicating who you are as an inventive, and to impart your abilities to the world. How about we investigate how to make a free portfolio and all that you ought to remember for it.',
      link: 'How we work',
    }
  },
  procedure: {
    header: {
      title: 'procedure',
      subtitle: `The goal isn't to build a website but to build your business`,
      description: 'The online portfolio works in a similar way in a user-friendly design it collects items that represent the best work you have done. This shows that you have a sense of responsibility and take your work seriously.',
      link: 'Know more about us',
    }
  },
  about: {
    header: {
      title: 'about medium',
      subtitle: `Creating ideas & building brands that truly matter`,
      description: `When building your own portfolio, don't feel that you need to include anything you have ever created. Plan your best work and show the types of projects you want to do more.`,
      link: 'Our core values',
    }
  },
  questions: {
    header: {
      title: 'Frequently Asked questions',
      subtitle: `Some questions you might have`,
      description: `Every project you have participated in is a unique journey from the initial spark of an idea to the final signing, there are personal challenges, problems that need to be solved.`,
      link: 'Our Clients',
    }
  },
  clients: {
    header: {
      title: 'Our Clients',
      subtitle: `Join world's best brands who trusted Allora`,
      description: `Most creative projects involve collaboration. People want to know what it’s going to be like working with you and how your skills and talents can help them.`,
      link: 'Start a project',
    }
  },
}

interface HeaderProps {
  header: {
    navigation: {
        name: string;
        href: string;
    }[];
    contacts: {
        name: string;
        href: string;
    }[];
    socials: {
        icon: JSX.Element;
        href: string;
    }[];}
}


const Header= ({header}: HeaderProps) => {
  return (
    <div className='header'>
      <div className="header__wrapper wrapper">
        <div className="header__logo-container">
          <img className="header__logo" src={logo}/>
        </div>
        <div className="header__menu">
          <nav className="header__navigation">
            {header.navigation.map((nav, index) => ( 
            <a className="header__navigation-item" href={nav.href} key={index}>{nav.name}</a>)
            )}
          </nav>
          <div className="header__contacts">
          {header.contacts.map((contact, index) => ( 
            <a className="header__contacts-item" href={contact.href} key={index}>{contact.name}</a>)
            )}
          </div>
          <div className="header__socials">
          {header.socials.map((social, index) => ( 
            <a className="header__socials-logo-container" href={social.href} key={index}>{social.icon}</a>)
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

interface IntroProps {
      header: {
          title: {
              date: string;
              logo: string;
              title: string;
          };
          subtitle: string;
          description: string;
      };
      images: {
        image: string;
        alt: string;
    }[];
  
}

const Intro = ({header, images}: IntroProps) => {
  return (
    <div className='intro'>
      <div className="intro__wrapper wrapper">
        <div className="intro__heading heading">
          <h1 className="heading__title">
            <span className="heading__title-text">{header.title.date}</span>
            <img src={header.title.logo} alt="icon" className="heading__title-icon" />
            <span className="heading__title-text">{header.title.title}</span>
          </h1>
          <h2 className="heading__subtitle">{header.subtitle}</h2>
          <p className="heading__text">{header.description}</p>
          <div className="heading__buttons">
         <Button className='heading__button' variant='light' href=''>Start a Project</Button>
         <Button className='heading__button' variant='purple' href=''>
         We're Hiring
         </Button>
          </div>
        </div>
        <div className="intro__image-container">
        {images.map((image, index) => ( 
            <img className="intro__image" src={image.image} key={index} alt={image.alt}/>)
            )}
        </div>
      </div>
    </div>
  );
};


interface PromoProps {
  images: {
    image: string;
    alt: string;
    href: string;
}[];

}

const Promo = ({images}: PromoProps) => {
return (
<div className='promo'>
  <div className="promo__wrapper wrapper">
  {images.map((image, index) => ( 
    <a className="promo__image-container" href={image.href}>
      <img className="promo__image" src={image.image} key={index} alt={image.alt}/>
    </a>)
            )}
  </div>
</div>
);
};

interface SolutionsProps {
  solutions: {
    header: HeadProps;
    }
}

const Solutions = ({solutions}: SolutionsProps) => {
  return (
    <div className='solutions'>
      <div className="solutions__wrapper wrapper">
        <HeadOfBlock header = {solutions.header} className = 'solutions' apperance = 'horizontal'/>
      </div>
    </div>
  );
};

interface ProcedureProps {
  procedure: {
    header: HeadProps;
  }
}

const Procedure = ({procedure}: ProcedureProps) => {
  return (
    <div className='procedure'>
      <div className="procedure__wrapper wrapper">
        <HeadOfBlock header = {procedure.header} className = 'procedure' apperance = 'horizontal'/>
      </div>
    </div>
  );
};

interface AboutProps {
  about: {
    header: HeadProps;
  }
}

const About = ({about}: AboutProps) => {
  return (
    <div className='about'>
      <div className="about__wrapper wrapper">
        <HeadOfBlock header = {about.header} className = 'about' apperance = 'vertical' color = 'light'/>
      </div>
    </div>
  );
};

interface QuestionsProps {
  questions: {
    header: HeadProps;
  }
}

const Questions = ({questions}: QuestionsProps) => {
  return (
    <div className='questions'>
      <div className="questions__wrapper wrapper">
        <HeadOfBlock header = {questions.header} className = 'questions' apperance = 'horizontal' color = 'dark'/>
      </div>
    </div>
  );
};

interface ClientsProps {
  clients: {
    header: HeadProps;
  }
}

const Clients = ({clients}: ClientsProps) => {
  return (
    <div className='clients'>
      <div className="clients__wrapper wrapper">
        <HeadOfBlock header = {clients.header} className = 'clients' apperance = 'vertical' color = 'light'/>
      </div>
    </div>
  );
};


const App = () => {
  return (
    <div className='layout'>
      <Header header={data.header} />
      <Intro header = {data.intro.header} images={data.intro.images}/>
      <Promo images={data.promo.images}/>
      <Solutions solutions = {data.solutions}/>
      <Procedure procedure = {data.procedure}/>
      <About about = {data.about}/>
      <Questions questions = {data.questions}/>
      <Clients clients = {data.clients}/>
    </div>
  );
};

export default App;