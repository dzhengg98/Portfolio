import React from 'react';
import './footer.css';
import { FaLinkedin, FaGithubSquare, FaAngellist} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">David Zheng</a>
      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#techstack">Tech Stack</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://linkedin.com/in/david-zheng-87671b237/" target="_blank" rel="noreferrer noopener"><FaLinkedin size={50}/></a>
        <a href="https://github.com/dzhengg98" target="_blank" rel="noreferrer noopener"><FaGithubSquare size={50}/></a>
        <a href="https://angel.co/u/david-zheng-27" target="_blank" rel="noreferrer noopener"><FaAngellist size={50}/></a>
      </div>
    </footer>
  )
}

export default Footer;