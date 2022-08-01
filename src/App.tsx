import React from 'react';

/* components */
import  HeadOfBlock  from './components/HeadOfBlock/index';

/* scss */
import './assets/scss/index.scss';

/* images */
import { logo, SocialFirst, SocialSecond } from './images/index';


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

interface SolutionsProps {
  solutions: {
    header: {
        title: string;
        subtitle: string;
        description: string;
        link: string;
    }}
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
    header: {
        title: string;
        subtitle: string;
        description: string;
        link: string;
    }}
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
    header: {
        title: string;
        subtitle: string;
        description: string;
        link: string;
    }}
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
    header: {
        title: string;
        subtitle: string;
        description: string;
        link: string;
    }}
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
    header: {
        title: string;
        subtitle: string;
        description: string;
        link: string;
    }}
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
      <Solutions solutions = {data.solutions}/>
      <Procedure procedure = {data.procedure}/>
      <About about = {data.about}/>
      <Questions questions = {data.questions}/>
      <Clients clients = {data.clients}/>
    </div>
  );
};

export default App;