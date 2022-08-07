import React, { useState } from 'react';

/* components */
import  {Button}  from './components/Button/index';
import  {HeadOfBlock}  from './components/HeadOfBlock/index';
import  {SolutionCards}  from './components/SolutionCards/index';
import  {AboutComments}  from './components/AboutComments/index';
import { FAQ } from './components/FAQ/index';

/* scss */
import './assets/scss/index.scss';

/*video*/
import  video  from './assets/files/video.mp4';

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
  solutionImg1,
  solutionImg2,
  solutionImg3,
  solutionImg4,
  solutionImg5,
  SocialFirst,
  SocialSecond, 
  aboutImg1,
  aboutPhoto1,
  aboutPhoto2,
  ClientsLogo1,
  ClientsLogo2,
  ClientsLogo3,
  ClientsLogo4,
  ClientsLogo5,
  ClientsLogo6,
  ClientsLogo7,
  ClientsLogo8,
  ClientsLogo9,
  clientsPoster,
  Arrow,
} from './images/index';

import { HeadProps, CardsProps, CommentsProps } from './types/types';



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
    },
    cards: [
      {
      img: solutionImg1,
      id: '01',
      title: 'Web Design',
      description: 'Why investment portfolio is important to your career Allora can help you get your work noticed whether you are a graphic designer, product designer, web developer, writer, illustrator.',
    },
      {
      img: solutionImg2,
      id: '02',
      title: 'Branding',
      description: 'The portfolio website provides visibility for your work showing it to the people you want to see unlike the static black and white of traditional resumes online portfolios bring your work to life.',
    },
      {
      img: solutionImg3,
      id: '03',
      title: 'UI/UX Design',
      description: 'In full color it makes your participation in creative output a positive and direct experience. Potential clients and employers can immediately see your achievements and your uniqueness.',
    },
      {
      img: solutionImg4,
      id: '04',
      title: 'Creative Direction',
      description: 'The personal portfolio shows them your identity as a creative professional, the ideas behind your work and whether you are suitable for a particular job or project, put your work out in the world!',
    },
      {
      img: solutionImg5,
      id: '05',
      title: 'Motion Graphics',
      description: 'The portfolio conveys who you are most of us don’t come to a job interview with a bunch of unordered printouts you have to be ready get ready with Allora your best online alley.',
    },
  ]
  },
  procedure: {
    header: {
      title: 'procedure',
      subtitle: `The goal isn't to build a website but to build your business`,
      description: 'The online portfolio works in a similar way in a user-friendly design it collects items that represent the best work you have done. This shows that you have a sense of responsibility and take your work seriously.',
      link: 'Know more about us',
    },
    list: [
      {
      id: '01',
      item: `Goal Identification`,
      },
      {
      id: '02',
      item: `Scope Definition`,
      },
      {
      id: '03',
      item: `Sitemap and Wireframe Creation`,
      },
      {
      id: '04',
      item: `Content Creation`,
      },
      {
      id: '05',
      item: `Visual Elements`,
      },
      {
      id: '06',
      item: `Testing & Launch`,
      },
  ]
  },
  about: {
    header: {
      title: 'about medium',
      subtitle: `Creating ideas & building brands that truly matter`,
      description: `When building your own portfolio, don't feel that you need to include anything you have ever created. Plan your best work and show the types of projects you want to do more.`,
      link: 'Our core values',
    },
    image: aboutImg1,
    comments: [
      {
      photo: aboutPhoto1,
      name: 'Lindsay Strotman',
      position: 'CEO of Edition',
      comment: '"Allora fits our needs perfectly is the most valuable business resource we have ever purchased we are so happy!"',
      },
      {
      photo: aboutPhoto2,
      name: 'Robert Keynton',
      position: 'Designer at Webflow',
      comment: '"Allora has completely surpassed our expectations not able to tell you how happy I am with your awesome work guys."',
      },
  ]
  },
  questions: {
    header: {
      title: 'Frequently Asked questions',
      subtitle: `Some questions you might have`,
      description: `Every project you have participated in is a unique journey from the initial spark of an idea to the final signing, there are personal challenges, problems that need to be solved.`,
      link: 'Our Clients',
    }
  },
  contacts: {
      header: {
        title: 'Contact Us',
        subtitle: `Dedicated to serve our customers`,
        description: `Branding isn’t only for big companies. Whether you’re a retail giant or a freelancer, branding shows your value and how you’re different from the competition.`,
        link: '',
      },
      contact: [
        {
          id: '01',
          title: 'Collaborate',
          description: `If you're ready to start a project, fill up the form below and our team will be in touch to find out more.`,
          link: 'hello@allora.com',
          href: 'mailto:hello@allora.com',
          blockType: 'form',
        },
        {
          id: '01',
          title: 'Join our team',
          description: `We're always looking for talented new members that push us to be bolder, dream bigger, and perform better.`,
          link: 'team@allora.com',
          href: 'mailto:team@allora.com',
          blockType: 'idle',
        },
        {
          id: '01',
          title: 'Just say hello',
          description: `Used as a greeting or to begin a phone conversation, so here are the details to do so.`,
          link: 'Call us on +1123 456 7890',
          href: 'tel:+1123 456 7890',
          blockType: 'adress',
        },
      ]
  },
  clients: {
    header: {
      title: 'Our Clients',
      subtitle: `Join world's best brands who trusted Allora`,
      description: `Most creative projects involve collaboration. People want to know what it’s going to be like working with you and how your skills and talents can help them.`,
      link: 'Start a project',
    },
    logos: [
      {logo: <ClientsLogo1 fill='#fff'/>, href: ''},
      {logo: <ClientsLogo2 fill='#fff'/>, href: ''},
      {logo: <ClientsLogo3 fill='#fff'/>, href: ''},
      {logo: <ClientsLogo4 fill='#fff'/>, href: ''},
      {logo: <ClientsLogo5 fill='#fff'/>, href: ''},
      {logo: <ClientsLogo6 fill='#fff'/>, href: ''},
      {logo: <ClientsLogo7 fill='#fff'/>, href: ''},
      {logo: <ClientsLogo8 fill='#fff'/>, href: ''},
      {logo: <ClientsLogo9 fill='#fff'/>, href: ''},
    ]
  },
  links: {
    title: 'Usefull Links',
    navigation:
      [
        {name: 'Work', href: ''},
        {name: 'Services', href: ''},
        {name: 'About us', href: ''},
        {name: 'Send us a message', href: ''},
      ],
    contacts:
      [
        {name: '+1123 456 7890', href: 'tel:+1123 456 7890'},
        {name: 'hello@medium.com', href: 'mailto:hello@medium.com'},
    ],
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
    cards: CardsProps[];
    }
}

