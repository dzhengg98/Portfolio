import React from 'react';
import './projects.css';
import REM32 from '../../assets/REM32.png';
import PickaPet from '../../assets/pickapet.png';
import TowerStacker from '../../assets/towerstacker.png';

const Projects = () => {
  return (
    <section id="projects">
      <h5>My Recent Work</h5>
      <h2>Projects</h2>

      <div className="container project__container">
        <article className="project__item">
          <div className="project__item-image">
            <img src={REM32} alt="REM32"/>
          </div>
          <h3>REM32</h3>
          <p>A Full Stack Clone of 500px using a REACT/REDUX Frontend and Rails Backend along side AWS image storage.</p>
          <div className="project__item-cta">
            <a href="https://github.com/dzhengg98/rem32" className="btn" target="_blank" rel="noreferrer noopener">Github</a>
            <a href="https://rem32.herokuapp.com/#/" className="btn btn-primary" target="_blank" rel="noreferrer noopener">Live Demo</a>
          </div>
        </article>
        <article className="project__item">
          <div className="project__item-image">
            <img src={PickaPet} alt="PickaPet"/>
          </div>
          <h3>PickaPet</h3>
          <p>Picka Pet is a fullstack MERN application that lets users adopt virtual pets to play with.</p>
          <div className="project__item-cta">
            <a href="https://github.com/madeleinepla/PickaPet" className="btn" target="_blank" rel="noreferrer noopener">Github</a>
            <a href="https://picka-pet.herokuapp.com/" className="btn btn-primary" target="_blank" rel="noreferrer noopener">Live Demo</a>
          </div>
        </article>
        <article className="project__item">
          <div className="project__item-image">
            <img src={TowerStacker} alt="TowerStacker"/>
          </div>
          <h3>TowerStacker</h3>
          <p>A fun tower stacking game built using vanilla Javascript and canvas.</p>
          <div className="project__item-cta">
            <a href="https://github.com/dzhengg98/TowerStacker" className="btn" target="_blank" rel="noreferrer noopener">Github</a>
            <a href="https://dzhengg98.github.io/TowerStacker/" className="btn btn-primary" target="_blank" rel="noreferrer noopener">Live Demo</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Projects;