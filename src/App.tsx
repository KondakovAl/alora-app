import React from 'react';

/* scss */
import './assets/scss/index.scss';

/* images */
import { logo, SocialFirst, SocialSecond } from './images/index';


const data = {
  header: [
    {headerNavigation:
      [
        {name: 'Work', href: ''},
        {name: 'Services', href: ''},
      ]},
    {headerContacts:
      [
        {name: '+1123 456 7890', href: 'tel:+1123 456 7890'},
        {name: 'hello@medium.com', href: 'mailto:hello@medium.com'},
        {name: `Let's talk`, href: ''},
    ]},
    {headerSocials:
      [
        {icon: '', href: ''},
        {icon: '', href: ''},
    ]}
  ]
}

const Header = () => {
  return (
    <div className='header'>
      <div className="header__wrapper wrapper">
        <div className="header__logo-container">
          <img className="header__logo" src={logo}></img>
        </div>
        <div className="header__menu">
          <nav className="header__navigation">
            <a className="header__navigation-item">Work</a>
            <a className="header__navigation-item">Services</a>
          </nav>
          <div className="header__contacts">
            <a className="header__contacts-item">+1123 456 7890</a>
            <a className="header__contacts-item">hello@medium.com</a>
            <a className="header__contacts-item">Let's talk</a>
          </div>
          <div className="header__socials">
            <a className="header__socials-logo-container">
            <SocialFirst fill='#373C42'/>
            </a>
            <a className="header__socials-logo-container">
            <SocialSecond fill='#373C42'/>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div className='layout'>
      <Header/>
    </div>
  );
};

export default App;