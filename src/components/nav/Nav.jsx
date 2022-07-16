import React, { useState } from 'react';
import './nav.css';
import { ImHome3 } from 'react-icons/im';
import { FaUser } from 'react-icons/fa';
import { BsBookHalf } from 'react-icons/bs';
import { AiFillProject } from 'react-icons/ai';
import { RiMessage2Fill } from 'react-icons/ri';

const Nav = () => {

  const [activeNav, setActiveNav] = useState('#');

  return (
    <nav>
      <a 
        href="#" 
        onClick={() => setActiveNav('#')}
        className={activeNav === '#' ? 'active' : ''}
      >
        <div className="nav-icon-container">
          <div className="nav-icon"><ImHome3/></div>
          <span className="nav-text">Home</span>
        </div>
      </a>
      <a 
        href="#about" 
        onClick={() => setActiveNav('#about')}
        className={activeNav === '#about' ? 'active' : ''}
      >
        <div className="nav-icon-container">
          <div className="nav-icon"><FaUser/></div>
          <span className="nav-text">About</span>
        </div>
      </a>
      <a 
        href="#techstack"
        onClick={() => setActiveNav('#techstack')}
        className={activeNav === '#techstack' ? 'active' : ''}  
      >
        <div className="nav-icon-container">
          <div className="nav-icon-2"><BsBookHalf/></div>
          <span className="nav-text">Tech Stack</span>
        </div>
      </a>
      <a 
        href="#projects"
        onClick={() => setActiveNav('#projects')}
        className={activeNav === '#projects' ? 'active' : ''}
      >
        <div className="nav-icon-container">
          <div className="nav-icon-3"><AiFillProject/></div>
          <span className="nav-text">Projects</span>
        </div>
      </a>
      <a 
        href="#contact"
        onClick={() => setActiveNav('#contact')}
        className={activeNav === '#contact' ? 'active' : ''}
      >
        <div className="nav-icon-container">
          <div className="nav-icon-4"><RiMessage2Fill/></div>
          <span className="nav-text">Contact</span>
        </div>
      </a>
    </nav>
  )
}

export default Nav;