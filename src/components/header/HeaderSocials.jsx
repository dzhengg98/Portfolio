import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithubSquare } from 'react-icons/fa';
import { SiAngellist } from 'react-icons/si';

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a className='header__links' href="https://linkedin.com/in/david-zheng-87671b237/" target="_blank" rel="noreferrer noopener"><BsLinkedin size={34}/></a>
      <a className='header__links' href="https://github.com/dzhengg98" target="_blank" rel="noreferrer noopener"><FaGithubSquare size={38}/></a>
      <a className='header__links' href="https://angel.co/u/david-zheng-27" target="_blank" rel="noreferrer noopener"><SiAngellist size={34}/></a>
    </div>
  )
}

export default HeaderSocials;