const Solutions = ({solutions}: SolutionsProps) => {
  return (
    <div className='solutions'>
      <div className="solutions__wrapper wrapper">
        <HeadOfBlock header = {solutions.header} className = 'solutions' apperance = 'horizontal'/>
        <SolutionCards cards = {solutions.cards} className = 'solutions'/>
      </div>
    </div>
  );
};

interface ProcedureProps {
  procedure: {
    header: HeadProps;
    list: {
      id: string;
      item: string;
  }[];
  }
}

const Procedure = ({procedure}: ProcedureProps) => {
  return (
    <div className='procedure'>
      <div className="procedure__wrapper wrapper">
        <HeadOfBlock header = {procedure.header} className = 'procedure' apperance = 'horizontal'/>
        <ul className="procedure__list">
          {procedure.list.map((l,index) => (
            <li className="procedure__list-item" key={index}>
              <span className="procedure__list-item_number">{l.id}</span>
              {l.item}</li>
          ))}
          
        </ul>
      </div>
    </div>
  );
};

interface AboutProps {
  about: {
    header: HeadProps;
    image: string;
    comments: CommentsProps[];
  }
}

const About = ({about}: AboutProps) => {
  return (
    <div className='about'>
      <div className="about__wrapper wrapper">
        <HeadOfBlock header = {about.header} className = 'about' apperance = 'vertical' color = 'light'/>
        <div className="about__image-container">
          <img src={about.image} alt="" className="about__image" />
          </div>
          <AboutComments comments = {about.comments} className='about'/>
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
        <div className="questions__container">
          <FAQ/>
        </div>
      </div>
    </div>
  );
};

