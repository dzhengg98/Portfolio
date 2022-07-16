import React from 'react';
import './header.css';
import CTA from './CTA';
import ME from '../../assets/ME.png';
import HeaderSocials from './HeaderSocials';
import { BiCurrentLocation } from 'react-icons/bi';
import { IoMdPhonePortrait } from 'react-icons/io';
import { MdEmail } from 'react-icons/md';

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>David Zheng</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA/>
        <HeaderSocials/>

        <div className="me">
          <img src={ME} alt="me" />
          <div className="me-info-container">
            <div className="me-info">
              <span>NEW YORK CITY, NEW YORK</span>
            </div>
            <div className="me-info">
              <a href="sms:+1917-517-0812"><IoMdPhonePortrait/></a>
              <span>(917) 670-9621</span>
            </div>
            <div className="me-info">
              <a href="mailto:dzheng3456@gmail.com"><MdEmail/></a>
              <span>dzheng3456@gmail.com</span>
            </div>
          </div>
        </div>

        <a href="#contact" className="scroll__down">Scroll Down</a>
      </div>
    </header>
  )
}

export default Header;