interface ClientsProps {
  header: HeadProps;
  logos: {
    logo: JSX.Element;
    href: string;
  }[];
}

const Clients = ({header, logos}: ClientsProps) => {
  return (
    <div className='clients'>
      <div className="clients__wrapper wrapper">
        <div className="clients__container">
        <HeadOfBlock header = {header} className = 'clients' apperance = 'vertical' color = 'light'/>
        <div className="clients__logos">
        {logos.map((logo, index) => (
          <a href={logo.href} className="clients__logo-link" key={index}>
            {logo.logo}
          </a>
        ))}
        </div>
        <p className="clients__text">
        By telling these stories, they get a glimpse into your creative process and know what to expect if they hire you.
        </p>
        </div>
        <div className="clients__video-container">
          <video 
          className="clients__video" 
          controls
          poster={clientsPoster}
          >
            <source 
            src={video}          
            type='video/mp4'
            />
           
          The video element is incredible.
          <a href={video} download>Download video</a>.
          </video>
        </div>

      </div>
    </div>
  );
};

interface ContactsProps {
    header: HeadProps;
    contact: ContactProps[];
}

const Contacts = ({header, contact}: ContactsProps) => {
  return (
    <div className='contacts'>
      <div className="contacts__wrapper wrapper">
        <HeadOfBlock header = {header} className = 'contacts' apperance = 'vertical' color = 'dark'/>
        <div className="contacts__container">
            {contact.map((cont) => (
          <div className="contacts__contact contact" key={cont.id}>
              <span className="contact__number">{cont.id}</span>
            <h6 className="contact__title">{cont.title}</h6>
            <p className="contact__text">{cont.description}</p>
            <a href={cont.href} className="contact__link">{cont.link}</a>
            {cont.blockType === 'form' && (
              <div className="contact__form">dfsdfsdfsd</div>
            )}
          </div>
            ))}
            
        </div>
      </div>
    </div>
  );
};


interface Links {
  links: {
    title: string;
    navigation: {
        name: string;
        href: string;
    }[];
    contacts: {
        name: string;
        href: string;
    }[];
}
}

const Links = ({links}: Links) => {
  return (
    <div className='links'>
      <div className="links__wrapper wrapper">
          <h6 className="links__title">{links.title}</h6>
          <nav className="links__navigation">
            {links.navigation.map((nav, index) => ( 
              <>
            <a className="links__navigation-item" href={nav.href} key={index}>{nav.name}</a>
            <div className="links__dot"/>
              </>
            )
            )}
          </nav>
          <div className="links__contacts">
          {links.contacts.map((contact, index) => ( 
              <>
            <a className="links__contacts-item" href={contact.href} key={index}>{contact.name}</a>
            <div className="links__dot"/>
              </>
              )
            )}
          </div>
       </div>
    </div>
  );
};

const Copyright = () => {
  return (
    <div className='copyright'>
      <div className="copyright__wrapper wrapper">
      Copyright ©2022 Made by <a  href='https://github.com/KondakovAl'className="copyright_colored">KondakovAl</a>
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
      <Clients header = {data.clients.header} logos={data.clients.logos}/>
      <Contacts header = {data.contacts.header} contact={data.contacts.contact}/>
      <Links links = {data.links}/>
      <Copyright/>
    </div>
  );
};

export default App;